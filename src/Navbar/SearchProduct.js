import React, {useState} from "react";
import Header from './Header';
import { Table } from "react-bootstrap";
function SearchComponent(){
  
  const [data,setData]=useState([])

    async function search(key){
        if(key.length>1)
          
          {
            let result = await fetch('http://127.0.0.1:8000/api/search/'+key)
            result = await result.json();
            console.log(result);
            setData(result)

          }

      }
     return(
        <div>
          <Header />
          <h1>Search Page</h1>
          <div className="col-sm-6 offset-sm-3"> <br/>

          <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" />

          {
              data.length>0?
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Price</th>
               
                </tr>
              </thead>
              <tbody>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img style={{ width: 130 }} src={"http://localhost:8000/" + item.file_path} /></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
               
                    </tr>)
                }
                
              </tbody>
            </Table>
            :null
          }
          </div>
        </div>
    );
}

export default SearchComponent;