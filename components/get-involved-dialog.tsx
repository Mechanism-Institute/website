"use client";

import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { supporterDialogAtom } from "@/state/supporter-atom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  twitter: z.string().optional(),
  involvement: z.string().nonempty(),
});

export default function SupporterDialog() {
  const [open, setOpen] = useAtom(supporterDialogAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      twitter: "",
      // involvement: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col gap-4 p-10 bg-white rounded-3xl">
        <Typography className="text-stone font-gotham leading-full text-[32px]">
          Get Involved
        </Typography>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name<span className="text-orange">*</span>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        required
                        className="border border-gray-400 bg-gray-50"
                        {...field}
                      />
                    </FormControl>
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email<span className="text-orange">*</span>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        required
                        className="border border-gray-400 bg-gray-50"
                        {...field}
                      />
                    </FormControl>
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Twitter
                    <FormControl>
                      <Input
                        placeholder="Twitter"
                        className="border border-gray-400 bg-gray-50"
                        {...field}
                      />
                    </FormControl>
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="involvement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How would you like to get involved?<span className="text-orange">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select One" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Working with an MI expert">
                        Working with an MI expert
                      </SelectItem>
                      <SelectItem value="Partnering as an organization">
                        Partnering as an organization
                      </SelectItem>
                      <SelectItem value="Becoming an MI researcher">
                        Becoming an MI researcher
                      </SelectItem>
                      <SelectItem value="Contributing Ok sure to the Library">
                        Contributing Ok sure to the Library
                      </SelectItem>
                      <SelectItem value="Joining the MI team">Joining the MI team</SelectItem>
                      <SelectItem value="Competitions & events">Competitions & events</SelectItem>
                      <SelectItem value="Newsletter & reports">Newsletter & reports</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button variant="primary" className="gap-1">
                Submit
                <ArrowLeft className="transform rotate-180" />
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
