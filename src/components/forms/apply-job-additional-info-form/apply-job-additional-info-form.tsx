'use client';
import AppSelect from '@/components/ui/app-select';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const MinimumSalary = ['$ 100', '$ 200', '$ 800'];
const Amount = ['$ 100', '$ 200', '$ 800'];
const Hours = ['2', '4', '8'];
const additionInfoFormSchema = z.object({
  email: z.string().email({ message: 'Please Enter a valid email address' }),
  minimum_salary: z.string().min(1, { message: 'Please Select One' }),
  amount: z.string().min(1, { message: 'Please Select One' }),
  hours: z.string().min(1, { message: 'Please Select One' }),
});
const ApplyJobAdditionInfoForm = () => {
  const form = useForm({
    resolver: zodResolver(additionInfoFormSchema),
    defaultValues: {
      email: '',
      minimum_salary: '',
      maximum_salary: '',
      amount: '',
      hours: '',
    },
  });
  async function onSubmit(values: z.infer<typeof additionInfoFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="m-4 !mt-0 grid grid-cols-4 gap-4 rounded-lg border border-dark-background3 p-4 pt-8 lg:m-8 lg:border-none lg:bg-dark-primary"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h5 className="col-span-4 text-base font-bold text-dark-nameWhite">
          Increase your chances of success!
        </h5>
        <p className="col-span-4 text-sm text-dark-name">
          Even in companyName, the following additional information about you is welcome. Filling it
          out is not mandatory, but it may help you get this job.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormControl>
                <Input placeholder="Email" variant="primary" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minimum_salary"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <AppSelect
                  {...field}
                  placeholder="Minimum Salary"
                  options={MinimumSalary.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maximum_salary"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-span-1">
              <FormControl>
                <AppSelect
                  placeholder="Maximum Salary"
                  {...field}
                  options={Amount.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hours"
          render={({ field }) => (
            <FormItem className="col-span-4 lg:col-span-1">
              <FormControl>
                <AppSelect
                  placeholder="Hours"
                  {...field}
                  options={Hours.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-4 ml-auto place-items-end" variant={'primary'}>
          Send <SendIcon className="ml-2 h-4 w-4 rotate-45" />
        </Button>
      </form>
    </Form>
  );
};
export default ApplyJobAdditionInfoForm;
