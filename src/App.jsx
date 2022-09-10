import { useState } from 'react'
import './App.css'
import BackgroundAnimate from './Components/BackgroundAnimate'
import InputShortner from './Components/InputShortner'
import LinkResult from './Components/LinkResult'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  )
}

export default App
