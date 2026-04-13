import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HostGame from './pages/HostGame'
import JoinGame from './pages/JoinGame'
import Lobby from './pages/Lobby'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/host" element={<HostGame />} />
      <Route path="/join" element={<JoinGame />} />
      <Route path="/lobby/:gameCode" element={<Lobby />} />
    </Routes>
  )
}

export default App
