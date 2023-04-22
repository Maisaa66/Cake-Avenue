import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faKitchenSet,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./reciepeDetail.module.css";
const RecipeDetail = ({ dessert }) => {
  const [activeTab, setActiveTab] = useState("Ingreident");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const img = dessert.image;
  return (
    <div className=" mx-5 rounded position-relative ">
      <div className="card  text-white">
        <div
        //   style={{ height: "350px", overflow: "hidden", borderRadius: "20px" }}
        >
          <Image
            loader={() => img}
            src={img}
            width="250"
            height="250"
            className="card-img-top"
            alt="..."
            style={{
              width: "100%",
              height: "1000px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          ></div>
        </div>
        <div className="card-img-overlay m-3">
          <h5
            className="card-title fs-1 fw-bold"
            style={{ fontFamily: "var(--textFont)" }}
          >
            {dessert.name}
          </h5>
          <p
            className="card-text fs-4"
            style={{ fontFamily: "var(--textFont)" }}
          >
            {dessert.description}
          </p>
          <div
            className="card w-75 m-auto border-none "
            // style={{ top: "50%" }}
          >
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center mb-5">
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: "#a10812", height: "22px" }}
                    />
                    <div>{dessert.prep_time}</div>
                  </div>
                  <div className="col-md-4 col-sm-12  d-flex flex-column align-items-center  mb-5">
                    <FontAwesomeIcon
                      icon={faKitchenSet}
                      style={{ color: "#a10812", height: "22px" }}
                    />
                    <div>{dessert.cook_time}</div>
                  </div>

                  <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                    <FontAwesomeIcon
                      icon={faBowlFood}
                      style={{ color: "#a10812", height: "22px" }}
                    />
                    <div>{dessert.servings}</div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className={`col-6 text-center fs-3 fw-bold`}
                    style={{ fontFamily: "var(--textFont)", cursor: "pointer" }}
                    onClick={() => {
                      handleActiveTab("Ingreident");
                    }}
                  >
                    <span
                      className={`px-3 py-1 ${
                        activeTab === "Ingreident"
                          ? styles.active
                          : styles.toggle
                      } `}
                    >
                      Ingreident
                    </span>
                  </div>
                  <div
                    className="col-6 text-center fs-3 fw-bold"
                    style={{ fontFamily: "var(--textFont)", cursor: "pointer" }}
                    onClick={() => {
                      handleActiveTab("Instructions");
                    }}
                  >
                    <span
                      className={`px-3 py-1 ${
                        activeTab === "Instructions"
                          ? styles.active
                          : styles.toggle
                      }`}
                    >
                      Instructions
                    </span>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {" "}
                  <div class="card " style={{ width: "80%" }}>
                    <ul class="list-group list-group-flush">
                      {activeTab === "Ingerdient"
                        ? dessert.ingredients.map((ing, index) => (
                            <li class="list-group-item" key={index}>
                              {ing}
                            </li>
                          ))
                        : dessert.instructions.map((ins, index) => (
                            <li class="list-group-item" key={index}>
                              {ins}
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
export async function getStaticPaths() {
  return {
    paths: [
      { params: { recipeId: "1" } },
      { params: { recipeId: "2" } },
      { params: { recipeId: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/desserts/${params.recipeId}`);
  const data = await res.json();
  return {
    props: {
      dessert: data,
    },
  };
}
