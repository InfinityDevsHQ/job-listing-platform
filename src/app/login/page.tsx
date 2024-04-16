import AppsAuth from "@/_components/apps-auth";
import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import LoginInputs from "./_components/login-inputs";

export default function Login() {
  return (
    <main className="min-h-screen bg-primary flex flex-col items-center justify-center">
      <div>{/* Logo Here */}</div>
      <form className="flex flex-col gap-8">
        <PageHeader title="Login to your Account" />
        <VectorText text="Select Method to Login" />
        <AppsAuth />
        <VectorText text="or Continue with Email" />
        <LoginInputs />
      </form>
    </main>
  );
}
