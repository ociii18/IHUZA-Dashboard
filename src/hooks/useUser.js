import { useState } from "react"
import {UserContext} from "../context/UserContext"

  export const useContext = () => {
    const context = useContext(UserContext);
  
    if (context === undefined) {
      throw new Error("Context is Undefined");
    }
  
    return context;
  };