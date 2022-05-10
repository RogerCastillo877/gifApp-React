import React, { useState } from "react";

export const GifExpertApp = () => {
  
  //   const categories = ["Dragon", "Max", "Samurai"];
  const [ categories, setCategories ] = useState(["Dragon", "Max", "Samurai"])

  const handleAdd = () => {
    setCategories([...categories, 'Hunterxhunter']);
  };

  return (
    <>
      <h2>GifApp</h2>
      <hr />
      
      <button
        onClick={ handleAdd }
      >Agregar
      </button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
