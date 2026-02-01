import React, { useEffect, useRef, useState } from 'react'
import MemeCanvas from './MemeCanvas'
import CanvasControl from './CanvasControl';
import MemeImageControl from './MemeImageControl';

function CanvasMain({canvasRef, imageSrc, setImageSrc}) {

  const mainDivRef = useRef();
  const textControlPopUpRef = useRef(null);
  const [textSettingShow, setTextSettingShow] = useState({
    text1: false,
    text2: false
  })
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
        font: 'Arial',
        textClassName: '#ffffff',
        outline: false,
        outlineColor: 'black',
        bold: false,
        italic: false,
        underline: false,
        textSize: { width: 0, height: 0 },
        canvasSize: { width: 0, height: 0 },
      },
      text2: {
        top: 0,
        left: 0,
        fontSize: 24,
        text: '',
        font: 'Arial',
        textClassName: '#ffffff',
        outline: false,
        outlineColor: 'black',
        bold: false,
        italic: false,
        underline: false,
        textSize: { width: 0, height: 0 },
        canvasSize: { width: 0, height: 0 },
      }
    });

  function handleCanvasClickForTextControlPopUp(e) {
    if ((!textControlPopUpRef.current.contains(e.target)) && (e.target.closest('.textControl') ? false : true)) {
      setTextSettingShow({
        text1: false,
        text2: false
      })
    }
  }


  const [selectedText, setSelectedText] = useState('text1');

  return (
    <div onClick={handleCanvasClickForTextControlPopUp} className='w-fit h-fit flex gap-6 max-md:gap-0 bg-sub-main md:rounded-2xl p-3 max-md:flex-col max-md:w-screen max-md:items-center' ref={mainDivRef}>
      <MemeCanvas canvasRef={canvasRef} setSharedVar={setSharedVar} sharedVars={sharedVar} height={mainDivRef.current?.height} width={mainDivRef.current?.width} imageSrc={imageSrc} pos={pos} setPos={setPos} selectedText={selectedText} setSelectedText={setSelectedText} />
      <div className='flex h-fit w-full '>
        <CanvasControl canvasRef={canvasRef} textSettingShow={textSettingShow} textControlPopUpRef={textControlPopUpRef} setTextSettingShow={setTextSettingShow} sharedVars={sharedVar} setSharedVar={setSharedVar} setPos={setPos} selectedText={selectedText} setSelectedText={setSelectedText} />
        <MemeImageControl setImageSrc={setImageSrc} />
      </div>
    </div>
  )
}
export default CanvasMain