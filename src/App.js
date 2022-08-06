import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './screens/Main';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/plan" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

