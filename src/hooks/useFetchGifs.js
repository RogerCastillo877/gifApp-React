import { useState } from "react"

export const useFetchGifs = () => {
  const [ state, setstate ] = useState({
    data: [],
    loading: true
  });

  setTimeout( () => {
    setstate({
      data: ['Samurai', 'Dragon' ],
      loading: false
    }, 2000);
  });

  return state;
}