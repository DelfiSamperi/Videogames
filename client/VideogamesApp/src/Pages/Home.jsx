import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
//import { getAllVideogames } from "../../../../server/src/controllers/getVideogamesControllers";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  const [videogames, setVideogames] = useState([]);
  
  useEffect(() => {
    try {
      axios.get('http://localhost:3000/videogames')
      .then(response => response.data)
      .then((data) => setVideogames(data));

    } catch (error) {
      console.log(error.request.response)
    } 
    return setVideogames([]);
  }, []);        
  
  const onSearch = (name) =>{
    
    try {
      axios.get(`http://localhost:3000/videogames?name=${name}`)
      .then(response => response.data)
      .then((data)=>setVideogames(data));

    } catch (error) {
      console.log(error.request.response)
    }
    return setVideogames([]);
  };
  
    return (
        <div>
            <NavBar onSearch={onSearch}/>
            <Cards videogames={videogames}/>
            <Footer />
        </div>
    )
};

export default Home;