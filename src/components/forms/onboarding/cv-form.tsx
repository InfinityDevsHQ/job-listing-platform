'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const fileSchema = z.object({
  fileData: z.instanceof(File).refine((file) => file.size < 7000000, {
    message: 'Your resume must be less than 7MB.',
  }),
});

export default function CVForm() {
  const addQueryParams = useQueryParams();
  const { data: userProfile } = useUserProfile();
  const form = useForm<z.infer<typeof fileSchema>>({
    resolver: zodResolver(fileSchema),
    defaultValues: {
      fileData: undefined,
    },
  });
  const readFileAsArrayBuffer = (file: File): Promise<BlobPart | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };
  async function onSubmit(values: z.infer<typeof fileSchema>) {
    const reader = new FileReader();
    const file = values.fileData;

    const formData = new FormData();
    formData.append('user_id', '7');

    formData.append('force_refresh', 'false');
    const binaryData = await readFileAsArrayBuffer(file);
    if (binaryData) {
      formData.set('cv', new Blob([binaryData], { type: file.type }), file.name);
    }
    try {
      const response = await fetch('http://server1.neuromatch.pro:8001/api/v1/neural/upload-cv', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        toast.error('Something went wrong while uploading your resume');
      } else {
        toast.success('Your resume is uploaded successfully');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4 py-8 lg:gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="fileData"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="File"
                  accept="application/docs, application/docx, application/pdf"
                  onChange={(event) => onChange(event.target.files && event.target.files[0])}
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
