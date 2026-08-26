import { LoginForm } from "@/components/Auth/LoginForm";

export const metadata = { title: "Sign in · Anwar Clinic" };

export default function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-50 p-6 dark:bg-slate-950">
      <LoginForm />
    </div>
  );
}
