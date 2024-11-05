import React, { useEffect, useState } from "react";
import "./ResultSearch.scss";
import BreadCrumb from "../components/BreadCrumb";
import ItemProduct from "../components/ItemProduct";
import { useSearchParams } from "react-router-dom";
import getSearchProducts, {
  SearchProducts,
} from "../clients/getSearchProducts";

const ResultSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<SearchProducts | null>(
    null
  );
  const search = searchParams.get("search") ?? "";
  useEffect(() => {
    (async () => {
      const products = await getSearchProducts(search);

      setSearchResults(products);
    })();
  }, [search]);

  if (!searchResults) return null;
  console.log(searchResults);
  return (
    <>
      <BreadCrumb categories={searchResults?.categories} />
      <div className="result-content">
        {searchResults.items.map((item) => (
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
  );
};

export default ResultSearch;
