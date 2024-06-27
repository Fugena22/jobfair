import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const nameRegex = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
);

export const STATUS_OPTIONS = [
  { value: "Mới tốt nghiệp", label: "Mới tốt nghiệp" },
  { value: "Đã đi làm", label: "Đã đi làm" },
];

export const MAX_FILE_SIZE = 4; // MB

export const registerDataSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Vui lòng không bỏ trống thông tin" })
    .regex(nameRegex, "Tên không được phép ghi số!"),
  email: z
    .string()
    .min(2, { message: "Địa chỉ email không hợp lệ!" })
    .email("Định dạng email chưa đúng"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có 10 chữ số!")
    .max(10, "Số điện thoại chỉ có 10 chữ số!")
    .regex(phoneRegex, "Số điện thoại chỉ có số!"),
  status: z.enum(["Mới tốt nghiệp", "Đã đi làm"], {
    errorMap: () => ({
      message: "Vui lòng không bỏ trống thông tin",
    }),
  }),
  experience_years: z
    .number()
    .int()
    .min(0, "Vui lòng không bỏ trống thông tin"),
  major: z.string().min(2, "Vui lòng không bỏ trống thông tin"),
  cv_url: z
    .string()
    .url({ message: "Invalid URL format" })
    .refine((url) => url.endsWith(".pdf"), {
      message: "URL must point to a PDF file",
    }),
});

export const registerFormSchema = registerDataSchema
  .omit({ cv_url: true })
  .extend({
    cv_file: z
      .instanceof(File, { message: "Vui lòng không bỏ trống thông tin" })
      .refine((file) => file.type === "application/pdf", {
        message: "Chỉ cho phép tệp PDF",
      })
      .refine((file) => file.size <= MAX_FILE_SIZE * 1024 * 1024, {
        message: `Kích thước tệp không được vượt quá 4MB`,
      }),
  });

export const registerPostSchema = registerDataSchema.omit({});
export type RegisterPostData = z.infer<typeof registerPostSchema>;
