'use client';
import Pagination from '@/components/ui/pagination';
import UploadImage from '@/components/ui/upload-image';
import { useQueryParams } from '@/hooks/useQueryParams';
import useCVFormData from '@/stores/cv-form-data-store';
import { useState } from 'react';
export default function CVForm() {
  const { cvFormData, setCVFormData } = useCVFormData();
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState({ imgUrl: '' });
  const addQueryParams = useQueryParams();

  return (
    <form className="flex h-full flex-col gap-4 py-8 lg:gap-8">
      <UploadImage setImgUrl={setUrl} helpText={errors.imgUrl} />
      <Pagination handleBack={() => addQueryParams('step', 'location')} />
    </form>
  );
}
