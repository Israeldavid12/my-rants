import { useState } from 'react'
import './App.css'
import Router from './routes/Router'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router />
    </>
  )
}

export default App
