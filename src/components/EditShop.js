import React, {useState} from "react";

function EditShop({ shopEdit }){

    const [name, setName] = useState("");
    const [image, setImage] = useState("");


    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleImageChange(e){
        setImage(e.target.value)
    }
    


    function handleSubmit(e) {
        e.preventDefault()
        const update = {
            name: name,
            image: image,

        }
        
    }

    return(
        <div>
           <h1 className="newShop_header">
                Edit Shop

                <input type="text" onChange={handleNameChange} value={name} />
            <br></br>
            <label>Image Link</label><br></br>
                <input type="text" onChange={handleImageChange} value={image} />
                <br></br> 
            <label>Location</label><br></br>
                <input type="text" onChange={handleLocationChange} value={location} />
                <br></br>

            </form>
        </div>
    )
}

export default EditShop;