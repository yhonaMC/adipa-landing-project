import { render, screen } from "@testing-library/react";
import CourseCard from "../CourseCard";
import { Modality } from "@/types";
import type { Course } from "@/types";

const mockCourse: Course = {
  id: "test-course",
  title: "Curso de Prueba",
  instructor: "Dr. Test",
  category: "psicologia-clinica",
  startDate: "15 de Abril, 2026",
  originalPrice: 450000,
  discountPrice: 349990,
  modality: Modality.EnVivo,
  image: "https://images.unsplash.com/photo-test?w=600&h=400&fit=crop",
  description: "Descripcion del curso de prueba.",
  rating: 4.9,
  reviewCount: 127,
};

describe("CourseCard", () => {
  it("renders course title", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Curso de Prueba")).toBeInTheDocument();
  });

  it("renders instructor name", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Dr. Test")).toBeInTheDocument();
  });

  it("renders start date", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Inicio: 15 de Abril, 2026")).toBeInTheDocument();
  });

  it("renders modality badge", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("En Vivo")).toBeInTheDocument();
  });

  it("renders Ver curso button", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Ver curso")).toBeInTheDocument();
  });
});
