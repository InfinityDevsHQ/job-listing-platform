'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import Pagination from '@/components/ui/pagination';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQueryParams } from '@/hooks/useQueryParams';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const jobFilterSchema = z.object({
  employment_type: z.string().min(1, { message: 'Please Select an Employment Type' }),
  work_location_type: z.string().min(1, { message: 'Please Select CCollaboration type' }),
});

export default function FilterJobsForm() {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const form = useForm({
    resolver: zodResolver(jobFilterSchema),
    defaultValues: {
      employment_type: '',
      work_location_type: '',
    },
  });
  async function onSubmit(values: z.infer<typeof jobFilterSchema>) {
    // Updating Dat in the store
    setOnboardingData({
      ...onboardingData,
      full_time: values.employment_type === 'Full-Time',
      part_time: values.employment_type === 'Part-Time',
      freelance: values.employment_type === 'Freelance',
      volunteer: values.employment_type === 'Volunteer',
      on_site: values.work_location_type === 'On-site',
      remote: values.work_location_type === 'Remote',
      hybrid: values.work_location_type === 'Hybrid',
    });
    console.log(onboardingData);
    addQueryParams('step', 'contact');
  }
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
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Full-Time"
                      id="full"
                      onClick={(e) =>
                        field.onChange(field.value === 'Full-Time' ? '' : 'Full-Time')
                      }
                    />
                    <Label htmlFor="full">Full-Time</Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Part-Time"
                      id="part"
                      onClick={(e) =>
                        field.onChange(field.value === 'Part-Time' ? '' : 'Part-Time')
                      }
                    />
                    <Label htmlFor="part">Part-Time</Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Freelance"
                      id="freelance"
                      onClick={(e) =>
                        field.onChange(field.value === 'Freelance' ? '' : 'Freelance')
                      }
                    />
                    <Label htmlFor="freelance">Freelance</Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Volunteer"
                      id="volunteer"
                      onClick={(e) =>
                        field.onChange(field.value === 'Volunteer' ? '' : 'Volunteer')
                      }
                    />
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
              <FormControl className="flex items-center">
                <RadioGroup {...field} className="flex gap-4 lg:gap-8" defaultValue="On-site">
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="On-site"
                      id="site"
                      onClick={(e) => field.onChange(field.value === 'On-site' ? '' : 'On-site')}
                    />
                    <Label htmlFor="site">On-site</Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Remote"
                      id="remote"
                      onClick={(e) => field.onChange(field.value === 'Remote' ? '' : 'Remote')}
                    />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <RadioGroupItem
                      value="Hybrid"
                      id="hybrid"
                      onClick={(e) => field.onChange(field.value === 'Hybrid' ? '' : 'Hybrid')}
                    />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination
          skip
          handleBack={() => addQueryParams('step', 'upload-cv')}
          handleSkip={() => addQueryParams('step', 'contact')}
          isNextSubmit
        />
      </form>
    </Form>
  );
}
