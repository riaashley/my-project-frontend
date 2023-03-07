import React from "react";
import ShopCard from "./ShopCard";

function ShopContainer({ shops, shopDelete}){
      
    return(
        <div className="shops-list">
            {shops.map((shop) => 
                <ShopCard key={shop.id} shop={shop} shopDelete={shopDelete} />
            )}

        </div>
    )
}

export default ShopContainer;