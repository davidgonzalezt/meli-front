import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./ResultSearch.scss";
import BreadCrumb from "../components/BreadCrumb";
import ItemProduct from "../components/ItemProduct";
import { useSearchParams } from "react-router-dom";
import getSearchProducts, {
  SearchProducts,
} from "../clients/getSearchProducts";

const ResultSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchProducts | null>(
    null
  );
  const search = searchParams.get("search") ?? "";
  const thereIsNotResult = !searchResults || searchResults.items.length === 0;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getSearchProducts(search);
        setSearchResults(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [search]);

  return (
    <>
      <Helmet>
        <title>{search} | MercadoLibre 📦</title>
        <meta
          name="description"
          content={`Envíos Gratis en el día ✓ Comprá ${search} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
        />
      </Helmet>
      {loading || thereIsNotResult ? (
        <div className="m-auto">
          {loading
            ? "Cargando..."
            : thereIsNotResult && "No se encontraron resultados"}
        </div>
      ) : (
        <>
          <BreadCrumb categories={searchResults?.categories} />
          <div className="result-content">
            {searchResults.items.slice(0, 4).map((item) => (
              <ItemProduct
                key={item.id}
                picture={item.picture}
                price={item.price}
                title={item.title}
                condition={item.condition}
                free_shipping={item.free_shipping}
                id={item.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ResultSearch;
