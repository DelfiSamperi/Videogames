import './App.css'
import {Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import Detail from './Pages/Detail.jsx';
import Form from './Pages/Form.jsx';
import NotFound from './Pages/NotFound.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';


export default function App() {
  const { pathname } = useLocation();
  const [nameVideogame, setNameVideogame] = useState([]);
  /*
  const onSearch = (name) =>{
      
    try {
      axios.get(`http://localhost:3000/videogames?name=${name}`)
      .then(response => response.data)
      .then((data)=>setNameVideogame(data));

    } catch (error) {
      console.log(error.request.response)
    }
    return setNameVideogame([]);
  }; */ 
  
  return (
    <div className='appContainer'>
      { /* 
        pathname !== '/'
        ? ( <NavBar onSearch={onSearch} /> && <Footer/> )
        : null */        
        }
            
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  )
};
