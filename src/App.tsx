import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <div className="under-construction-badge">Under Construction</div>
        <Hero />
      </div>
    </BrowserRouter>
  )
}

export default App
