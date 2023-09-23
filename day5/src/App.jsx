import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <>

    {isVisible && <Counter /> }
    
    <hr/>
    <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button>

    </>
  )
}

export default App
