import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
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
    toast.success('Subscribed👍');
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5 lg:max-w-xl">
          <h2 className="text-xl font-semibold  lg:text-2xl">Sign Up for Our Newsletter</h2>
          <p className="hidden text-xs lg:block lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate totam omnis sunt
            repellendus possimus! Velit,
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center justify-center gap-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    name="Mail"
                    leadingIcon={<MailIcon className="stroke-gray-400" />}
                    className="peer h-10 w-full rounded-md border border-dark-primary bg-dark-background p-2 pl-7 text-dark-nameWhite placeholder-dark-name outline-none transition-all duration-300 lg:min-w-[600px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            className="text-dark-nameWhite hover:text-dark-name"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-center text-xs lg:hidden lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate totam omnis sunt
          repellendus possimus! Ve
        </p>
      </form>
    </Form>
  );
}
