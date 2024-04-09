import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Jobs from "@/_components/jobs-section/jobs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between">
        <Jobs />
      </main>
      <Footer />
    </>
  );
}
