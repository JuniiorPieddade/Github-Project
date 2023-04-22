import './App.css'
import Home from './pages/home/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserView from './pages/userview/userview'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userview/:user' element={<UserView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
