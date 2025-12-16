import React, { useState } from 'react'
import fetchMemeImages from '../../services/fetchMemeImages';


const memeTemplates = ({setImageSrc}) => {

  const { isLoading, error, images } = fetchMemeImages();
  const imageUrlData = images && images[0].url;
  

  return (
    <div className="flex flex-col h-[60%] w-full bg-main rounded-md border justify-center items-center overflow-hidden">
      <p className='self-start px-2 font-bold max-md:text-xs'>Templates</p>
      {isLoading && <p>Loading...</p>}
      <div className='grid h-[55vh] max-md:h-[50vh] w-full grid-cols-3 max-md:grid-cols-1 gap-0 overflow-scroll no-scrollbar'>
      {images && images.map((i, key)=> {
        return(
          <img key={key} src={i.url} onClick={()=> setImageSrc(i.url)} className='h-[5vw] max-md:h-[15vw] max-md:gap-2 border-2 cursor-pointer' />
        )
      })}
        
      </div>
    </div>
  )
}

export default memeTemplates