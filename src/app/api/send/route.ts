import { Email } from "@/components/email-template";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "my_user",
    pass: "my_password",
  },
});

export async function POST(request: Request) {
  const { to } = await request.json();
  try {
    const options = {
      from: "recruitment@likelion.net",
      to: to,
      subject: "hello world",
      html: render(Email()),
    };

    await transporter.sendMail(options);

    return Response.json("Send email successfully!");
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
