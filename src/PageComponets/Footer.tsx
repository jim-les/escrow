import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  email: z.string().email(),
});
export const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubmit = () => {};
  return (
    <div className="max-w-[1280px] mx-auto px-3">
      <div className=" h-[300px] lg:flex flex-row items-start justify-between gap-4 ">
        <div>
          <h1 className="text-yellow-300 text-4xl font-[800] mb-4 text-center lg:text-left">
            Fair<span className="text-yellow-900">Trade</span>
          </h1>
          <p className="lg:w-[250px] leading-7 text-center lg:text-left">
            FairTrade is a secure online payment processing escrow service for
            using wordwide
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-3 mt-4">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-[800] text-center lg:text-left">
            About FairTrade
          </h1>
          <div className="flex flex-col mt-4 items-center lg:items-start">
            <Link to="/" className="mb-4">
              Home
            </Link>
            <Link to="/about-us">About Us</Link>
          </div>
        </div>
        <div className=" mb-4">
          <h1 className=" text-xl font-[800] text-center lg:text-left ">
            Useful Links
          </h1>
          <div className="flex flex-col mt-4 items-center lg:items-start">
            <Link to="/contact-us" className="mb-4">
              Contact
            </Link>
            <Link to="/privancy" className="mb-4">
              Privancy
            </Link>
            <Link to="/terms-conditions">Terms & condtions</Link>
          </div>
        </div>
        <div className="mb-4">
          <h1 className=" text-xl font-[800] mb-4 text-center lg:text-left">
            Subscribe to newsletter
          </h1>
          <p className="leading-7 mb-4 text-center lg:text-left">
            By subscribing to our mailing list you will alway be updated
            <br />
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-[90%] mx-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder=" email " type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Subscribe
              </Button>
            </form>
          </Form>
          
          <div className="lg:hidden justify-center items-center ">
        <h1 className=" mb-6 pt-2 text-center pb-8">
          Copyright @{new Date().getFullYear()} fairtrade.All rights reserved.
        </h1>
      </div>
        </div>
      </div>
      <div className="border hidden lg:block" />
      <div className="hidden lg:flex justify-center items-center ">
        <h1 className=" mb-6 pt-2">
          Copyright @{new Date().getFullYear()} fairtrade.All rights reserved.
        </h1>
      </div>
      
     
    </div>
  );
};
