import { Routes, Route } from 'react-router-dom'
import YitangNavbar from './components/YitangNavbar'
import YitangFooter from './components/YitangFooter'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <YitangNavbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <YitangFooter />
    </div>
  )
}

export default App
