import React from "react";


function ShopContainer({ shops}){
      
    return(
        <div className="shops-list">
            {shops.map((shop) => 
                <ShopCard key={shop.id} shop={shop}  />
            )}

        </div>
    )
}

export default ShopContainer;