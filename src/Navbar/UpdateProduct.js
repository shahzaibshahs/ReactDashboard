import Header from './Header';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const { id } = useParams(); // Get the product ID from the route parameters
    const [data, setData] = useState({}); // Initialize as an empty object

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch('http://127.0.0.1:8000/api/product/' + id);
                result = await result.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchData();
    }, [id]); // Add id as a dependency to re-fetch if the ID changes

    return (
        <div>
            <Header />
            <h1>Update Product</h1>
            <input type="text" defaultValue={data.name} /> <br /> <br />
            <input type="text" defaultValue={data.price} /> <br /> <br />
            <input type="text" defaultValue={data.description} /> <br /> <br />
            <input type="file" defaultValue={data.file_path} /> <br /> <br />
            {data.file_path && <img style={{ width: 50 }} src={"http://127.0.0.1:8000/" + data.file_path} alt={data.name} />}
            <button className="btn btn-primary">Update Product</button>
        </div>
    );
}

export default UpdateProduct;
