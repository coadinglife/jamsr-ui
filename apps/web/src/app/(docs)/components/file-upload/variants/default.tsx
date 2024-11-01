/* eslint-disable no-console */

"use client";

import { ImageMetadata } from "@/app/config";
import { CDN_API_URL, CDN_UPLOAD_URL } from "@/utils/config";
import {
  type FileUploadError,
  SingleFileUpload,
  type SingleFileUploadProps,
  toast,
} from "@jamsr-ui/react";

export const FileUploadDefault = (props: Partial<SingleFileUploadProps>) => {
  const { dropzoneOptions, ...restProps } = props;
  const handleOnError = ({ message }: FileUploadError) => {
    console.log("error:->", message);
    toast.error(message);
  };

  const onUploadSuccess = (response: ImageMetadata) => {
    console.log("response:->", response);
  };

  const handleOnDelete = () => {
    console.log("delete");
  };

  const getFileUrlAfterUpload = (response: ImageMetadata) => {
    return `${CDN_API_URL}/${response.url}`;
  };

  return (
    <SingleFileUpload
      onUploadSuccess={onUploadSuccess}
      getFileUrlAfterUpload={getFileUrlAfterUpload}
      uploadApiUrl={CDN_UPLOAD_URL}
      inputName="file"
      className="aspect-video h-40"
      onError={handleOnError}
      onDelete={handleOnDelete}
      showDeleteBtn
      {...restProps}
      dropzoneOptions={{
        ...dropzoneOptions,
      }}
    />
  );
};
