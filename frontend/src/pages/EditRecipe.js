import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ title: "", description: "", ingredients: "" });

    useEffect(() => {
        fetch(`http://localhost:5000/api/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/api/recipes/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe),
        })
            .then((res) => res.json())
            .then(() => navigate("/Recipes"))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={recipe.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    value={recipe.description}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};

export default EditRecipe;
