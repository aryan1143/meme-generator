import { useEffect, useRef, useState } from "react"

function TextDraggable({ top, left, fontSize, text, className, outline, setSharedVar, textRef }) {
  useEffect(() => {
    const element = textRef.current;
    const elementRect = element.getBoundingClientRect();
    setSharedVar(prev => ({ ...prev, textSize: { width: elementRect.width, height: elementRect.height } }));
  }, [textRef.current, text, fontSize]);
  return (
      <p ref={textRef} className={`absolute whitespace-nowrap top-0 left-0 cursor-move font-bold select-none ${outline ? 'stroked-text' : ''} ${className}`} style={{ top: top, left: left, fontSize: fontSize, color: className || 'white' }}>{text || 'Dragable Text here'}</p>
  )
}

export default TextDraggable