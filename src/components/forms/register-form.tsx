"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// import { doc } from "@/lib/spreadsheet";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import axios from "axios";
import {
  registerFormSchema,
  RegisterPostData,
  STATUS_OPTIONS,
} from "@/lib/schemas";
import { useDropzone } from "react-dropzone";
import CVDropzone from "../cv-dropzone";
import { useUploadThing } from "@/utils/uploadthing";
import FormFieldInput from "./form-fields/form-field-input";
import { useRouter } from "next/navigation";

type IRegisterForm = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const { startUpload } = useUploadThing("pdfUploader", {
    // onClientUploadComplete: () => {
    //   alert("uploaded successfully!");
    // },
    onUploadError: () => {
      // Toast error
      alert("error occurred while uploading");
    },
  });
  const form = useForm<IRegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience_years: 0,
      major: "",
    },
  });
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterPostData) =>
      axios.post("/api/register-form", data),
    onSuccess: () => {
      router.push("/xin-cam-on");
    },
  });

  async function onSubmit(values: IRegisterForm) {
    const { cv_file, ...restData } = values;
    const selectedFiles = new Array(cv_file);
    const result = await startUpload(selectedFiles);
    if (result) {
      const data = { ...restData, cv_url: result[0].url };
      mutate(data);
    }
  }

  const isSubmitting = form.formState.isSubmitting || isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldInput
          name="name"
          label="Họ và tên"
          placeholder="Nguyễn Văn A"
          isSubmitting={isSubmitting}
          form={form}
        />
        <FormFieldInput
          name="phone"
          label="Số điện thoại"
          placeholder="0xxxxxxxxx"
          isSubmitting={isSubmitting}
          form={form}
        />
        <FormFieldInput
          name="email"
          label="Email"
          placeholder="abc@gmail.com"
          isSubmitting={isSubmitting}
          form={form}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Vị trí hiện tại</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value?.toString()}
                  className="flex flex-col space-y-1"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <FormItem
                      key={status.value}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={status.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {status.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormFieldInput
          name="experience_years"
          label="Số năm kinh nghiệm"
          placeholder="0"
          type="number"
          isSubmitting={isSubmitting}
          form={form}
          // onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
        />

        <FormFieldInput
          name="major"
          label="Chuyên ngành học"
          placeholder="Công nghệ thông tin"
          isSubmitting={isSubmitting}
          form={form}
        />

        <FormField
          control={form.control}
          name="cv_file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tải lên CV (Định dạng PDF)</FormLabel>
              <FormControl>
                {/* <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    field.onChange(files);
                  }}
                  disabled={isSubmitting}
                /> */}
                <CVDropzone
                  isSubmitting={isSubmitting}
                  onChange={(files) => {
                    field.onChange(files[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 size-4e animate-spin" />}
          Đăng ký ngay
        </Button>
      </form>
    </Form>
  );
}
