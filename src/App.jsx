import './App.css'
import { Landing } from './page/landing/landing'
import { BrowserRouter, Routes, Route } from "react-router"
import { SpotifySupport } from './page/help/help'
import { SpotifyLogin } from './page/login/login'
import { SpotifyPurchase } from './page/pago/pago'

function App() {

  return (
    <>
     {/* <Landing/> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/soporte" element={<SpotifySupport />} />
          <Route path="/accounts" element={<SpotifyLogin />} />
          <Route path="/pago" element={<SpotifyPurchase />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
