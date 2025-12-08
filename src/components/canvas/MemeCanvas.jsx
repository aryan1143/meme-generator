import { use, useEffect, useRef, useState } from 'react'
import TextDraggable from './TextDraggable'
import useDrag from '../../hooks/useDrag';

function MemeCanvas({ top, left, fontSize, imageSrc, text, textClassName, outline, setSharedVar, sharedVar, pos, setPos}) {
  //using custom hook useDrag
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const textMousePosition = useDrag(textRef);
  const canvasMousePosition = useDrag(canvasRef);

  useEffect(() => {
    const element = canvasRef.current;
    const elementRect = element.getBoundingClientRect();
    setSharedVar(prev => ({ ...prev, canvasSize: { width: elementRect.width, height: elementRect.height } }));
  }, [])



  useEffect(() => {
    const calCanvasMousePosition = { x: canvasMousePosition.x - textMousePosition.x, y: canvasMousePosition.y - textMousePosition.y };
    const textSize = sharedVar.textSize;
    const canvasSizeLimit = { width: sharedVar.canvasSize.width - textSize.width, height: sharedVar.canvasSize.height - textSize.height };
    setPos(
      {
        x: (calCanvasMousePosition.x + left) > canvasSizeLimit.width ? canvasSizeLimit.width : ((calCanvasMousePosition.x + left) < 0 ? 0 : (calCanvasMousePosition.x + left)),
        y: (calCanvasMousePosition.y + top) > canvasSizeLimit.height ? canvasSizeLimit.height : ((calCanvasMousePosition.y + top) < 0 ? 0 : (calCanvasMousePosition.y + top))
      }
    );
  }, [canvasMousePosition, top, left]);

  return (
    <div ref={canvasRef} style={{
      backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
    }} className={`relative h-[80vh] w-[80vh] bg-cover bg-center bg-no-repeat bg-gray-200 overflow-hidden rounded-2xl border-2 border-dashed border-gray-400`}>
      <TextDraggable setSharedVar={setSharedVar} top={pos.y} left={pos.x} fontSize={fontSize || 20} text={text} className={textClassName} outline={outline} textRef={textRef} />
    </div>
  )
}

export default MemeCanvas