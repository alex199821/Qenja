import { ProductsList } from "../utils/links";
import { landingCoverDataShop } from "../utils/links";
import Wrapper from "../assets/wrappers/Shop";
import Product from "../Components/Product";
import QenjaAnimation from "../Components/QenjaAnimation";
import CoverImage from "../Components/CoverImage";
import ShopInfoForMobile from "../Components/ShopInfoForMobile";
import Filters from "../Components/Filters";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const { filteredProductsList } = useSelector((store) => store.products);

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
        <CoverImage data={landingCoverDataShop} />
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
