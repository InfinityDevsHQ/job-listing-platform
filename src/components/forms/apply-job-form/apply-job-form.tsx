'use client';
import UserResume from '@/components/gernal/user-resume';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import TextArea from '@/components/ui/text-area';
import { applyForJob } from '@/lib/user';
import { getColorClasses } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const applyJobFormSchema = z.object({
  coverLetter: z.string().min(100, { message: 'Letter Must be at least 100 characters long.' }),
});
const ApplyJobForm = ({ jobId, skills }: { jobId: string; skills: string[] }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof applyJobFormSchema>>({
    resolver: zodResolver(applyJobFormSchema),
    defaultValues: {
      coverLetter: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof applyJobFormSchema>) => {
    const response = await applyForJob(jobId);
    if (response) {
      router.push('/success');
    }
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
        <div className="flex gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              bgColor={getColorClasses(index).bgColor}
              color={getColorClasses(index).textColor}
              text={skill}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <UserResume />
          <Button className="self-end" type="submit" variant={'primary'}>
            Send
            {isLoading ? (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="ml-2 h-4 w-4 rotate-45" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ApplyJobForm;
