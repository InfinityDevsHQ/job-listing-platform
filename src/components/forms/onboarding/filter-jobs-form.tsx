'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import Pagination from '@/components/ui/pagination';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQueryParams } from '@/hooks/useQueryParams';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const jobFilterSchema = z.object({
  employment_type: z.string().min(1, { message: 'Please Select an Employment Type' }),
  work_location_type: z.string().min(1, { message: 'Please Select CCollaboration type' }),
});
async function onSubmit(values: z.infer<typeof jobFilterSchema>) {
  console.log(values);
}
export default function FilterJobsForm() {
  const addQueryParams = useQueryParams();
  const form = useForm({
    resolver: zodResolver(jobFilterSchema),
    defaultValues: {
      employment_type: '',
      work_location_type: '',
    },
  });
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
          Employment Type
        </h3>
        <FormField
          name="employment_type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl className="flex items-center">
                <RadioGroup {...field} className="flex gap-4 lg:gap-8" defaultValue="Full-Time">
                  <div className="flex items-center">
                    <RadioGroupItem value="Full-Time" id="full" />
                    <Label htmlFor="full">Full-Time</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="Part-Time" id="part" />
                    <Label htmlFor="part">Part-Time</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="Freelance" id="freelance" />
                    <Label htmlFor="freelance">Freelance</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="Volunteer" id="volunteer" />
                    <Label htmlFor="volunteer">Volunteer</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
          Collaboration Type
        </h3>
        <FormField
          name="work_location_type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl className="f lex items-center">
                <RadioGroup {...field} className="flex gap-4 lg:gap-8" defaultValue="On-site">
                  <div className="flex items-center">
                    <RadioGroupItem value="On-site" id="site" />
                    <Label htmlFor="site">On-site</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="Remote" id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="Hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination skip handleBack={() => addQueryParams('step', 'upload-cv')} isNextSubmit />
      </form>
    </Form>
  );
}
