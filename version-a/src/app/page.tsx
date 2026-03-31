import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CourseGrid from "@/components/CourseGrid/CourseGrid";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CourseGrid />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
