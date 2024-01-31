import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import AuDetail from './pages/AuDetail/AuDetail';
import NOT from './pages/NOT/NOT';
import Header from './components/Header/Header';
import BookDetail from './pages/BookDetail/BookDetail';
import Login from './pages/Login/Login';
import Profil from './pages/Profil/Profil';
import Books from './pages/Books/Books';
import { useEffect } from 'react';
import Nazm from './pages/Nazm/Nazm';
import SliderBooks from './pages/SliderBooks/SliderBooks';

function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
useEffect(()=>{
if (window.sessionStorage.getItem('tokin') != 'FYTDRRJDRERSDET') {
  navigate('login')
}
}, [location])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/:type' element={<Home />} />
        <Route path='/author/:id' element={<AuDetail />} />
        <Route path='/bookDetail/:id' element={<BookDetail />} />
        <Route path='/books' element={<Books />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nazm' element={<Nazm />} />
        <Route path='/sliderBooks' element={<SliderBooks />} />
        <Route path='/*' element={<NOT />} />

      </Routes>
    </div>
  );
}

export default App;
