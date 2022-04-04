import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout"
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Details from './pages/Details';


function App() {
  return (
    <div className="App">    {/*Routes içinde olanlar farklı sayfalar ve tek sayfa..BrowserRouter içinde Routes dışında*/}
      <BrowserRouter>         {/*olanlar ise her sayfada görünmesini istediğimiz navbar veya footer gibi  */}
        <NavBar />
        <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/products/details/:id" element={<Details />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
