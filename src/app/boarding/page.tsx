import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Intro from "./_components/intro";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between">
        <Intro />
      </main>
      <Footer />
    </>
  );
}
