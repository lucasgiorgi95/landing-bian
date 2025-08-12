import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f3d4]">
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
