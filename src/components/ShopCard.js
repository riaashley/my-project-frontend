import React from "react";

function ShopCard({ shop }){
    const { name, image_url, location} = shop
 


    return (
        <div className="details">
            <img src={image_url} alt="shop" width="55%"></img>
            <br></br>
            <Link className="details" to={`${shop.id}`}>{name}</Link>
            <p>{location}</p>
        </div>
        )
    }




export default ShopCard;