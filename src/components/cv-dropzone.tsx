import { cn } from "@/lib/utils";
import { CloudUpload, FileCheck, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function CVDropzone({
  isSubmitting,
  onChange,
}: {
  isSubmitting: boolean;
  onChange: (files: File[]) => void;
}) {
  const [file, setFile] = useState<File | null | undefined>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const removeFile = () => {
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section className="max-w-4xl w-full">
      <div
        className={cn(
          "border text-center border-dashed rounded-md  px-8 h-28 flex items-center",
          isDragActive && "bg-orange-50",
          file && "border-green-500",
          isSubmitting && "cursor-not-allowed opacity-50"
        )}
      >
        {file ? (
          <div className="flex items-center gap-2 w-full">
            <div className="flex item-center gap-2 grow">
              <div className="flex items-center">
                <FileCheck className="size-6" />
              </div>
              <div className="text-left">
                <p>{file.name}</p>
                <p>CV tải lên thành công</p>
              </div>
            </div>
            <div>
              <button onClick={removeFile}>
                <X />
              </button>
            </div>
          </div>
        ) : (
          <div {...getRootProps()} className="w-full cursor-pointer">
            <input {...getInputProps()} />
            <div className="flex flex-col gap-2 items-center">
              <CloudUpload />
              <p>
                Kéo thả hoặc nhấp <strong>tại đây</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
