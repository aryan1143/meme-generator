import React, { useEffect, useRef, useState } from 'react'
import MemeCanvas from './MemeCanvas'
import CanvasControl from './CanvasControl';
import MemeImageControl from './MemeImageControl';

function CanvasMain() {
  const [imageSrc, setImageSrc] = useState(null);
  const mainDivRef = useRef();
  const [pos, setPos] = useState({
    text1: { x: 0, y: 0 },
    text2: { x: 0, y: 0 }
  }
  );
  const [sharedVar, setSharedVar] = useState(
    {
      text1: {
        top: 0,
        left: 0,
        fontSize: 24,
        text: '',
        textClassname: '#',
        outline: true,
        textSize: { width: 0, height: 0 },
        canvasSize: { width: 0, height: 0 },
      },
      text2: {
        top: 0,
        left: 0,
        fontSize: 24,
        text: '',
        textClassname: '#',
        outline: true,
        textSize: { width: 0, height: 0 },
        canvasSize: { width: 0, height: 0 },
      }
    });

  const [selectedText, setSelectedText] = useState('text1');

  return (
    <div className='flex flex-col w-full h-full bg-sub-main rounded-2xl p-3'>
      <div className='w-fit h-fit flex gap-6' ref={mainDivRef}>
        <MemeCanvas setSharedVar={setSharedVar} sharedVars={sharedVar} height={mainDivRef.current?.height} width={mainDivRef.current?.width} imageSrc={imageSrc} pos={pos} setPos={setPos} selectedText={selectedText} setSelectedText={setSelectedText} />
        <CanvasControl sharedVars={sharedVar} setSharedVar={setSharedVar} setPos={setPos} selectedText={selectedText} setSelectedText={setSelectedText} />
        <MemeImageControl setImageSrc={setImageSrc} />
      </div>
    </div>
  )
}

export default CanvasMain