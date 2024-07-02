import RegisterForm from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <div className="mx-auto container max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Đăng ký tham gia ngay</h1>
        <p className="text-muted-foreground">
          Vui lòng nhập đúng thông tin để ban tổ chức liên hệ hướng dẫn tham gia
          sự kiện & nhà tuyển dụng đánh giá được kinh nghiệm của bạn.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
