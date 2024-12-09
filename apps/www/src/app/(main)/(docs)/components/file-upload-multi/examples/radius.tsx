/* eslint-disable no-console */

"use client";

import { Button, type FileUploadMultiProps } from "@jamsr-ui/react";
import { useState } from "react";
import { FileUploadUsage } from "./usage";

export const FileUploadRadius = () => {
  const [radius, setRadius] = useState<FileUploadMultiProps["radius"]>();
  const radii: FileUploadMultiProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((value) => (
        <Button
          key={value}
          onClick={() => setRadius(value)}
          variant={value === radius ? "solid" : "light"}
        >
          {value}
        </Button>
      ))}
      <FileUploadUsage radius={radius} />
    </div>
  );
};
