import { Routes, Route } from 'react-router';
import { HomePages } from './pages/HomePage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="checkout/" element={<div>Test Checkout Page</div>} />
    </Routes>
  )
}

export default App

// 5:38:45