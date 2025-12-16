import { useEffect, useLayoutEffect, useState } from 'react';
import Button from '../ui/Button'
import { IoCaretDownCircle, IoCaretUpCircle, IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { LuAlignLeft, LuAlignCenter, LuAlignRight } from "react-icons/lu";
import useKeyDownEvent from '../../hooks/useKeyDownEvent';



function CanvasControl({ sharedVars, setSharedVar, setPos, selectedText, setSelectedText }) {
  const sharedVar = sharedVars[selectedText];

  


  const [align, setAlign] = useState();
  const { top, left } = sharedVar;
  // Handlers for single click action
  function handleUpClick() {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, top: top - 5 } }));
  }
  function handleDownClick() {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, top: top + 5 } }));
  }
  function handleLeftClick() {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, left: left - 5 } }));
  }
  function handleRightClick() {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, left: left + 5 } }));
  }

  // For repetetive hold action
  let i = top;
  function handleDownHold() {
    i = i + 2;
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, top: i } }));
  }
  function handleUpHold() {
    i = i - 2;
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, top: i } }));
  }
  let j = left;
  function handleLeftHold() {
    j = j - 2;
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, left: j } }));
  }
  function handleRightHold() {
    j = j + 2;
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, left: j } }));
  }

  //arrow key functions
  useKeyDownEvent('ArrowUp', handleUpClick);
  useKeyDownEvent('ArrowDown', handleDownClick);
  useKeyDownEvent('ArrowLeft', handleLeftClick);
  useKeyDownEvent('ArrowRight', handleRightClick);

  const handleChange = (event) => {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, fontSize: Number(event.target.value) } }));
  }

  //handle text change 
  function handleTextInputChange(event) {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, text: event.target.value } }));
  }

  function handleColorChange(event) {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, textClassName: event.target.value[0] == '#' ? event.target.value : '#' + event.target.value } }));
  }

  function handleOutlineToggle() {
    setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, outline: !sharedVar.outline } }));
  }

  function handleAlignChange(value) {
    const textSize = sharedVar.textSize || { width: 0, height: 0 };
    const canvasSize = sharedVar.canvasSize || { width: 0, height: 0 };
    if (value === 'left') {
      setPos((prev) => {
        return { ...prev, [selectedText]: { x: 0 } };
      })
    } else if (value === 'center') {
      setPos((prev) => {
        return { ...prev, [selectedText]: { x: (canvasSize.width / 2) - (textSize.width / 2) } };
      })
    } else if (value === 'right') {
      setPos((prev) => {
        return { ...prev, [selectedText]: { x: (canvasSize.width - textSize.width) } };
      })
    }
  }

  function handleMemeGenerate() {

  }

  function handleSelectedText(e) {
    setSelectedText(e.target.value);
  }

  // useEffect(() => {
  //   handleAlignChange(align)
  // }, [sharedVar.text]);



  return (
    <div className='flex flex-col max-md:h-fit max-md:gap-3 max-md:w-75/100 p-2 items-center justify-between py-5'>
      <div className='flex flex-col gap-2 w-8/10 max-md:w-9/10'>
        <p>Select Text</p>
        <div className='w-full flex justify-between'>
          <div className='h-fit w-5/10'>
            <input onChange={handleSelectedText} type="radio" className='hidden peer' id='text1' name='text' checked={selectedText === 'text1'} value='text1' />
            <label htmlFor="text1" className='cursor-pointer text-black peer-checked:bg-[#00ADB5] peer-checked:text-white  peer-checked:outline-2 peer-checked:outline-[#00777e] bg-gray-200 py-2 px-5 rounded outline font-bold'>Text 1</label>
          </div>
          <div className='h-fit'>
            <input onChange={handleSelectedText} type="radio" className='hidden peer' id='text2' name='text' checked={selectedText == 'text2'} value='text2' />
            <label htmlFor="text2" className='cursor-pointer text-black peer-checked:outline-2 bg-gray-200 py-2 px-5 rounded outline font-bold peer-checked:bg-[#00ADB5] peer-checked:text-white peer-checked:outline-[#00777e]'>Text 2</label>
          </div>
        </div>
      </div>
      <div className='flex flex-col max-md:w-9/10'>
        <p>Text</p>
        <input type="text" className='rounded outline outline-gray-500 focus:outline-2 px-1 py-1.5 bg-main' placeholder='Enter Text Here' onChange={(e) => { handleTextInputChange(e); handleAlignChange(align) }} />
      </div>
      <div className='flex flex-col h-fit w-8/10 max-md:w-9/10'>
        <p>Text Color</p>
        <div className='flex gap-3 items-center px-1 outline outline-gray-500 focus-within:outline-2 focus-within:outline-black bg-main rounded'>
          <input type="color" className='h-10 w-10 border-0 cursor-pointer' onChange={(e) => { handleColorChange(e) }} value={sharedVar.textClassName} />
          <input type="text" className='rounded outline-0 px-1 h-fit py-1 bg-main w-[58%]' placeholder='Enter Text Color Here' value={sharedVar.textClassName || '#'} onChange={(e) => { handleColorChange(e) }} />
        </div>
      </div>
      <div className='w-8/10 max-md:w-9/10 flex flex-col justify-center items-center gap-2 bg-main p-2 rounded-lg outline-1 outline-gray-400'>
        <input
          className='w-full accent-[#00c9d3]'
          type="range"
          min="12"
          max="100"
          value={sharedVar.fontSize}
          onChange={handleChange}
        />
        <p>Text Size: {sharedVar.fontSize}px</p>
      </div>
      <div className='flex flex-col w-8/10 max-md:w-9/10 h-[5%] my-2 justify-center'>
        <p>Alignment</p>
        <form className='flex justify-between text-2xl' onChange={(e) => { handleAlignChange(e.target.value); setAlign(e.target.value) }}>
          <div className='flex flex-col justify-center items-center w-3/10'>
            <input type="radio" id="left" name="position" value="left" className='peer hidden' />
            <label htmlFor="left" className='bg-gray-200 text-black p-1 w-full flex justify-center rounded peer-checked:bg-[#00ADB5] peer-checked:text-white  peer-checked:outline-2 peer-checked:outline-[#00777e] cursor-pointer'><LuAlignLeft /></label>
          </div>
          <div className='flex flex-col justify-center items-center w-3/10'>
            <input type="radio" id="center" name="position" value="center" className='peer hidden' />
            <label htmlFor="center" className='bg-gray-200 text-black p-1 w-full flex justify-center rounded peer-checked:bg-[#00ADB5] peer-checked:text-white  peer-checked:outline-2 peer-checked:outline-[#00777e] cursor-pointer ' ><LuAlignCenter /></label>
          </div>
          <div className='flex flex-col justify-center items-center w-3/10'>
            <input type="radio" id="right" name="position" value="right" className='peer hidden' />
            <label htmlFor="right" className='bg-gray-200 text-black p-1 w-full flex justify-center rounded peer-checked:bg-[#00ADB5] peer-checked:text-white  peer-checked:outline-2 peer-checked:outline-[#00777e] cursor-pointer'><LuAlignRight /></label>
          </div>
        </form>
      </div>
      <div className='flex gap-2'>
        <Button
          btnText={<IoCaretBackCircle className='text-xl' />}
          isRoundedProp={true}
          colorProp={'bg-gray-400'}
          sizeProp={'small'}
          onClick={handleLeftClick}
          repetetiveHoldAction={handleLeftHold}
        />
        <div className='flex flex-col gap-1'>
          <Button
            btnText={<IoCaretUpCircle className='text-xl' />}
            isRoundedProp={true}
            colorProp={'bg-gray-400'}
            sizeProp={'small'}
            onClick={handleUpClick}
            repetetiveHoldAction={handleUpHold}
            className="px-4 py-1"
          />
          <Button
            btnText={<IoCaretDownCircle className='text-xl' />}
            isRoundedProp={true}
            colorProp={'bg-gray-400'}
            sizeProp={'small'}
            onClick={handleDownClick}
            repetetiveHoldAction={handleDownHold}
            className={"px-4 py-1"}
          />
        </div>
        <Button
          btnText={<IoCaretForwardCircle className='text-xl' />}
          isRoundedProp={true}
          colorProp={'bg-gray-400'}
          sizeProp={'small'}
          onClick={handleRightClick}
          repetetiveHoldAction={handleRightHold}
        />
      </div>
      <Button
        btnText={"Outline:" + (sharedVar.outline ? " On" : " Off")}
        isRoundedProp={true}
        colorProp={sharedVar.outline ? 'bg-gray-500' : 'bg-gray-400'}
        sizeProp={'small'}
        isBoldProp={true}
        onClick={handleOutlineToggle}
      />
      <Button
        btnText={"Generate Meme"}
        isRoundedProp={true}
        colorProp={'bg-card'}
        sizeProp={'large'}
        isBoldProp={true}
        onClick={handleMemeGenerate}
        className={"w-full py-2"}
      />

    </div>
  )
}

export default CanvasControl
