import { useEffect, useRef, useState } from "react"
import useDrag from "../../hooks/useDrag";

function TextDraggable({ top, left, fontSize, text, className, outline, setSharedVar, selectedText, sharedVar, setSelectedText, setTextMousePosition }) {
  const textRef = useRef(null);
  const textMousePosition = useDrag(textRef);
  const [textStatus, setTextStatus] = useState(true)
  useEffect(() => {
    const element = textRef.current;
    const elementRect = element.getBoundingClientRect();

    setSharedVar(prev => ({ ...prev, [selectedText]: { ...prev[selectedText], textSize: { width: elementRect.width, height: elementRect.height } } }));

  }, [textRef.current, text, fontSize]);

  // useEffect(() => {
  //   setTextMousePosition(prev => ({
  //     ...prev, [selectedText]: {
  //       x: textMousePosition.x < 0 ? 0 : textMousePosition.y,
  //       y: textMousePosition.y < 0 ? 0 : textMousePosition.y
  //     }
  //   }));
  //   console.log(textStatus)
  // }, [textMousePosition]);


  function handlePointerDown(e) {
    const element = textRef.current;
    const elementRect = element.getBoundingClientRect();
    const {x, y} = {
      x:(e.clientX - elementRect.left),
      y:(e.clientY - elementRect.top)
    }
    setTextMousePosition(prev => ({
      ...prev, [selectedText]: {
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y
      }
    }));
  }

  function handleTextClick() {
    setSelectedText(selectedText);
  }

  return (
    <p onClick={handleTextClick} ref={textRef} onPointerDown={handlePointerDown} className={`absolute whitespace-nowrap cursor-move font-bold select-none ${outline ? 'stroked-text' : ''} ${className}`} style={{ top: (selectedText === 'text2' ? (top || (sharedVar.canvasSize.height - sharedVar.textSize.height)) : top), left: left, fontSize: fontSize, color: className || 'white' }}>{text || selectedText.toUpperCase() + ' HERE'}</p>
  )
}

export default TextDraggable