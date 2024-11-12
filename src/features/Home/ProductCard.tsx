import { ReactElement, useState } from "react";
import { IProduct } from "../../interface/Products";

interface IProductCardsPropos {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardsPropos> = ({
  product,
}: IProductCardsPropos): ReactElement => {
  const [loadingStatus, setLoadingStatus] = useState({
    productImage: "loading",
    productBrandLoading: "loading",
  });

  const getProgress = (progress: number): string => {
    return `${(progress * 100).toFixed(0)}% complete`;
  };

  const updateLoadingStatus = (field: string): void => {
    setLoadingStatus({
      ...loadingStatus,
      [field]: "loaded",
    });
  };

  return (
    <>
      <div className="hs-carousel-slide ml-2">
        <div className="bg-white border shadow-sm rounded-xl max-h-64">
          {loadingStatus.productImage == "loading" && (
            <div className="flex animate-pulse">
              <p className="h-4 bg-gray-200 w-full dark:bg-neutral-700 min-h-64"></p>
            </div>
          )}
          <img
            className="rounded-t-xl"
            src={product.product_image}
            alt={"Product Image"}
            width={"250"}
            height={"200"}
            style={
              loadingStatus.productImage == "loading" ? { display: "none" } : {}
            }
            onLoad={() => updateLoadingStatus("productImage")}
          />
          <img
            className="h-10"
            src={product.brand_image}
            alt={"Brand Image"}
            onLoad={() => updateLoadingStatus("productBrandLoading")}
          />
          <div
            className="p-4 md:p-3"
            style={
              loadingStatus.productImage == "loading" ? { display: "none" } : {}
            }
          >
            <h3
              className="text-lg text-gray-800 truncate"
              title={product.product_name}
              aria-label={product.product_name}
            >
              {product.product_name}
            </h3>
            <div className="mt-2">
              <div
                className="flex w-full h-2 bg-gray-200 overflow-hidden dark:bg-neutral-700"
                aria-valuenow={product.progress * 100}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              >
                <div
                  className={`flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500`}
                  style={{ width: `${product.progress * 100}%` }}
                />
              </div>
              <div className="pt-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  {getProgress(product.progress)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
