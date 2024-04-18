"use client";
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

export default function UploadImage() {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone<File>({
    accept: "image/*", // Allow only images for upload
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        }))
      );
    },
  });

  return (
    // Replace rounded with 20px
    <div
      {...getRootProps()}
      className="flex items-center new-gray justify-center rounded-2xl w-full h-full bg-white border border-dashed border-black p-12"
    >
      <input {...getInputProps()} />
      {files.length === 0 && (
        <div className="flex items-center flex-col gap-11">
          <span>
            <CompanyCloud />
          </span>
          <p className="lg:text-base font-sans ">
            <span className="font-bold">Click to Upload</span> or drag and drop
          </p>
        </div>
      )}
      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <Image
                src={file.preview}
                alt={file.name}
                width={0}
                height={0}
                className="h-full w-full"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
