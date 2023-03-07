import React from "react";

function CoffeeSelections({ drink }) {
    const {coffee_name, image_url, category, description} = drink
    return (
        <div className="details">
            <img src={image_url} alt="coffee" width="80%" />
            <h2 className="drinks">{coffee_name}</h2>
            <h3>{category} coffee</h3>
            <p>{description}</p>
        </div>
    )
}
export default CoffeeSelections;