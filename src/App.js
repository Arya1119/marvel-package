import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

function App() {
  return (
   <>
   <Header/>
   <main>
   <Outlet/>
   </main>
   <Footer/>
   </>
  );
}

export default App;
