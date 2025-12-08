import React, { useState } from 'react'
import fetchMemeImages from '../../services/fetchMemeImages';


const memeTemplates = ({setImageSrc}) => {

  const { isLoading, error, images } = fetchMemeImages();
  const imageUrlData = images && images[0].url;
  

  // function handleImageClick(src) {
  //   setImageSrc
  // }
  // console.log(imagesData);

  return (
    <div className="flex h-[60%] w-[75%] bg-gray-100 rounded-md border border-gray-300  justify-center items-center overflow-hidden">
      {isLoading && <p>Loading...</p>}
      <div className='grid h-[55vh] w-[18vw] grid-cols-3 gap-0 overflow-scroll no-scrollbar'>
      {images && images.map((i, key)=> {
        return(
          <img key={key} src={i.url} onClick={()=> setImageSrc(i.url)} className='h-full  border-2 cursor-pointer' />
        )
      })}
        
      </div>
    </div>
  )
}

export default memeTemplates