import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Loader from './components/Loader/Loader'; // Import the Loader component

// Lazy load your page components
const Home = React.lazy(() => import('./pages/Home Page/Home/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs Page/AboutUs/AboutUs'));
const ProductPage = React.lazy(() => import('./pages/Product Page/ProductPage'));
const InfrastructurePage = React.lazy(() => import('./pages/Infrastructure Page/InfrastructurePage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUs Page/ContactUsPage'));
const NotFound = React.lazy(() => import('./pages/NotFoundPage/NotFound'));

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>}> 
      <Route 
        path='' 
        element={
          <Suspense fallback={<Loader />}>
            <Home/>
          </Suspense>
        } 
      /> 
      <Route 
        path='about-us' 
        element={
          <Suspense fallback={<Loader />}>
            <AboutUs/>
          </Suspense>
        } 
      /> 
      <Route 
        path='products' 
        element={
          <Suspense fallback={<Loader />}>
            <ProductPage/>
          </Suspense>
        } 
      /> 
      <Route 
        path='infrastructure' 
        element={
          <Suspense fallback={<Loader />}>
            <InfrastructurePage/>
          </Suspense>
        } 
      />
      <Route 
        path='contact-us' 
        element={
          <Suspense fallback={<Loader />}>
            <ContactUsPage/>
          </Suspense>
        } 
      />
      <Route 
        path='*'  
        element={
          <Suspense fallback={<Loader />}>
            <NotFound/>
          </Suspense>
        } 
      />
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
