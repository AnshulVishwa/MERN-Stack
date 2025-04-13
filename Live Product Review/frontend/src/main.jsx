import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainProduct from './Components/Main Product/MainProduct.jsx'
import Page404 from './Components/404Page/Page404.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/product/:productName' element={ <MainProduct /> } />
      <Route path='/404Err' element={ <Page404 /> } />
    </Routes>
  </BrowserRouter>,
)
