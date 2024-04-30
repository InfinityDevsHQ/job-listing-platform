'use client';
import Pagination from '@/components/ui/pagination';
import UploadImage from '@/components/ui/upload-image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const FileSchema = z.object({
  name: z.string(),
  size: z.number(),
  type: z.string(),
  preview: z.string(),
});
export default function CVForm() {
  const form = useForm({});
  return (
    <form className="flex h-full flex-col gap-4 py-8 lg:gap-8">
      <UploadImage />
      <Pagination />
    </form>
  );
}
