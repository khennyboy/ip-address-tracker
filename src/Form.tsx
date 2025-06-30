import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { z } from "zod";
import { FormSchema } from "./helpers";
import useHandleApi from "./useHandleApi";

export function IpTrackerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });
  const { GEOAPI, isLoading, data } = useHandleApi();

  return (
    <Form {...form}>
      <form
        className="w-[90%] max-w-lg mx-auto [@media(min-width:500px)_and_(max-width:600px)]:w-[80%]"
        onSubmit={form.handleSubmit(GEOAPI)}
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
                    className="py-6 bg-white text-black sm:py-7 md:text-lg"
                  />{" "}
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className="disabled:cursor-not-allowed disabled:pointer-events-auto cursor-pointer absolute right-0 top-0 h-full !px-4 md:!px-6 rounded-l-none disabled:opacity-100"
                  >
                    {isLoading ? <Spinner /> : <FaGreaterThan />}
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
