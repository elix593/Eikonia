import { About } from "@/components/landing/about";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Portfolio } from "@/components/landing/portfolio";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
