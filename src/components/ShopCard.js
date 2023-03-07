import React from "react";
import { Link } from "react-router-dom";

function ShopCard({ shop, shopDelete }){
    const { name, image_url, location} = shop

    function handleDelete() {
        fetch(`http://localhost:9292/shops/${shop.id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
            .then(data => shopDelete(data))
        }


        return (
            <div className="details">
                <img src={image_url} alt="shop" width="55%"></img>
                <br></br>
                <Link className="details" to={`${shop.id}`}>{name}</Link>
                <p>{location}</p>
                <button className="delete" onClick={handleDelete}>Delete Shop
                </button>
                <Link className="edit" to={`${shop.id}/edit`}>Edit Shop</Link>
            </div>
            )
        }



export default ShopCard;