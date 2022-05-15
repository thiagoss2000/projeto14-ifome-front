import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import MainPage from "./MainPage"
import Checkout from "./Checkout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<p>This page does not exist!</p>} />
      </Routes>
    </BrowserRouter>
  )
}
