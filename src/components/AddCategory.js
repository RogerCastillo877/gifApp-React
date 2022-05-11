import React, { useState } from 'react'

export const AddCategory = () => {
  
  const [inputvalue, setInputvalue] = useState('hola')

  const handleInputChange = e => {
    setInputvalue( e.target.value );
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type='text'
        value={ inputvalue }
        onChange={ handleInputChange }
      />
    </form>
  )
}
