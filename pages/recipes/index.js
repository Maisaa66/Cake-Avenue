import RecipeCard from "@/components/RecipeCard/RecipeCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// const index = ({desserts}) => {
//     return (
//         <div className='d-flex flex-wrap justify-content-center'>
//             {desserts.map((dessert)=>{return <RecipeCard dessert={dessert} key={dessert.name}></RecipeCard>})}
//         </div>
//     );
// };

const index = () => {
  const [desserts, setDesserts] = useState([]);
  async function fetchData() {
    const response = await axios.get("/api/desserts");
    setDesserts(response.data);
  }
  const deleteRecipe = async (dessertId) => {
    await axios
      .delete(`/api/desserts/${dessertId}`)
      .then(() => {
        console.log("delete done");
        fetchData();
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Link href="/recipes/createPost" className="btn btn-outline-danger rounded-start fs-3" style={{fontFamily:"var(--textFont)"}} >Add Post </Link>
        {/* <p className="btn btn-danger rounded-end fs-3">+</p> */}
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {desserts.map((dessert) => {
          return (
            <RecipeCard
              dessert={dessert}
              key={dessert.name}
              deleteRecipe={deleteRecipe}
            ></RecipeCard>
          );
        })}
      </div>
    </div>
  );
};

export default index;

// // using SSG
// export async function getStaticProps(){
//     const res = await fetch("http://localhost:4000/desserts")
//     const data = await res.json();
//     return{
//         props:{
//             desserts : data
//         }
//     }
// }

// using SSR
// export async function getServerSideProps(){
//     const res = await fetch("http://localhost:4000/desserts")
//     const data = await res.json();
//     return{
//         props:{
//             desserts : data
//         }
//     }
// }
