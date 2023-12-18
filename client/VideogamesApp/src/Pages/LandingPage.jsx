import React from "react";
import { useNavigate } from "react-router-dom";
import '../stylesheets/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="landingpage">
            <h3>Welcome to Videogames App</h3>
            <img className='imageLanding' src='https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg' alt='landing page image' />
            <button onClick={() => navigate('/home')}>Ingresar</button>
        </div>
    )
};

export default LandingPage;