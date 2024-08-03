import React from "react";

export const Header=({img,title})=>{
    return (
        <div>
            <img src={img} alt="img" />
            <h1>{title}</h1>
        </div>
    )
}