import React from "react";
import Image from "next/image";
import Link from "next/link";
const RecipeCard = (props) => {
    const {dessert} = props;
    const img = dessert.image
  return (
    <div className="card m-3 bg-transparent shadow" style={{width: "25rem", borderRadius:"30px"}}>
      <Image loader={()=>img} src={img} width="250" height="250" className="card-img-top border-none" alt="..." style={{width:"100%", height:"350px", objectFit:"cover", objectPosition:"center", borderRadius:"20px 20px 0 0"}}/>
      <div className="card-body text-center">
        <h5 className="card-title">{dessert.name}</h5>
        <p className="card-text">
            {dessert.description}
        </p>
        <Link href={`/recipes/${dessert.id}`} className="btn btn-danger">
          Show Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
