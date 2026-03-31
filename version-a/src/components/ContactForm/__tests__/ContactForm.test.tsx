import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
  });

  it("shows error for empty name", () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText("Enviar mensaje"));
    expect(screen.getByText("El nombre debe tener al menos 2 caracteres.")).toBeInTheDocument();
  });

  it("shows error for invalid email", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "invalid" } });
    fireEvent.click(screen.getByText("Enviar mensaje"));
    expect(screen.getByText("Ingresa un email valido.")).toBeInTheDocument();
  });

  it("shows error for short message", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText("Mensaje"), { target: { value: "short" } });
    fireEvent.click(screen.getByText("Enviar mensaje"));
    expect(screen.getByText("El mensaje debe tener al menos 10 caracteres.")).toBeInTheDocument();
  });

  it("shows success state on valid submission", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText("Mensaje"), { target: { value: "Este es un mensaje de prueba valido" } });
    fireEvent.click(screen.getByText("Enviar mensaje"));
    expect(screen.getByText("Mensaje enviado con exito")).toBeInTheDocument();
  });
});
