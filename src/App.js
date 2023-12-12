import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Outer from './pages/Outer/Outer';
import Top from './pages/Top/Top';
import Pants from './pages/Pants/Pants';
import Shoes from './pages/Shoes/Shoes';
import Acc from './pages/Acc/Acc';
import New from './pages/New/New';
import BestPage from './pages/BestPage/BestPage';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import AllProducts from './components/Allproducts/AllProducts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Outer' element={<Outer />} />
            <Route path='/Outer/:ProductId' element={<Detail />} />
          <Route path='/Top' element={<Top />} />
          <Route path='/Pants' element={<Pants />} />
          <Route path='/Shoes' element={<Shoes />} />
          <Route path='/Acc' element={<Acc />} />
          <Route path='/New' element={<New />} />
            <Route path='/New/:ProductId' element={<Detail />} />
          <Route path='/Best' element={<BestPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/allProducts' element={<AllProducts />} />
            <Route path='/allProducts/:ProductId' element={<Detail />}/>
        </Routes>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
