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
    <div className="flex flex-col h-[60%] w-full bg-main rounded-md border justify-center items-center overflow-hidden">
      <p className='self-start px-2 font-bold'>Templates</p>
      {isLoading && <p>Loading...</p>}
      <div className='grid h-[55vh] w-full grid-cols-3 gap-0 overflow-scroll no-scrollbar'>
      {images && images.map((i, key)=> {
        return(
          <img key={key} src={i.url} onClick={()=> setImageSrc(i.url)} className='h-[5vw] border-2 cursor-pointer' />
        )
      })}
        
      </div>
    </div>
  )
}

export default memeTemplates