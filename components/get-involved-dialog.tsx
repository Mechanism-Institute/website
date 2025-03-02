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
import { useState } from "react";
import { useMutation } from "react-query";
import { storeGetInvolvedSubmit } from "@/lib/store-user-input";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  x: z.string().optional(),  // Changed from twitter to x
  message: z.string().optional(),
});

export default function SupporterDialog() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useAtom(supporterDialogAtom);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation<void, Error, z.infer<typeof formSchema>>({
    mutationFn: async (values) => {
      setError(null);
      try {
        const response = await storeGetInvolvedSubmit(values);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || "Failed to submit form");
        }
      } catch (err) {
        console.error("Submission error:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        throw err;
      }
    },
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting form with values:", values);
    mutate(values);
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      form.reset();
      setError(null);
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
              Get in touch
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
                  name="x"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        X
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="X"
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Message
                      </FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Enter your message"
                          className="w-full min-h-[100px] px-3 py-2 border border-gray-400 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {error && (
                  <div className="text-red-500 text-sm">
                    Error: {error}
                  </div>
                )}
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