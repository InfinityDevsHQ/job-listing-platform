import Image from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import CompanyCloud from "../svgs/company-cloud";

type File = {
  name: string;
  size: number;
  type: string;
  preview: string; // Add preview property for image URL
};

type UploadImageProps = {
  setImgUrl: (value: string) => void;
};

export default function UploadImage({ setImgUrl }: UploadImageProps) {
  const [file, setFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone<File>({
    accept: "image/*", // Allow only images for upload
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
    setImgUrl(""); // Clear the image URL
  };

  return (
    <div
      {...getRootProps()}
      className="flex items-center new-gray justify-center rounded-2xl w-full h-full bg-white border border-dashed border-black p-12"
    >
      <input {...getInputProps()} />
      {file === null && (
        <div className="flex items-center flex-col gap-11">
          <span>
            <CompanyCloud />
          </span>
          <p className="lg:text-base font-sans">
            <span className="font-bold">Click to Upload</span> or drag and drop
          </p>
        </div>
      )}
      {file && (
        <div className="relative w-full h-full">
          <Image
            src={file.preview}
            alt={file.name || "Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
}
