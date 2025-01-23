import { ReactElement } from "react";
import ProductCarousel from "../features/Home/ProductCarousel";
import products from "../data/data.json";
import { IProduct } from "../interface/Products";

const Home: React.FC = (): ReactElement => {
  const productList: IProduct[] = products;
  const userProducts: IProduct[] = productList.filter(
    (product) => product.lane == "for_you"
  );
  const hotProducts: IProduct[] = productList.filter(
    (product) => product.lane == "hot"
  );
  const featuredProducts: IProduct[] = productList.filter(
    (product) => product.lane == "features"
  );
  const otherProducts: IProduct[] = productList.filter(
    (product) => product.lane == null
  );
  return (
    <>
      <div className="px-8 mt-5">
        <ProductCarousel title="For you" productList={userProducts} />
        <ProductCarousel title="Hot Products" productList={hotProducts} />
        <ProductCarousel title="Featured" productList={featuredProducts} />
        <ProductCarousel title="Other Products" productList={otherProducts} />
      </div>
    </>
  );
};

export default Home;
