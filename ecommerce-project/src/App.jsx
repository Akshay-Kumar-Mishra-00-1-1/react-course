import { Routes, Route } from 'react-router';
import { HomePages } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage.jsx';
import './App.css'
import { TrackingPage } from './pages/TrackingPage.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<HomePages />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App