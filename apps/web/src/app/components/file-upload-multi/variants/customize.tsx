/* eslint-disable no-console */

"use client";

import { ImageAddIcon } from "@jamsr-ui/shared-icons";
import { FileUploadDefault } from "./default";

export const FileUploadCustomized = () => {
  return (
    <FileUploadDefault
      className="w-full"
      classNames={{
        description: "text-primary",
        info: "text-secondary",
        picker: "bg-gray-100 border-primary max-h-[200px]",
      }}
      description="Please upload the image here"
      info="Maximum 1 image (png, webp, jpg) and maximum size of 1MB"
      uploadIcon={<ImageAddIcon />}
      dropzoneOptions={{
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp"],
        },
        maxSize: 1.2 * 1024 * 1024,
      }}
    />
  );
};
