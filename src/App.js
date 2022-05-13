
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import MakeAppoinment from './Pages/MakeAppoinment/MakeAppoinment';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/makeappoinment' element={<MakeAppoinment />} />
      </Routes>
    </div>
  );
}

export default App;
