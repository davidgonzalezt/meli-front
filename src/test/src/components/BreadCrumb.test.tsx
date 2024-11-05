import { render, screen } from "@testing-library/react";
import BreadCrumb from "../../../components/BreadCrumb";
import "@testing-library/jest-dom";

describe("BreadCrumb", () => {
  it("debería renderizar correctamente las categorías", () => {
    const categories = ["Inicio", "Categoría1", "Categoría2"];
    render(<BreadCrumb categories={categories} />);

    categories.forEach((category, index) => {
      if (index < categories.length - 1) {
        expect(screen.getByText(`${category} >`)).toBeInTheDocument();
      } else {
        expect(screen.getByText(category)).toBeInTheDocument();
      }
    });
  });

  it("debería manejar una lista vacía de categorías", () => {
    render(<BreadCrumb categories={[]} />);
    expect(screen.queryByRole("span")).not.toBeInTheDocument();
  });
});
