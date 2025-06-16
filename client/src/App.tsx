
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { HomePage } from './pages/HomePage'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage>{<MainPage />}</HomePage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
