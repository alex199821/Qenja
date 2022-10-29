import { ProductsList } from "../utils/links";
import { landingCoverDataShop } from "../utils/links";
import Wrapper from "../assets/wrappers/Shop";
import Product from "../Components/Product";
import QenjaAnimation from "../Components/QenjaAnimation";
import CoverImage from "../Components/CoverImage";
import ShopInfoForMobile from "../Components/ShopInfoForMobile";
import Filters from "../Components/Filters";
import Loading from "../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getShop } from "../features/ui/uiSlice";
const Shop = () => {
  const dispatch = useDispatch();

  const { filteredProductsList, isLoading } = useSelector(
    (store) => store.products
  );

  const { shop, shopIsLoading } = useSelector((store) => store.ui);
  useEffect(() => {
    dispatch(getShop());
  }, []);

  if (shopIsLoading || isLoading) {
    return <Loading />;
  }
  const { shopMainCoverImage } = shop[0];
  return (
    <Wrapper>
      <Filters />
      <section className="productsListContainer">
        {filteredProductsList.slice(0, 6).map((product) => {
          const { id } = product;
          return <Product key={id} data={product} />;
        })}
      </section>

      <section className="hideOnMobile">
        <CoverImage image={shopMainCoverImage} />
        <QenjaAnimation className="animationWhite" />
      </section>

      <ShopInfoForMobile />

      <section className="productsListContainer">
        {filteredProductsList.length > 6 &&
          filteredProductsList
            .slice(6, filteredProductsList.length)
            .map((product) => {
              const { id } = product;
              return <Product key={id} data={product} />;
            })}
      </section>
    </Wrapper>
  );
};

export default Shop;
