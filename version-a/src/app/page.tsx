"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CourseGrid from "@/components/CourseGrid/CourseGrid";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={setSearchValue} searchValue={searchValue} />
        <CourseGrid searchValue={searchValue} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
