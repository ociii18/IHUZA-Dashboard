import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productTitle: 'MacBook Pro 162″',
      productName: 'Laptops',
      createdAt: '2023-01-01',
      stock: 'In Stock',
    },
    {
      id: 2,
      productTitle: 'Dell XPS 13',
      productName: 'Laptops',
      createdAt: '2023-02-01',
      stock: 'In Stock',
    },
    {
      id: 3,
      productTitle: 'iPhone 15 Pro',
      productName: 'Mobile',
      createdAt: '2023-03-01',
      stock: 'Low Stock',
    },
    {
      id: 4,
      productTitle: 'iPad Air',
      productName: 'Tablets',
      createdAt: '2023-04-01',
      stock: 'In Stock',
    },
    {
      id: 5,
      productTitle: 'Surface Pro 9',
      productName: 'Tablets',
      createdAt: '2023-05-01',
      stock: 'Out of Stock',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};


export const useProductContext = () => useContext(ProductContext);
