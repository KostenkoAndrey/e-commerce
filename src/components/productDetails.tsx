'use client';
import React from 'react';

import ProductImages from '@/components/productImages';
import ProductPurchasePanel from '@/components/productPurchasePanel';
import ProductSpecifications from '@/components/productSpecifications';
import Reviews from '@/components/reviews';
import { products } from '@/components/api';

const ProductDetails = () => {
  const { article, inStock, rating, reviewsCount, price, oldPrice, images, reviews, productDescription } = products;
  return (
    <div className='md:grid grid-cols-12 md:gap-x-2 xl:gap-x-5 gap-y-[60px] mx-auto lg:pb-[15px]'>
      <ProductImages images={images} />
      <ProductPurchasePanel
        article={article}
        inStock={inStock}
        rating={rating}
        reviewsCount={reviewsCount}
        price={price}
        oldPrice={oldPrice}
      />
      <ProductSpecifications productDescription={productDescription} />
      <Reviews reviewsCount={reviewsCount} reviews={reviews} />
    </div>
  );
};

export default ProductDetails;
