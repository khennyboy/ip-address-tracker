import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import { z } from "zod";
import { FormSchema, Props } from "./helpers";

export function IpTrackerForm({ GEOAPI, isLoading }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  // useEffect(() => {
  //   GEOAPI({ query: "" });
  // }, []);

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
                  <div className="absolute right-0 top-0 h-full *:rounded-l-none flex items-center *:h-full">
                    {isLoading ? (
                      <Button
                        size="sm"
                        disabled
                        className="!px-5 disabled:pointer-events-auto disabled:cursor-not-allowed"
                      >
                        <Loader2Icon className="animate-spin" />
                      </Button>
                    ) : (
                      <Button
                        size="icon"
                        className="size-8 px-6 cursor-pointer"
                        type="submit"
                      >
                        <ChevronRightIcon />
                      </Button>
                    )}
                  </div>
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
