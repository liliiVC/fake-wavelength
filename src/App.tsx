import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HostGame from './pages/HostGame'
import JoinGame from './pages/JoinGame'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/host" element={<HostGame />} />
      <Route path="/join" element={<JoinGame />} />
    </Routes>
  )
}

export default App
