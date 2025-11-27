import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/ui/NavBar'

function App() {

  return (
    <div className="bg-gray-300 min-h-screen">
      <NavBar />
      <div className='main-padding'>
        <HomePage />
      </div>
    </div>
  )
}

export default App
