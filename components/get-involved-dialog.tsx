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
import { useState } from "react";
import { useMutation } from "react-query";
import { storeGetInvolvedSubmit } from "@/lib/store-user-input";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  twitter: z.string().optional(),
  involvement: z.string().nonempty(),
});

export default function SupporterDialog() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useAtom(supporterDialogAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation<void, Error, z.infer<typeof formSchema>>({
    mutationFn: async (values) => {
      await storeGetInvolvedSubmit(values);
    },
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      form.reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="flex flex-col gap-4 p-10 bg-white rounded-3xl">
        {submitted ? (
          <div className="flex flex-col gap-4">
            <Typography variant="subtitle" className="text-stone font-gotham leading-full">
              Thanks for your interest!
            </Typography>
            <Typography className="text-stone font-gotham leading-full">
              {"We'll be in touch about future opportunities."}
            </Typography>
          </div>
        ) : (
          <>
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
                            type="text"
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
                            type="text"
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
                          <SelectItem value="Become an MI researcher">
                            Become an MI researcher
                          </SelectItem>
                          <SelectItem value="Contribute to the Library">
                            Contribute to the Library
                          </SelectItem>
                          <SelectItem value="Join the MI team">Join the MI team</SelectItem>
                          <SelectItem value="Competitions & events">
                            Competitions & events
                          </SelectItem>
                          <SelectItem value="Newsletter & reports">Newsletter & reports</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button variant="primary" className="gap-1" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                    <ArrowLeft className="transform rotate-180" />
                  </Button>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
