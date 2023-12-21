import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="" element={<Layout />} >
        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Route>
    </Routes>
  )
}

export default App
