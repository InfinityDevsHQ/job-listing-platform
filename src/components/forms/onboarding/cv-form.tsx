'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const fileSchema = z.object({
  fileName: z.string().min(2, { message: 'Please Upload a valid file' }),
});
export default function CVForm() {
  const addQueryParams = useQueryParams();
  const form = useForm<z.infer<typeof fileSchema>>({
    resolver: zodResolver(fileSchema),
    defaultValues: {
      fileName: '',
    },
  });
  async function onSubmit(values: z.infer<typeof fileSchema>) {
    console.log(values);
    addQueryParams('step', 'filter-jobs');
  }
  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4 py-8 lg:gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="fileName"
          render={({ field }) => (
            <FormItem>
              <FormControl {...field}>
                <Input type="File" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination isNextSubmit />
      </form>
    </Form>
  );
}
