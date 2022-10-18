import React, { useContext } from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Home from '../pages/home/Home';
// import Navbar from '../components/Navbar';
// import { AuthContext } from '../context/AuthContext';
// import Login from '../pages/Login';
// import Main from '../pages/Main';
// import MovieDetail from '../pages/MovieDetail';
// import Register from '../pages/Register';

const AppRouter = () => {
  // const { currentUser } = useContext(AuthContext);
  // function PrivateRouter() {
  //   return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  // }
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;