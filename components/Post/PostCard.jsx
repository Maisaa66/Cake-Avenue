import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

const PostCard = () => {



  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
    prep_time: "",
    cook_time: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const createRecipe = () => {
    console.log(recipe);
    axios.post("/api/desserts", recipe);
  };

  return (
    <div class="card m-auto mt-3" style={{ width: "40rem" }}>
      <div class="card-body">
        <h5
          class="card-title fs-1 mb-3"
          style={{ fontFamily: "var(--textFont)" }}
        >
          Create Recipe
        </h5>
        <div class="mb-3">
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontFamily: "var(--textFont)" }}
          >
            Recipe Title
          </h6>

          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="title"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontFamily: "var(--textFont)" }}
          >
            Description
          </h6>

          <textarea
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontFamily: "var(--textFont)" }}
          >
            Ingredients
          </h6>

          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Seperate your ingredients with comma (,)"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontFamily: "var(--textFont)" }}
          >
            Instructions
          </h6>

          <textarea
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Seperate your ingredients with comma (,)"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontFamily: "var(--textFont)" }}
          >
            Image
          </h6>

          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter image URL"
            name="image"
            value={recipe.image}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div className="col-3">
            <h6
              class="card-subtitle mb-2 text-body-secondary"
              style={{ fontFamily: "var(--textFont)" }}
            >
              Prepration time
            </h6>

            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="prep_time"
              value={recipe.prep_time}
              onChange={handleChange}
            />
          </div>
          <div className="col-3">
            <h6
              class="card-subtitle mb-2 text-body-secondary"
              style={{ fontFamily: "var(--textFont)" }}
            >
              Cook time
            </h6>

            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="cook_time"
              value={recipe.cook_time}
              onChange={handleChange}
            />
          </div>
          <div className="col-3">
            <h6
              class="card-subtitle mb-2 text-body-secondary"
              style={{ fontFamily: "var(--textFont)" }}
            >
              Servings Plates
            </h6>

            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="servings"
              value={recipe.servings}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link
          class="card-link btn btn-danger"
          onClick={createRecipe}
          href="/recipes"
        >
          POST
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
