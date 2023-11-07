import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './App.css'
import Cart from './page/Cart';



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
