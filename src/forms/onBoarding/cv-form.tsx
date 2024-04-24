'use client';
import Pagination from '@/components/ui/pagination';
import UploadImage from '@/components/ui/upload-image';
import { useQueryParams } from '@/hooks/useQueryParams';
import useCVFormData from '@/stores/cv-form-data-store';
import { uploadCVDataSchema } from '@/types/schemas/upload-cv-data-schema';
import { useState } from 'react';
import { ZodIssue } from 'zod';
export default function CVForm() {
  const { cvFormData, setCVFormData } = useCVFormData();
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState({ imgUrl: '' });
  const addQueryParams = useQueryParams();
  function handleSubmit(e) {
    e.preventDefault();
    setCVFormData({ ...cvFormData, imgUrl: url });
    console.log(cvFormData);
    const validate = uploadCVDataSchema.safeParse(cvFormData);
    if (validate.success) {
      addQueryParams('step', 'filter-jobs');
      console.log('Validated', validate.data);
    } else {
      const validationErrors = validate.error.errors;
      console.error(validationErrors);
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors({ ...errors, ...formattedErrors });
    }
  }
  return (
    <form className="flex h-full flex-col gap-4 py-8 lg:gap-8">
      <UploadImage setImgUrl={setUrl} helpText={errors.imgUrl} />
      <Pagination handleBack={() => addQueryParams('step', 'location')} handleNext={handleSubmit} />
    </form>
  );
}
