import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ItemProduct from "../../../components/ItemProduct";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("ItemProduct", () => {
  const mockProduct = {
    id: "123",
    title: "Producto de prueba",
    price: { currency: "ARS", amount: 1000, decimals: 2 },
    picture: "https://via.placeholder.com/150",
    condition: "new",
    free_shipping: true,
  };

  it("debería renderizar correctamente los datos del producto", () => {
    render(
      <BrowserRouter>
        <ItemProduct {...mockProduct} />
      </BrowserRouter>
    );

    expect(
      screen.getByAltText(`Imagen de ${mockProduct.title}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
  });

  it("debería navegar a la página de detalles del producto al hacer clic", () => {
    render(
      <BrowserRouter>
        <ItemProduct {...mockProduct} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockNavigate).toHaveBeenCalledWith(`/items/${mockProduct.id}`);
  });
});
