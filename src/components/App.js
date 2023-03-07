import React, { useState, useEffect } from "react";
import Home from "./Home";
import ShopContainer from "./ShopContainer";
import AddShop from "./AddShop";
import NavBar from "./NavBar";
import ShopDetails from "./ShopDetails";
import EditShop from "./EditShop";
import { Route, Routes } from "react-router-dom"

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
    function shopEdit(editShop){
      setShops([...shops, editShop])
    }

  return (
  <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shops" element={<ShopContainer shopDelete={shopDelete} shops={shops}/>} />
        <Route exact path="/shops/new" element={<AddShop shopAdded={shopAdded} />} />
        <Route exact path="/shops/:id"element={<ShopDetails/>} />
        <Route exact path="/shops/:id/edit" element={<EditShop shopEdit={shopEdit}/>} />
      </Routes>
  </div>
  )
}
export default App;