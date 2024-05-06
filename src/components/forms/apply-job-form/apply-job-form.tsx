'use client';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import TextArea from '@/components/ui/text-area';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const applyJobFormSchema = z.object({
  coverLetter: z.string().min(100, { message: 'Letter Must be at least 100 characters long.' }),
});
const ApplyJobForm = () => {
  const form = useForm<z.infer<typeof applyJobFormSchema>>({
    resolver: zodResolver(applyJobFormSchema),
    defaultValues: {
      coverLetter: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof applyJobFormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextArea
                  {...field}
                  placeholder="Start Typing your cover letter"
                  className="h-auto"
                  rows={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="self-end" type="submit">
          Send
          <Send className="ml-2 rotate-45" size={16} />
        </Button>
      </form>
    </Form>
  );
};
export default ApplyJobForm;
