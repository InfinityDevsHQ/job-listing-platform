import Image from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

type File = {
  name: string;
  size: number;
  type: string;
  preview: string; // Add preview property for image URL
};

function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone<File>({
    accept: "image/*", // Allow only images for upload
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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag & drop some images here, or click to select files</p>
      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.name} ({file.size} bytes)
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

export default MyDropzone;
