import React, { useState } from 'react'

function Button({ btnText, onClick, isRoundedProp, isDisabledProp, sizeProp, colorProp, isBoldProp }) {
  const [isRounded, setIsRounded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('blue');

  React.useEffect(() => {
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
      setColor(`${colorProp} text-white`);
    }
  }, [isRoundedProp, isDisabledProp, sizeProp, colorProp]);

  return (
    <button onClick={onClick} disabled={isDisabled} className={`${isRounded ? 'rounded-md' : ''} ${size} ${color} ${isBold ? 'font-bold' : ''} cursor-pointer`}>{btnText}</button>
  )
}

export default Button;