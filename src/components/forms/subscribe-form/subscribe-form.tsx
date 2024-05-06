import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { subscribe } from '@/lib/newsletter';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const subscribeFormSchema = z.object({
  email: z.string().email({ message: 'Please Enter a valid Email Address' }),
});
export default function Subscribe() {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit({ email }: z.infer<typeof subscribeFormSchema>) {
    const body = {
      email,
    };
    subscribe(body)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message || 'Uh oh! Something went wrong.');
      });
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-semibold text-gray-50 lg:text-2xl">
          Sign Up for Our Newsletter
        </h2>
        <div className="flex flex-shrink-0 items-center justify-center gap-2 lg:max-w-xl">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Email" name="Mail" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline">
            Subscribe
            {isLoading ? (
              <LoaderCircleIcon className="animate ml-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
