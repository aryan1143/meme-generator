import { useEffect, useRef, useState } from "react"

function TextDraggable({ top, left, fontSize, text, className, outline, setSharedVar, textRef, selectedText, sharedVar }) {
  useEffect(() => {
    const element = textRef.current;
    const elementRect = element.getBoundingClientRect();

    setSharedVar(prev => ({ ...prev, [selectedText]: { ...prev[selectedText], textSize: { width: elementRect.width, height: elementRect.height } } }));

  }, [textRef.current, text, fontSize]);    

  function handleTextClick () {
    setSelectedText(selectedText);
  }

  return (
    <p onClick={handleTextClick} ref={textRef} className={`absolute whitespace-nowrap cursor-move font-bold select-none ${outline ? 'stroked-text' : ''} ${className}`} style={{ top: (selectedText === 'text2' ? (top || (sharedVar.canvasSize.height - sharedVar.textSize.height)) : top), left: left, fontSize: fontSize, color: className || 'white' }}>{text || selectedText.toUpperCase() + ' HERE'}</p>
  )
}

export default TextDraggable