
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!title || !description) {
      setError("Both fields are required.");
      return;
    }

    const newRecipe = { title, description };

    try {
      const response = await fetch("http://localhost:5001/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }

      setSuccess(true);
      setTitle("");
      setDescription("");

      // Redirect to Recipes page after success
      setTimeout(() => navigate("/recipes"), 1000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Add a Recipe</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Recipe added successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit Recipe</Button>
      </Form>
    </Container>
  );
};

export default AddRecipe;
