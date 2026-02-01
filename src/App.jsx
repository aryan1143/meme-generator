import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/ui/NavBar'
import Footer from './components/ui/Footer'
import { useState } from "react";

function App() {
    const [imageSrc, setImageSrc] = useState(null);
  return (
    <div className="bg-main min-h-screen no-scrollbar">
      <NavBar setImageSrc={setImageSrc}/>
      <div className='main-padding'>
        <HomePage imageSrc={imageSrc} setImageSrc={setImageSrc}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
