import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Routes from "./Routes/routes.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Login from "./components/Login/Login.js"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, BrowserRouter, Outlet } from "react-router-dom";

import App from './App.js';
// import Dashboard from './components/Dashboard/dashboard.js';
// import Login from './components/Login/Login.js';
// import Analytics from './components/Analytics/Analytics.js';
// import Home from './components/Home/Home.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const pathname = window.location.pathname;

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Login />,
//     //     element: <Home /> ,
//     children: [
//       {
//         path: "/app/home",
//         element: <Home /> ,
//       },
//       {
//         path: "/app/dashboard",
//         element: <Dashboard />
//       },
//       {
//         path: "/app/analytics",
//         element: <Analytics />
//       }
//     ]
//   }
// ]);
root.render(
  // <React.StrictMode>
  // <RouterProvider router={router} />
  <BrowserRouter>
     <App />
  </BrowserRouter>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
