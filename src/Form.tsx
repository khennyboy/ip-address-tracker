import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.|$)){4}$/;
const ipv6Regex =
  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1|([0-9a-fA-F]{1,4}:){1,7}:|:((:[0-9a-fA-F]{1,4}){1,7}))$/;
const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormSchema = z.object({
  query: z
    .string()
    .min(1, { message: "Please enter an IP address or domain." })
    .refine(
      (val) =>
        ipv4Regex.test(val) || ipv6Regex.test(val) || domainRegex.test(val),
      {
        message: "Please enter a valid IPv4, IPv6 address, or domain name.",
      }
    ),
});

export function IpTrackerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const cleanedQuery = data.query.trim().replace(/^https?:\/\//, "");
    try {
      const param =
        ipv4Regex.test(cleanedQuery) || ipv6Regex.test(cleanedQuery)
          ? `ipAddress=${cleanedQuery}`
          : `domain=${cleanedQuery}`;

      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }&${param}`
      );
      console.log(response, "response");
      const result = await response.json();
      console.log(result, "result");
      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }
      toast.success("✅ IP data fetched successfully!");
    } catch (error) {
      console.error(error);
      toast.error(" Failed to fetch IP data");
    }
  }

  return (
    <Form {...form}>
      <form
        className="w-[90%]  max-w-lg mx-auto [@media(min-width:400px)_and_(max-width:600px)]:w-[85%]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="e.g. 8.8.8.8 or google.com"
                    {...field}
                    className="py-6 bg-white text-black md:py-7 md:text-lg"
                  />{" "}
                  <Button
                    type="submit"
                    className="cursor-pointer absolute right-0 top-0 h-full !px-4 md:!px-6 rounded-l-none"
                  >
                    <FaGreaterThan />
                  </Button>
                </div>
              </FormControl>
              {form.formState.errors.query && (
                <div className="flex items-center justify-center gap-1 mt-2 md:text-lg tracking-tight font-medium text-white">
                  <BiError className="text-white text-xl" />
                  <span>{form.formState.errors.query.message as string}</span>
                </div>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
