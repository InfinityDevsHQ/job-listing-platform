import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Jobs from "@/_components/jobs-section/jobs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Jobs />
      <Footer />
    </main>
  );
}
