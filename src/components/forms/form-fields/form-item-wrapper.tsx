import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";

interface FormItemWrapperProps {
  label: string;
  children: React.ReactNode;
}

export default function FormItemWrapper({
  label,
  children,
}: FormItemWrapperProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
