'use client';
import DropDown from '@/components/dropdown';
import CompanyCity from '@/components/svgs/company-city';
import CompanyClock from '@/components/svgs/company-clock';
import CompanyDictionary from '@/components/svgs/company-dictionary';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyGlobe from '@/components/svgs/company-globe';
import { Form } from '@/components/ui/form';
import Input from '@/components/ui/input';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import useLocationFormData from '@/stores/location-form-store';
import { zodResolver } from '@hookform/resolvers/zod';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const locationFormSchema = z.object({
  preferLanguage: z.string().min(2, {
    message: 'Preferred language must be at least 2 characters long',
  }),
  timeZone: z.string().min(2, { message: 'Time zone must be at least 2 characters long' }),
  country: z.string().min(2, { message: 'Country name must be at least 2 characters long' }),
  city: z.string().min(2, { message: 'City name must be at least 2 characters long' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const Languages = [
  {
    value: 'en',
    text: 'English',
  },
  {
    value: 'ur',
    text: 'Urdu',
  },
];
const TimeZones = [{ value: 'au', text: 'Australia' }];
const Cities = [{ value: 'sidney', text: 'Sidney, Australia' }];
export default function LocationForm() {
  const form = useForm<z.infer<typeof locationFormSchema>>({
    resolver: zodResolver(locationFormSchema),
    defaultValues: {
      preferLanguage: '',
      timeZone: '',
      country: '',
      city: '',
      password: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof locationFormSchema>) {
    console.log(values);
  }
  const [preferLanguage, setPreferLanguage] = useState(Languages[0].value);
  const [timeZone, setTimeZone] = useState(TimeZones[0].value);
  const [errors, setErrors] = useState({
    country: '',
    password: '',
  });
  const [city, setCity] = useState(Cities[0].value);
  const { locationFormData, setLocationFormData } = useLocationFormData();
  const addQueryParams = useQueryParams();
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' });
    setLocationFormData({
      ...locationFormData,
      [name]: value,
      preferLanguage,
      city,
      timeZone,
    });
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8">
        <DropDown
          options={Languages}
          select={preferLanguage}
          setSelect={setPreferLanguage}
          leadingIcon={<CompanyDictionary />}
        />
        <DropDown
          options={TimeZones}
          select={timeZone}
          setSelect={() => setTimeZone()}
          leadingIcon={<CompanyClock width={16} height={16} />}
        />
        <Input
          variant={'primary'}
          name="country"
          value={locationFormData.country}
          helpText={errors.country}
          onChange={handleChange}
          type="text"
          placeholder="Country"
          leadingIcon={<CompanyGlobe />}
        />
        <DropDown
          options={Cities}
          select={city}
          setSelect={setCity}
          leadingIcon={<CompanyCity />}
        />
        <Input
          variant={'primary'}
          name="password"
          type="password"
          value={locationFormData.password}
          helpText={errors.password}
          onChange={handleChange}
          placeholder="Password"
          leadingIcon={<CompanyEye width={16} height={16} />}
        />
        <Pagination previous={false} handleNext={() => console.log('gg')} />
      </form>
    </Form>
  );
}
