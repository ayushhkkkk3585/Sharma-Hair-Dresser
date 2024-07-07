import { useState } from 'react'

import './App.css'

// import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
    <MainPage/>
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Contact/> */}
    </>
  )
}

export default App
