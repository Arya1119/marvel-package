import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home Page/Home/Home';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'; // Importing routing-related pages from react-router-dom
import AboutUs from './pages/AboutUs Page/AboutUs/AboutUs';
import ProductPage from './pages/Product Page/ProductPage';
import InfrastructurePage from './pages/Infrastructure Page/InfrastructurePage';
import ContactUsPage from './pages/ContactUs Page/ContactUsPage';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './pages/NotFoundPage/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  // Creating routes from children pages
  createRoutesFromChildren(
    // Defining routes
    <Route path='/' element={<App/>}> 
      <Route path=''    element={<Home/>} /> 
      <Route path='about-us' element={<AboutUs/>} /> 
      <Route path='products' element={<ProductPage/>} /> 
      <Route path='infrastructure' element={<InfrastructurePage/>} />
      <Route path='contact-us' element={<ContactUsPage/>} />
      <Route path='*'  element={<NotFound/>} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
