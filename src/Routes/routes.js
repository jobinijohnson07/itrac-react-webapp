import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from "../components/Login/Login.js";
import Home from '../components/Home/Home.js';
import NavLeft from '../components/NavLeft.js';

const RouteComponent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Login />} exact />
        </Routes>
      ) : (
        <div className="flex">
          <div>
            <NavLeft />
          </div>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default RouteComponent;
