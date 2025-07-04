import { toast } from "sonner";
import { FormSchema, IPData } from "./helpers";
import { useCallback, useState } from "react";
import { z } from "zod";

export default function useHandleApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPData | null>(null);

  const GEOAPI = useCallback(async (formData: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true);
      const cleanedQuery = formData.query.trim().replace(/^https?:\/\//, "");
      const response = await fetch(`https://ipwhois.app/json/${cleanedQuery}`);
      const result = await response.json();

      console.log(result, "result");

      if (result.success === false || result.error) {
        throw new Error(
          result.message || result.reason || "Failed to fetch IP data"
        );
      }

      toast.success("IP data fetched successfully!");
      setData(result as IPData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch IP data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { GEOAPI, isLoading, data };
}
