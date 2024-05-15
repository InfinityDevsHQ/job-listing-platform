'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import { uploadCV } from '@/lib/onboarding';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const fileSchema = z.object({
  fileData: z.instanceof(FileList).refine((files) => files.length > 0, 'File is required'),
});

export default function CVForm() {
  const addQueryParams = useQueryParams();
  const form = useForm<z.infer<typeof fileSchema>>({
    resolver: zodResolver(fileSchema),
    defaultValues: {
      fileData: undefined,
    },
  });
  async function onSubmit(values: z.infer<typeof fileSchema>) {
    console.log(values);
    const fileList = values.fileData;
    const file = fileList[0];
    const payload = {
      user_id: 1,
      cv: file,
      force_refresh: false,
    };
    const response = uploadCV(payload);
    console.log(response);
  }
  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4 py-8 lg:gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="fileData"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="File"
                  onChange={(e) => {
                    field.onChange(e.target.files); // Register the FileList with react-hook-form
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination isNextSubmit handleBack={() => addQueryParams('step', 'location')} />
      </form>
    </Form>
  );
}
