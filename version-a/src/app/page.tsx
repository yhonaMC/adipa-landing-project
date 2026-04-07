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
      <Header onSearch={setSearchValue} />
      <main>
        <Hero onSearch={setSearchValue} />
        <CourseGrid searchValue={searchValue} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
