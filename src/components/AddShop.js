import React, {useState} from "react";

function AddShop({ shopAdded }){
//name, image_url, location
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleImageChange(e){
        setImage(e.target.value)
    }
    
    function handleLocationChange(e){
        setLocation(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newShop = {
            name: name,
            image: image,
            location: location,
        }
        fetch("http://localhost:9292/shops", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShop)
        })
            .then((r) => r.json())
            .then(data => shopAdded(data))
    }


    return(
        <div>
           <h1 className="newShop_header">
        Add Your Shop For Some Caffeine Fun!
               </h1><form className="add-activity" onSubmit={handleSubmit}>
            <label>Business Name</label><br></br>
                <input type="text" onChange={handleNameChange} value={name} />
            <br></br>
            <label>Image Link</label><br></br>
                <input type="text" onChange={handleImageChange} value={image} />
                <br></br> 
            <label>Location</label><br></br>
                <input type="text" onChange={handleLocationChange} value={location} />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddShop;