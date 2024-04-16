import AppsAuth from "@/_components/apps-auth";
import PageHeader from "@/_components/page-header";

export default function Login() {
  return (
    <main className="min-h-screen bg-primary-50 flex flex-col items-center justify-center">
      <div>{/* Logo Here */}</div>
      <section className="flex flex-col gap-8">
        <PageHeader title="Login to your Account" />
        <div className="flex items-center gap-4">
          <span className="bg-neutral-50 h-0.5 flex-1" />
          <p className="text-neutral-50 font-normal text-16 leading-4.3">
            Select Method to Login
          </p>
          <span className="bg-neutral-50 h-0.5 flex-1" />
        </div>
        <AppsAuth />
      </section>
    </main>
  );
}
