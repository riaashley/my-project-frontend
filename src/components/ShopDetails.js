import React, { useEffect, useState } from "react";
import CoffeeSelections from "./CoffeeSelections";


function ShopDetails({ coffees }){
    const [shop, setShop] = useState(null);
    const [selection, setSelection] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:9292/shops/${id}`)
            .then((r) => r.json())
            .then(data => setShop(data))
    }, [])
    if (shop == null) {
        return (
            <h1>loading...</h1>
        )
    }


    return(
        <div className="details">
            <img src={image_url} alt="coffee" width="55%" /> 
            <h1 className="shopDetails">{name}</h1>
                <h2>{location}</h2>
 
    
        </div>
    )
}

export default ShopDetails;