import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct package
import './index.css';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import Card from './Components/Card.jsx';
import Error404 from './Components/Error404.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={ <App/> } />
      <Route path='home' element={ <Home /> }></Route>
      <Route path='card' element={ <Card /> }></Route>
      <Route path='/:404' element={ <Error404 /> }></Route>
    </Routes>
  </BrowserRouter>
);
