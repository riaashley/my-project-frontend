import Home from "../Home";
import React, { useState, useEffect } from "react";

import NavBar from "../NavBar";

function App() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/shops")
    .then((r) => r.json())
    .then(data => setShops(data))
  }, []);

  function shopDelete(deleteShop){
    setShops([...shops, deleteShop])
  }
  function shopAdded(newShop) {
    setShops([...shops, newShop])
  }

  return (
    <div>
       <NavBar />
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shops" element={<ShopContainer shopDelete={shopDelete} shops={shops}/>} />
          <Route exact path="/shops/new" element={<AddShop shopAdded={shopAdded} />} />
        </Routes>
     
    </div>
  );
}

export default App;
