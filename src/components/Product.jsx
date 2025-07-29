import React from 'react';
import ProductCard from './cards/ProductCard';
import { useProductContext } from '../context/ProductContext'; 

export default function Product() {
  const { products } = useProductContext(); 

  return (
    <div className='p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg dark:border-gray-700 transition-colors duration-300'>
      <h1 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
        Recent Added Products
      </h1>
      <div className="w-full h-px bg-gray-300 my-4 dark:bg-gray-600"></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              productTitle={product.productTitle}
              productName={product.productName}
              createdAt={product.createdAt}
              stock={product.stock}
            />
          ))
        ) : (
          <p className='text-gray-500 dark:text-gray-400'>
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}
