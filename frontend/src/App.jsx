import { useState } from 'react'
import Header from './component/Header'
import Register from './component/Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header></Header> */}
     <Register/>
    </>
  )
}

export default App
