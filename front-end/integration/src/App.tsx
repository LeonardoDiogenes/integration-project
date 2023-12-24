import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    <Routes>
      <Route path="" element={<Layout />} >
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  )
}

export default App
