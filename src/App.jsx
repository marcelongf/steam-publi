import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Google from './pages/Google'
import Steam from './pages/Steam'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Google />}  />
        <Route path='/steam' element={<Steam />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
