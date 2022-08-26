import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";
import { useHistory } from 'react-router-dom'
import "../css/login.css"

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    const login =(()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            alert("Welcome back")
            history.push("/home");
        }).catch(()=>{
            console.log("Wrong details");
            alert("Wrong details entered, Please enter the correct details");
        })
    })

    return(
        <div >

            <h1>Login</h1>

            <input type="email" placeholder="Please Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="email" placeholder="Please Enter your Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>

            <button style={{width: '150px', height: '30px'}} onClick={login}>Login</button>

        </div>
    )

}

export default Login;