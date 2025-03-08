import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
       <div className="hero-overlay">
          <h1>Welcome to FOOD HUT - A Recipe Sharing Platform</h1>
          <p>Discover, share, and create delicious dishes with food lovers from around the world! Whether you're a seasoned chef or a home cook just starting out,FOOD HUT is the perfect place to find new recipes, share your favorites, and connect with others who share your passion for food.</p>
        </div>

      <button className="recipes-btn" onClick={() => navigate("/recipes")}>
        View Recipes
      </button>
    </div>
  );
};

export default Home;