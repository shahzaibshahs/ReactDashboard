import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Login(){
  
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
          navigate('register')
        }
    },[])

    async function login(){
      console.log(email,password);
      let item={email,password};
      let result= await fetch('http://127.0.0.1:8000/api/login',{
        method:'POST',
        headers:{
           "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result.user));
      navigate("/add-product");
    }

    return(
        <div>
          <Header />

          <div className="col-sm-6 offset-sm-3">

          <h1>Login Page</h1>

          <input type="text" className="form-control" placeholder="email" onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />

          <input type="password" className="form-control" placeholder="password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

          <button onClick={login} className="btn btn-primary">Login</button>

          </div>
        </div>
    );
}

export default Login;