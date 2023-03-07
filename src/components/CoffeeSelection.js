import React from "react";

function CoffeeSelections({ drink }) {
    const {coffee_name, image_url, category, description} = drink
    return (
        <div className="details">
            <img src={image_url} alt="coffee" width="80%" />

        </div>
    )
}
export default CoffeeSelections;