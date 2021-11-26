import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Stall from './components/Stall';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>

    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/stall" element={<Stall />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
