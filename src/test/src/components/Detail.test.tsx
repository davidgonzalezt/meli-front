import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductDetails } from "../../../clients/getProductDetails";
import Detail from "../../../components/Detail";

const mockProduct: ProductDetails["item"] = {
  id: "123",
  title: "Producto de prueba",
  price: { currency: "ARS", amount: 1000, decimals: 2 },
  picture: "https://via.placeholder.com/150",
  condition: "new",
  free_shipping: true,
  description: "Descripción del producto.",
  categories: ["Categoría1", "Categoría2"],
  sold_quantity: 10,
};

describe("Detail Component", () => {
  it("debería mostrar los detalles del producto", () => {
    render(<Detail {...mockProduct} />);

    expect(screen.getByText("Producto de prueba")).toBeInTheDocument();
    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
    expect(screen.getByText("Descripción del producto.")).toBeInTheDocument();
  });

  it("debería manejar una imagen de producto", () => {
    render(<Detail {...mockProduct} />);

    const img = screen.getByRole("img", {
      name: /Imagen de Producto de prueba/i,
    });
    expect(img).toHaveAttribute("src", mockProduct.picture);
    expect(img).toHaveAttribute("alt", "Imagen de Producto de prueba");
  });
});
