import { useEffect } from 'react';
import './App.css'
import Home from './Components/Home/Home'
import ProductsPage from './Components/Products/ProductsPage'

function App() {
  return (
    <div className="scrollContainer">
      <Home />
      <ProductsPage />
    </div>
  )
}

export default App
