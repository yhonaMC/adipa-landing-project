import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../CategoryFilter";
import type { Category } from "@/types";

const mockCategories: Category[] = [
  { id: "psicologia-clinica", name: "Psicologia Clinica" },
  { id: "neurociencias", name: "Neurociencias" },
];

describe("CategoryFilter", () => {
  it("renders Todos button", () => {
    render(
      <CategoryFilter categories={mockCategories} activeCategory={null} onCategoryChange={() => {}} />
    );
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });

  it("renders all category buttons", () => {
    render(
      <CategoryFilter categories={mockCategories} activeCategory={null} onCategoryChange={() => {}} />
    );
    expect(screen.getByText("Psicologia Clinica")).toBeInTheDocument();
    expect(screen.getByText("Neurociencias")).toBeInTheDocument();
  });

  it("calls onCategoryChange when a category is clicked", () => {
    const onCategoryChange = jest.fn();
    render(
      <CategoryFilter categories={mockCategories} activeCategory={null} onCategoryChange={onCategoryChange} />
    );
    fireEvent.click(screen.getByText("Psicologia Clinica"));
    expect(onCategoryChange).toHaveBeenCalledWith("psicologia-clinica");
  });

  it("marks active category with aria-selected", () => {
    render(
      <CategoryFilter categories={mockCategories} activeCategory="neurociencias" onCategoryChange={() => {}} />
    );
    expect(screen.getByText("Neurociencias")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Todos")).toHaveAttribute("aria-selected", "false");
  });
});
