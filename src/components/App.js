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

  return (
    <div>
       <NavBar />
       <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
     
    </div>
  );
}

export default App;
