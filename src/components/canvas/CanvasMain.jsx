import React, { useEffect, useRef, useState } from 'react'
import MemeCanvas from './MemeCanvas'
import CanvasControl from './CanvasControl';
import MemeImageControl from './MemeImageControl';

function CanvasMain() {
  const [imageSrc, setImageSrc] = useState(null);
  const mainDivRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [sharedVar, setSharedVar] = useState(
    {
      top: 0,
      left: 0,
      fontSize: 24,
      text: '',
      textClassname: '#',
      outline: true,
      textSize: { width: 0, height: 0 },
      canvasSize: { width: 0, height: 0 },
    });

  return (
    <div className='flex flex-col w-full h-full bg-white rounded-2xl gap-5 p-3'>
      <div className='w-fit h-fit flex gap-6' ref={mainDivRef}>
        <MemeCanvas setSharedVar={setSharedVar} sharedVar={sharedVar} height={mainDivRef.current?.height} width={mainDivRef.current?.width} top={sharedVar.top} left={sharedVar.left} fontSize={sharedVar.fontSize} imageSrc={imageSrc} text={sharedVar.text} textClassName={sharedVar.textClassName} outline={sharedVar.outline} pos={pos} setPos={setPos} />
        <CanvasControl sharedVar={sharedVar} setSharedVar={setSharedVar} setPos={setPos}/>
        <MemeImageControl setImageSrc={setImageSrc} />
      </div>
    </div>
  )
}

export default CanvasMain