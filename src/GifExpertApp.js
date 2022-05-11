import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  //   const categories = ["Dragon", "Max", "Samurai"];
  const [ categories, setCategories ] = useState(["Dragon", "Max", "Samurai"])

  // const handleAdd = () => {
  //   setCategories([...categories, 'Hunterxhunter']);
  // };

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
