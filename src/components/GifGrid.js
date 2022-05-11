import React from 'react'

export const GifGrid = ({ category }) => {

  const getGifs = async() => {

    // const url = `https://api.giphy.com/v1/gifs/search?=${'dragon'}&limit=${10}&api_key=${'TCW03PyjHaaw6LKmcpI1UvjmLEpCKKns'}`
    const url = `https://api.giphy.com/v1/gifs/search?q=dragon&limit=10&api_key=TCW03PyjHaaw6LKmcpI1UvjmLEpCKKns`
    //TCW03PyjHaaw6LKmcpI1UvjmLEpCKKns
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      } 
    })
    console.log(gifs);
  };

  getGifs();

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}
