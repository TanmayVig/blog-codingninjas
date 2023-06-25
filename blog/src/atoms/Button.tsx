import React from 'react'

import {ButtonProp} from '../Interface/Interface'


export default function Button({children, color, onClick}: ButtonProp) {
  return (
    <button onClick={(e)=> onClick(e)} className={`rounded-md bg-blue-500 w-fit`}>
      {children}
    </button>
  )
}
