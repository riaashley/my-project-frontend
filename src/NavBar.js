import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <div>
             <ul className="navBar">
                <li className="home">
                    <Link to="/">
                         Home
                     </Link>
                 </li>
                <li className="shops">
                    <Link to="/shops">
                     Shops
                    </Link>
                 </li>  
                 <li className="new_shop">
                     <Link to="/shops/new">
                         Add Shop
                     </Link>
                 </li>     
            </ul>
        </div>
    )
}

export default NavBar;