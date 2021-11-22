import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>

    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
