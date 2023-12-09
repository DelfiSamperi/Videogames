import './App.css'
import {Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import Detail from './Pages/Detail.jsx';
import Form from './Pages/Form.jsx';
import NotFound from './Pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';

import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import DBvideogames, { oneGame } from '../../../server/src/dataAPI.js';


export default function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <SearchBar onSearch={(videogameID) => window.alert({videogameID})} />
      <Cards videogames={DBvideogames}  />
      <Card
        id={oneGame.id}
        name={oneGame.name}
        image={oneGame.background_image}
      />
    </div>
    /*
    <div>
      {
        pathname !== '/' 
        ? <NavBar /> && <Footer/>
        : null 
      }

      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  */
  )
};
