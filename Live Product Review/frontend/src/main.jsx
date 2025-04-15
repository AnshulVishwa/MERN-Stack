import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainProduct from './Components/Main Product/MainProduct.jsx'
import Page404 from './Components/404Page/Page404.jsx'
import PostReview from './Components/Review Page/PostReview.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/product/:productName' element={ <MainProduct /> } />
      <Route path='/404Err' element={ <Page404 /> } />
      <Route path='/s' element = {<PostReview />}/>
    </Routes>
  </BrowserRouter>,
)
