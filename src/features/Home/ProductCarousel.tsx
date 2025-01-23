import { ReactElement, memo } from "react";
import { IProduct } from "../../interface/Products";
import ProductCard from "./ProductCard";

interface ICarouselProps {
  title?: string;
  productList: IProduct[];
}

const ProductCarousel: React.FC<ICarouselProps> = ({
  title,
  productList,
}: ICarouselProps): ReactElement => {
  return (
    <>
      {title && (
        <p className="font-bold">{`${title} (${productList.length})`}</p>
      )}
      <div
        data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "slidesQty": {
    "xs": 3,
    "lg": 6
  }
}'
        className="relative mb-5"
      >
        <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
          <div className="relative min-h-64 -mx-1">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
              {productList.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default memo(ProductCarousel);
