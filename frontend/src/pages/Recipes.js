import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from backend
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Recipes</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Card key={recipe._id} className="m-2 p-3" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No recipes available. Add some!</p>
        )}
      </div>
    </Container>
  );
};

export default Recipes;
