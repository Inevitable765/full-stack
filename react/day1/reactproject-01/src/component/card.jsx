import React from "react";
const Card=({img,text})=>{

   
    return(
        <div classname='h-96 w-64'>
            <div>
                <img classname="w-full" src={img} />
                <h1 classname="text-3x1 font-bold text-blue-500 p-4 text-center"></h1>
                {text}
            </div>
        </div>
            
    )
}

export default Card;