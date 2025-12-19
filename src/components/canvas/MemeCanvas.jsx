import { use, useEffect, useRef, useState } from 'react'
import TextDraggable from './TextDraggable'
import useDrag from '../../hooks/useDrag';
import AICaption from '../../services/AICaption';

function MemeCanvas({ imageSrc, setSharedVar, sharedVars, pos, setPos, selectedText, setSelectedText }) {
  //using custom hook useDrag
  const canvasRef = useRef(null);
  const [textMousePosition, setTextMousePosition] = useState({
    text1:{x: 0, y: 0},
    text2:{x: 0, y: 0}
  })
  const canvasMousePosition = useDrag(canvasRef);
  const sharedVar = sharedVars[selectedText];

  useEffect(() => {
    const element = canvasRef.current;
    const elementRect = element.getBoundingClientRect();
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, canvasSize: { width: elementRect.width, height: elementRect.height } } }));
  }, [selectedText])



  useEffect(() => {
    const calCanvasMousePosition = { x: canvasMousePosition.x - textMousePosition[selectedText].x, y: canvasMousePosition.y - textMousePosition[selectedText].y };
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
    console.log('canvasp.y: ', canvasMousePosition.y, 'textp: ', textMousePosition[selectedText].y)
  }, [canvasMousePosition, sharedVar.top, sharedVar.left]);

  // console.log(sharedVar.top)

  return (
    <div ref={canvasRef} className={`touch-none flex relative h-[80vh] w-[80vh] shrink-0 bg-main overflow-hidden rounded-md border-2 border-gray-400 max-md:w-[95vw] max-md:h-[95vw]`}>
      <img src={imageSrc && imageSrc} alt="" className='h-fit max-h-full w-fit self-center place-self-center'/>
      <TextDraggable setSharedVar={setSharedVar} top={pos.text1.y} left={pos.text1.x} fontSize={sharedVars.text1.fontSize || 20} text={sharedVars.text1.text} className={sharedVars.text1.textClassName} outline={sharedVars.text1.outline} bold={sharedVars.text1.bold} italic={sharedVars.text1.italic} isSelected={selectedText === 'text1'} selectedText={'text1'} setSelectedText={setSelectedText} sharedVar={sharedVar} setTextMousePosition={setTextMousePosition}/>
      <TextDraggable setSharedVar={setSharedVar} top={pos.text2.y} left={pos.text2.x} fontSize={sharedVars.text2.fontSize || 20} text={sharedVars.text2.text} className={sharedVars.text2.textClassName} outline={sharedVars.text2.outline} bold={sharedVars.text2.bold} italic={sharedVars.text2.italic} isSelected={selectedText === 'text2'} selectedText={'text2'} setSelectedText={setSelectedText} sharedVar={sharedVar} setTextMousePosition={setTextMousePosition}/>
    </div>
  )
}

export default MemeCanvas