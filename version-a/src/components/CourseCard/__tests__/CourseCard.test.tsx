import { render, screen } from "@testing-library/react";
import CourseCard from "../CourseCard";
import { Modality } from "@/types";
import type { Course } from "@/types";

const mockCourse: Course = {
  id: "test-course",
  title: "Terapia Cognitivo Conductual Avanzada",
  type: "Curso",
  instructor: "Dr. Test",
  category: "psicologia-clinica",
  startDate: "15/04/2026",
  originalPrice: 450000,
  discountPrice: 349990,
  modality: Modality.EnVivo,
  image: "https://images.unsplash.com/photo-test?w=600&h=400&fit=crop",
  description: "Descripcion del curso de prueba.",
  rating: 4.9,
  reviewCount: 127,
  status: "En progreso",
  discountEndsIn: { days: 2, hours: 14, minutes: 30, seconds: 0 },
  tooltipText: "Sesiones 100% en vivo, puedes revisar grabaciones en tu aula virtual.",
};

describe("CourseCard", () => {
  it("renders course title with type prefix", () => {
    render(<CourseCard course={mockCourse} />);
    expect(
      screen.getByText("Curso: Terapia Cognitivo Conductual Avanzada")
    ).toBeInTheDocument();
  });

  it("renders start date", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Inicio : 15/04/2026")).toBeInTheDocument();
  });

  it("renders modality badge", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("En Vivo")).toBeInTheDocument();
  });

  it("renders status text", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("En progreso")).toBeInTheDocument();
  });

  it("renders countdown timer", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Descuento termina en")).toBeInTheDocument();
  });

  it("renders Ver detalle + button", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Ver detalle +")).toBeInTheDocument();
  });

  it("renders cart button with aria-label", () => {
    render(<CourseCard course={mockCourse} />);
    expect(
      screen.getByRole("button", { name: "Agregar al carrito" })
    ).toBeInTheDocument();
  });

  it("renders discount price formatted correctly", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("$349.990 CLP")).toBeInTheDocument();
  });

  it("renders original price with strikethrough", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("$450.000 CLP")).toBeInTheDocument();
  });

  it("renders discount percentage badge", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("-22%")).toBeInTheDocument();
  });

  it("renders category tag uppercase", () => {
    render(<CourseCard course={mockCourse} />);
    expect(screen.getByText("Curso")).toBeInTheDocument();
  });

  it("renders tooltip text", () => {
    render(<CourseCard course={mockCourse} />);
    expect(
      screen.getByText(
        "Sesiones 100% en vivo, puedes revisar grabaciones en tu aula virtual."
      )
    ).toBeInTheDocument();
  });
});
