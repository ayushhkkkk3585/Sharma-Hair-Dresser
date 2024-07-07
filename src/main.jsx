import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Form />,
    //   },
    //   {
    //     path: "flightClass",
    //     element: <FlightClass />,
    //   },
    //   {
    //     path: "tickets",
    //     element: <Tickets />,
    //   },
    // ],
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
