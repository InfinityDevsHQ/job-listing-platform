import Image from 'next/image';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CompanyCloud from '../svgs/company-cloud';
import HelpText from './help-text';

type File = {
  name: string;
  size: number;
  type: string;
  preview: string; // Add preview property for image URL
};

type UploadImageProps = {
  helpText?: string;
};

export default function UploadImage({ helpText }: UploadImageProps) {
  const [file, setFile] = useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone<File>({
    accept: 'image/*', // Allow only images for upload
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const newFile = acceptedFiles[0];
        setFile({
          ...newFile,
          preview: URL.createObjectURL(newFile),
        });
        setImgUrl(URL.createObjectURL(newFile));
      }
    },
  });

  const removeFile = () => {
    URL.revokeObjectURL(file!.preview);
    setFile(null);
    setImgUrl(''); // Clear the image URL
  };

  return (
    <div className="flex h-full flex-col gap-1">
      <div
        {...getRootProps()}
        className="new-gray flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-black bg-white p-12"
      >
        <input {...getInputProps()} />
        {file === null && (
          <div className="flex flex-col items-center gap-11">
            <span>
              <CompanyCloud />
            </span>
            <p className="font-sans lg:text-base">
              <span className="font-bold">Click to Upload</span> or drag and drop
            </p>
          </div>
        )}
        {file && (
          <div className="relative h-full w-full">
            <Image src={file.preview} alt={file.name || 'Image'} layout="fill" objectFit="cover" />
          </div>
        )}
      </div>
      {helpText && <HelpText text={helpText} />}
    </div>
  );
}
