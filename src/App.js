
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/login/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/login/RequireAuth';
import MakeAppoinment from './Pages/MakeAppoinment/MakeAppoinment';
import Navbar from './Pages/Shared/Navbar'; import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/makeappoinment' element={
          <RequireAuth>
            <MakeAppoinment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
