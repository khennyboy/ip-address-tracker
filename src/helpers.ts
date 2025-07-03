import { z } from "zod";

export const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.|$)){4}$/;
export const ipv6Regex =
  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1|([0-9a-fA-F]{1,4}:){1,7}:|:((:[0-9a-fA-F]{1,4}){1,7}))$/;
export const domainRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const FormSchema = z.object({
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

export interface Props {
  GEOAPI: (data: z.infer<typeof FormSchema>) => Promise<void>;
  isLoading: boolean;
}

export interface IPData {
  ip?: string;
  location?: {
    city?: string;
    timezone?: string;
    [key: string]: any;
  };
  isp?: string;
  [key: string]: any;
}
