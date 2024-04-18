import About from "../components/Home/About";
import BlogSection from "../components/Home/BlogSection";
import ContactSection from "../components/Home/ContactSection";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
