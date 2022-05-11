import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  // const [ images, setImages ] = useState([]);
  const { loading } = useFetchGifs();
  // useEffect(() => {
  //   getGifs( category )
  //     .then( img => setImages( img ) );
  // }, [ category ]);

  return (
    <>
      <h3>{ category }</h3>
      { loading ? 'Cargando...' : 'Data Cargada'}
      {/* <div className='card-grid'>
        <ol>
          {
            images.map( (img) => ( 
              <GifGridItem
                key={ img.id }
                { ...img }
              />
            ))
          }
        </ol>
      </div> */}
    </>
  )
}
