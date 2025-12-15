import { use, useEffect, useRef, useState } from 'react'
import TextDraggable from './TextDraggable'
import useDrag from '../../hooks/useDrag';

function MemeCanvas({ imageSrc, setSharedVar, sharedVars, pos, setPos, selectedText, setSelectedText }) {
  //using custom hook useDrag
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const textMousePosition = useDrag(textRef);
  const canvasMousePosition = useDrag(canvasRef);
  const sharedVar = sharedVars[selectedText];



  useEffect(() => {
    const element = canvasRef.current;
    const elementRect = element.getBoundingClientRect();
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, canvasSize: { width: elementRect.width, height: elementRect.height } } }));
  }, [selectedText])

  useEffect(() => {
    const calCanvasMousePosition = { x: canvasMousePosition.x - textMousePosition.x, y: canvasMousePosition.y - textMousePosition.y };
    const textSize = sharedVar.textSize;
    const canvasSizeLimit = { width: sharedVar.canvasSize.width - textSize.width, height: sharedVar.canvasSize.height - textSize.height };
    setPos(
      {
        ...pos,
        [selectedText]: {
          x: (calCanvasMousePosition.x + sharedVar.left) > canvasSizeLimit.width ? canvasSizeLimit.width : ((calCanvasMousePosition.x + sharedVar.left) < 0 ? 0 : (calCanvasMousePosition.x + sharedVar.left)),
          y: (calCanvasMousePosition.y + sharedVar.top) > canvasSizeLimit.height ? canvasSizeLimit.height : ((calCanvasMousePosition.y + sharedVar.top) < 0 ? 0 : (calCanvasMousePosition.y + sharedVar.top))
        }
      }
    )
  }, [canvasMousePosition, sharedVar.top, sharedVar.left]);

  // console.log(pos.text2)

  return (
    <div ref={canvasRef} style={{
      backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
    }} className={`relative h-[80vh] w-[80vh] bg-contain   bg-center bg-no-repeat bg-main overflow-hidden rounded-2xl border-2 border-dashed border-gray-400`}>
      <TextDraggable setSharedVar={setSharedVar} top={pos.text1.y} left={pos.text1.x} fontSize={sharedVars.text1.fontSize || 20} text={sharedVars.text1.text} className={sharedVars.text1.textClassName} outline={sharedVars.text1.outline} textRef={textRef} selectedText={'text1'} setSelectedText={setSelectedText} sharedVar={sharedVar} />
      <TextDraggable setSharedVar={setSharedVar} top={pos.text2.y} left={pos.text2.x} fontSize={sharedVars.text2.fontSize || 20} text={sharedVars.text2.text} className={sharedVars.text2.textClassName} outline={sharedVars.text2.outline} textRef={textRef} selectedText={'text2'} setSelectedText={setSelectedText} sharedVar={sharedVar} />
    </div>
  )
}

export default MemeCanvas