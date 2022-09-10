import React, { useState } from 'react'
import "./InputShortner.module.css"

function InputShortner({ setInputValue }) {
  const [value, setValue] = useState("")

  const handleClick = () => {
    setInputValue(value)
    setValue("")
  }

  return (

    <div className='inputContainer'>
      <h1>URL <span>Shortner</span></h1>
      <div className='childDiv'>
        <input 
          type="text" 
          placeholder='paste url to short' 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortner
