import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';


function App() {
  return (
   <>
  <ScrollToTop />
   <Header/>
   <main>
   <Outlet/>
   <ScrollToTopButton />
   </main>
   <Footer/>
   </>
  );
}

export default App;
