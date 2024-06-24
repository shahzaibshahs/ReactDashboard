import React, {useState} from "react";
import Header from './Header';

function AddProduct(){
  
  const [name,setName] = useState("");
  const [file,setFile] = useState(null);
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
 
  async function addProduct(){
  console.log(name,file,price,description);
  const formData=new FormData();
  formData.append("file",file);
  formData.append("name",name);
  formData.append("price",price);
  formData.append("description",description);
  try {
    let result = await fetch('http://127.0.0.1:8000/api/addproduct', {
      method: 'POST',
      body: formData,
    });

    if (result.ok) {
      alert("Data has saved");
    } else {
      alert("Failed to save data");
    }
  } catch (error) {
    console.error('Error saving data:', error);
    alert("Failed to save data");
  }
}

const handleFileChange = (e) => {
  // Handle file input change and set the file state
  if (e.target.files.length > 0) {
    setFile(e.target.files[0]);
  }
};

  return(
        <div>
          <Header />
          <h1>Add Product Page</h1>

          <div className="col-sm-6 offset-sm-3"> <br/>
          <input type="text" className="form-control" value={name}  onChange={(e)=>setName(e.target.value)}   placeholder="name" /> <br/> 
          <input type="file"className="form-control"   onChange={handleFileChange} placeholder="File" /> <br/> 
          <input type="text" className="form-control"  value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="price" /> <br/> 
          <input type="text" className="form-control"  value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="description" /> <br/> 
          <button  onClick={addProduct} className="btn btn-primary">Add Product</button>



          </div>
        </div>
    );
}

export default AddProduct;