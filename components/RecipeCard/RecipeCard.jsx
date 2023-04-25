import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Router from "next/router";
import { useSession } from "next-auth/react";

const RecipeCard = (props) => {
  const { dessert, deleteRecipe } = props;
  const img = dessert.image;

  const { data: session } = useSession();

  return (
    <div
      className="card m-3 bg-transparent shadow"
      style={{ width: "25rem", borderRadius: "30px" }}
    >
      <Image
        loader={() => img}
        src={img}
        width="250"
        height="250"
        className="card-img-top border-none"
        alt="..."
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "20px 20px 0 0",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{dessert.name}</h5>
        <p className="card-text">{dessert.description}</p>
        <div className="d-flex justify-content-between">
          <Link href={`/recipes/${dessert.id}`} className="btn btn-danger">
            Show Recipe
          </Link>
          {session && (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#dc3545", height: "22px", cursor: "pointer" }}
                className="mx-3"
                onClick={() => deleteRecipe(dessert.id)}
              />
              <FontAwesomeIcon
                icon={faPencil}
                style={{ color: "#dc3545", height: "22px", cursor: "pointer" }}
                onClick={() =>
                  Router.push(`/recipes/editPost?id=${dessert.id}`)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
