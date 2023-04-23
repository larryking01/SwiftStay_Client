import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';






const Images = ( ) => {
  const [ photoArray, setPhotoArray ] = useState([ ])

  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([ ])
  const [pageCount, setPageCount] = useState(0) 
  const itemsPerPage = 2;



  useEffect(() => {
      const fetchData = async ( ) => {
          let response = await fetch('https://jsonplaceholder.typicode.com/photos', {
              method: 'GET'
          })
          if ( response.ok ){
              let data = await response.json()
              console.log( data )
              setPhotoArray( data )
          }
      }

      fetchData()
  }, [ ])



  useEffect(() => {
    const lastItemIndex = firstItemIndex + itemsPerPage;
    setCurrentItems(photoArray.slice(firstItemIndex, lastItemIndex));
    setPageCount(Math.ceil(photoArray.length / itemsPerPage));
  }, [ firstItemIndex, itemsPerPage, photoArray ])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photoArray.length;
    setFirstItemIndex(newOffset);
  };



  return (
    <>
      <div className='images'>
          {
            currentItems.map( image => {
              return (
                <div key={ image.title } className='image'>
                    <img src={ image.url } alt='' />
                </div>
              )
            })
          }
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );

}




export default Images