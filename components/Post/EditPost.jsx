import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const EditPost = (props) => {

    const {dessertId} = props

    const [recipe, setRecipe] = useState({});

    const router = useRouter();

    async function getDessert (){
      const response =  await axios.get(`/api/desserts/${dessertId}`);
      setRecipe(response.data);
    }

    useEffect(()=>{
        getDessert();
        console.log(recipe);
    },[])


    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
      };

      const editRecipe = async () => {
        console.log("before put ",recipe);
        await axios.patch(`/api/desserts/${dessertId}`, recipe);
      };
    
      return (
        <div className="card m-auto mt-3" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5
              className="card-title fs-1 mb-3"
              style={{ fontFamily: "var(--textFont)" }}
            >
              Update Recipe
            </h5>
            <div className="mb-3">
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ fontFamily: "var(--textFont)" }}
              >
                Recipe Title
              </h6>
    
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="name"
                value={recipe.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ fontFamily: "var(--textFont)" }}
              >
                Description
              </h6>
    
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="description"
                value={recipe.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ fontFamily: "var(--textFont)" }}
              >
                Ingredients
              </h6>
    
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Seperate your ingredients with comma (,)"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ fontFamily: "var(--textFont)" }}
              >
                Instructions
              </h6>
    
              <textarea
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Seperate your ingredients with comma (,)"
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                style={{ fontFamily: "var(--textFont)" }}
              >
                Image
              </h6>
    
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter image URL"
                name="image"
                value={recipe.image}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="col-3">
                <h6
                  className="card-subtitle mb-2 text-body-secondary"
                  style={{ fontFamily: "var(--textFont)" }}
                >
                  Prepration time
                </h6>
    
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="prep_time"
                  value={recipe.prep_time}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <h6
                  className="card-subtitle mb-2 text-body-secondary"
                  style={{ fontFamily: "var(--textFont)" }}
                >
                  Cook time
                </h6>
    
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="cook_time"
                  value={recipe.cook_time}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <h6
                  className="card-subtitle mb-2 text-body-secondary"
                  style={{ fontFamily: "var(--textFont)" }}
                >
                  Servings Plates
                </h6>
    
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="servings"
                  value={recipe.servings}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Link
              class="card-link btn btn-danger"
              onClick={editRecipe}
              href="/recipes"
            >
              Edit
            </Link>
          </div>
        </div>
      );
};

export default EditPost;