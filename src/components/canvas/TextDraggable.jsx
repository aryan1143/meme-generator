import { useEffect, useRef, useState } from "react"
import useDrag from "../../hooks/useDrag";

function TextDraggable({ top, left, fontSize, text, font, className, outline, outlineColor, bold, italic, underline, setSharedVar, selectedText, sharedVar, setSelectedText, setTextMousePosition }) {
  const textRef = useRef(null);
  const textMousePosition = useDrag(textRef);
  const [textStatus, setTextStatus] = useState(false)
  useEffect(() => {
    const element = textRef.current;
    const elementRect = element.getBoundingClientRect();

    setSharedVar(prev => ({ ...prev, [selectedText]: { ...prev[selectedText], textSize: { width: elementRect.width, height: elementRect.height } } }));

  }, [textRef.current, text, fontSize, font]);

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

  useEffect(() => {
    console.log(sharedVar.canvasSize)
  }, [font])
  

  function handleTextClick() {
    setSelectedText(selectedText);
    setTextStatus(true);
  }

  document.body.addEventListener('click', (e)=> {
    if (!textRef.current.contains(e.target)) {
      setTextStatus(false);
    }
  })

  return (
    <p onClick={handleTextClick} ref={textRef} onPointerDown={handlePointerDown} className={`texts absolute whitespace-nowrap cursor-move ${bold ? 'font-extrabold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''} select-none m-1 p-1 ${outline ? 'stroked-text' : ''} ${textStatus ? 'outline-2 outline-dashed outline-[#00777e] outline-offset-1' : ''} ${className}`} style={{'--outline-color': outlineColor, fontFamily: font, top: (selectedText === 'text2' ? (top || (sharedVar.canvasSize.height - sharedVar.textSize.height)) : top), left: left, fontSize: fontSize, color: className || 'white' }}>{text || selectedText.toUpperCase() + ' HERE'}</p>
  )
}

export default TextDraggable