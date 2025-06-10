import React from 'react';
import ProductImages from '@/components/productImages';
import ProductPurchasePanel from '@/components/productPurchasePanel';
import ProductSpecifications from '@/components/productSpecifications';
import Reviews from '@/components/reviews';
import { products } from '@/components/api';

export interface ProductDatailsProps {}

const ProductDatails = ({}: ProductDatailsProps) => {
  const {
    brand,
    type,
    serialNumber,
    images,
    article,
    inStock,
    rating,
    reviewsCount,
    price,
    oldPrice,
    reviews,
  } = products;
  return (
    <div className='grid grid-cols-2 gap-x-5 gap-y-[60px] mx-auto pb-[15px]'>
      <ProductImages images={images} />
      <ProductPurchasePanel
        article={article}
        inStock={inStock}
        rating={rating}
        reviewsCount={reviewsCount}
        price={price}
        oldPrice={oldPrice}
      />
      <ProductSpecifications
        type={type}
        serialNumber={serialNumber}
        brand={brand}
      />
      <Reviews reviewsCount={reviewsCount} reviews={reviews} />
    </div>
  );
};

export default ProductDatails;
