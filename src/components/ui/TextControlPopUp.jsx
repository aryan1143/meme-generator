import React from 'react'

const TextControlPopUp = ({show}) => {
  return (
    <div className={`${show ? 'absolute' : 'hidden'} p-2 top-12 left-0 bg-gray-600 w-50 h-50 rounded-2xl`}>
        TextControlPopUp
    </div>
  )
}

export default TextControlPopUp