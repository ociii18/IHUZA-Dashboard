import { useState } from "react"
import {ProductContext} from "../context/ProductContext"

  export const useProduct = () => {
    const context = useProduct(ProductContext);
  
    if (context === undefined) {
      throw new Error("Context is Undefined");
    }
  
    return context;
  };