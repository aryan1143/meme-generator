import { useRef, useState } from "react";
import CanvasMain from "../components/canvas/CanvasMain"
import HeroSection from "../components/ui/HeroSection"

function HomePage({imageSrc, setImageSrc}) {
    const canvasRef = useRef(null);
  return (
    <div className='flex flex-col justify-center w-full h-full items-center mt-5 gap-1 py-5'>
      <HeroSection imageSrc={imageSrc} setImageSrc={setImageSrc} canvasRef={canvasRef}/>
      <CanvasMain imageSrc={imageSrc} setImageSrc={setImageSrc} canvasRef={canvasRef} />
    </div>
  )
}

export default HomePage