import { useState } from 'react'

import './App.css'

// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
    <MainPage/>
      {/* <Navbar/> */}
      
    </>
  )
}

export default App
