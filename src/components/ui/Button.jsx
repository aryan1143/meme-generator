import React, { useEffect, useState } from 'react'
import useOnHold from '../../hooks/useOnHold';

function Button({ btnText, onClick, isRoundedProp, isDisabledProp, sizeProp, colorProp, isBoldProp, repetetiveHoldAction, className }) {
  const [isRounded, setIsRounded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('blue');

  function handleLongPress() {
    repetetiveHoldAction();
  }

  useEffect(() => {
    if (isRoundedProp !== undefined) setIsRounded(isRoundedProp);
    if (isDisabledProp !== undefined) setIsDisabled(isDisabledProp);
    if (isBoldProp !== undefined) setIsBold(isBoldProp);
    switch (sizeProp) {
      case 'small':
        setSize('px-2 py-1 text-sm');
        break;
      case 'large':
        setSize('px-6 py-3 text-lg');
        break;
      default:
        setSize('px-5 py-2 text-md');
    }

    if (colorProp !== undefined) {
      setColor(`${colorProp}`);
    }
  }, [isRoundedProp, isDisabledProp, sizeProp, colorProp, isBoldProp]);

  return (
    <button {...useOnHold(handleLongPress)} onClick={onClick} disabled={isDisabled} className={`${isRounded ? 'rounded-md' : ''} ${size} ${color} ${isBold ? 'font-bold' : ''} cursor-pointer w-fit active:scale-99 ${className}`}>{btnText}</button>
  )
}

export default Button;