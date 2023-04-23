import RecipeCard from '@/components/RecipeCard/RecipeCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// const index = ({desserts}) => {
//     return (
//         <div className='d-flex flex-wrap justify-content-center'>
//             {desserts.map((dessert)=>{return <RecipeCard dessert={dessert} key={dessert.name}></RecipeCard>})}
//         </div>
//     );
// };

const index = () => {
    const [desserts, setDesserts] = useState([]);

    useEffect(()=>{
        async function fetchData (){
           const response = await axios.get("/api/desserts");
           setDesserts(response.data)
        };

        fetchData();
    }, [])

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {desserts.map((dessert)=>{return <RecipeCard dessert={dessert} key={dessert.name}></RecipeCard>})}
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