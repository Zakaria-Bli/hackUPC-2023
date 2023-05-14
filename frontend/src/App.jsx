import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sign from "./pages/Sign"
import InFlightHome from "./pages/InFlightHome"
import InFlightChat from "./pages/InFlightChat"
import OnGroundHome from "./pages/OnGroundHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />}></Route>
        <Route path="/inflight" element={<InFlightHome />}></Route>
        <Route path="/chatPage" element={<InFlightChat />}></Route>
        <Route path="/on-ground" element={<OnGroundHome />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
