import { Routes, Route } from 'react-router';
import { HomePages } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePages />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App