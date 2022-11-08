import Wrapper from "../assets/wrappers/SingleProduct";
import Slider from "../Components/Slider";
import QenjaAnimation from "../Components/QenjaAnimation";
import ProductOptions from "../Components/ProductOptions";
import Product from "../Components/Product";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SingleProduct = () => {
  let { id } = useParams();

  // When new product is opened move to start of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const { productsList } = useSelector((store) => store.products);

  // Get chosen product from Products List
  let product = productsList.filter((product) => product.id === id)[0];

  return (
    <Wrapper>
      <section className="singleProductContainer">
        <Slider product={product} />
        <ProductOptions product={product} />
      </section>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      <section className="relatedProductsContainer">
        <h4>RELATED PRODUCTS</h4>
        <div className="relatedProductsList">
          {productsList.slice(0, 3).map((product) => {
            const { id } = product;
            return (
              <Product key={id} data={product} className={"imageSquared"} />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default SingleProduct;
