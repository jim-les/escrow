import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string(),
  password: z.string().min(2).max(15),
  issue: z.string(),
  message: z.string().min(15),
});
export const ContactUsForm = () => {
  const [captureValue, setCaptureValue] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      issue: "",
      message: "",
    },
  });
  const handleSubmit = () => {};
  const OnChangeFunction = (val: string | null) => {
    if (val) {
      setCaptureValue(true);
    } else {
      setCaptureValue(false);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4 mx-3"
        >
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter your name <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter email address <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your email or id Number"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  State your issue <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="issue" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Describe your issue in detail{" "}
                  <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="your issue..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LedDV4pAAAAAAjKkyJnChvNRAd-kn6WXDGb5P8B" className="w-full"
            onChange={OnChangeFunction}
          />
          </div>
          <Button
            type="submit"
            variant="primary"
            className={cn("z-1", !captureValue && "hidden")}
          >
            Submit
          </Button>
          <div></div>
        </form>
      </Form>
    </>
  );
};
