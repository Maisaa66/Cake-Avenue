import RecipeCard from '@/components/RecipeCard/RecipeCard';
import React from 'react';

const index = ({desserts}) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {desserts.map((dessert)=>{return <RecipeCard dessert={dessert} key={dessert.name}></RecipeCard>})}
        </div>
    );
};

export default index;

export async function getStaticProps(){
    const res = await fetch("http://localhost:4000/desserts")
    const data = await res.json();
    return{
        props:{
            desserts : data
        }
    }
}