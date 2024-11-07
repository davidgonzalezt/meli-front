import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductDetails, {
  ProductDetails,
} from "../../clients/getProductDetails";
import Detail from "../../components/Detail";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/BreadCrumb";
const ProductDetail: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetails["item"] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      if (!id) return;
      const { item } = await getProductDetails(id);
      setProduct(item);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!product) fetchProduct()
  }, [id]);

  if (!product) return null;

  return (
    <>
      <Helmet>
        <title>{product.title} - Comprar ahora en Mercado Libre</title>
        <meta
          name="description"
          content={`Compra ${product.title} al mejor precio. ${
            product.condition === "new" ? "Nuevo" : "Usado"
          } y con envío disponible.`}
        />
      </Helmet>
      {loading ? (
        <div className="m-auto">Cargando...</div>
      ) : (
        <>
          <BreadCrumb categories={product.categories} />
          <Detail
            {...product}
            description={
              <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                {product.description}
              </ReactMarkdown>
            }
          />
        </>
      )}
    </>
  );
};

export default memo(ProductDetail);
