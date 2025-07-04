import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRightIcon, Loader2Icon, ShieldAlert } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema, Props } from "./helpers";

export function IpTrackerForm({ GEOAPI, isLoading }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  useEffect(() => {
    GEOAPI({ query: "" });
  }, [GEOAPI]);

  return (
    <Form {...form}>
      <form
        className="w-[90%] max-w-lg mx-auto [@media(min-width:500px)_and_(max-width:700px)]:w-[80%]"
        onSubmit={form.handleSubmit(GEOAPI)}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative rounded-xl  overflow-hidden">
                  <Input
                    placeholder="e.g. 8.8.8.8 or google.com"
                    {...field}
                    className="py-6 bg-white text-black sm:py-7  md:text-lg rounded-none"
                  />{" "}
                  <div className="absolute right-0 top-0 h-full *:rounded-none flex items-center *:h-full">
                    <Button
                      size={isLoading ? "sm" : "icon"}
                      disabled={isLoading}
                      type={isLoading ? "button" : "submit"}
                      className={`!px-8 size-8  ${
                        isLoading
                          ? "disabled:pointer-events-auto disabled:cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      {isLoading ? (
                        <Loader2Icon className="animate-spin" />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </Button>
                  </div>
                </div>
              </FormControl>
              {form.formState.errors.query && (
                <div className="flex items-center bg-red-500 p-2 rounded-lg justify-center gap-1 mt-1 lg:mt-1.5 md:text-lg tracking-tight font-medium text-white">
                  <ShieldAlert className="text-xl text-white" />
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
