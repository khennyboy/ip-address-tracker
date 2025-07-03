import { toast } from "sonner";
import { FormSchema, IPData, ipv4Regex, ipv6Regex } from "./helpers";
import { useCallback, useState } from "react";
import { z } from "zod";

export default function useHandleApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPData>({} as IPData);

  const GEOAPI = useCallback(async (formData: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true);

      const cleanedQuery = formData.query.trim().replace(/^https?:\/\//, "");

      const param =
        ipv4Regex.test(cleanedQuery) || ipv6Regex.test(cleanedQuery)
          ? `ipAddress=${cleanedQuery}`
          : `domain=${cleanedQuery}`;

      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }&${param}`
      );

      const result = await response.json();
      console.log(response, "response");
      console.log(result, "result");

      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }

      toast.success("IP data fetched successfully!");
      setData(result);
    } catch (error) {
      console.error(error);
      toast.error(" Failed to fetch IP data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { GEOAPI, isLoading, data };
}
