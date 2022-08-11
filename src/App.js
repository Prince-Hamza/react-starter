import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './screens/Main/Main'
import Stripes from './screens/Stripe/Stripe'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/stripe" element={<Stripes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

