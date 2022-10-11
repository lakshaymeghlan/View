import React from "react";
import './Login.css'
import {Link,useNavigate} from 'react-router-dom';
import { useState,useEffect,useRef } from "react";
import logo from './logoPng.png';
import {useSelector, useDispatch} from 'react-redux'
import {loginApiCall} from '../ApiCall/LoginApiCall'
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../Firebase_Config";

function Login(){

    const navigate = useNavigate();

    const loginWithGoogle = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);
  
        const user = result.user;
  
        const userData = {
          name: user.displayName,
          email: user.email,
          userImage: user.photoURL,
          google: true,
          moderator: false,
          password: "##)@*!%@",
        };
  
        try {
          await axios.post("http://localhost:8000/auth/register", userData);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
  
        localStorage.setItem("user", JSON.stringify(userData));
  
        navigate("/home");
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Error ${error}`);
      }
    };
  





    const state = useSelector(state =>state.UserReducer);
    const initialValue = useRef(true);
    useEffect(()=>{
        if(!initialValue.current){
            console.log(state)
        }else{
            initialValue.current=false;
        }
        
    },[state])

    const[emailval,setEmailval]= useState('');
    const[pwdval,setPwdval]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(emailval!=='' || pwdval!==''){
                loginApiCall({"email":emailval,"password":pwdval})
            setEmailval('');
            setPwdval('');     
        }
        navigate("/")
    }

    return (
        <div className="main-login">
            <div className="login-container">
                <div className="left-side">
                    <div className="img-class" style={{width:"9rem",height:"9rem" }}>
                        <img src={logo} id="img-id" alt="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label for='email1'><h3>Email :</h3></label>

                        <input placeholder="Email-ID" 
                               type='email' 
                               value={emailval} 
                               onChange={(e)=>{setEmailval(e.target.value)}} 
                               id='email1'
                        />
                      
                      <label for='pwd1'><h3>Password :</h3></label>
                        <input placeholder="Password" 
                               type="password" 
                               value={pwdval} 
                               onChange={(e)=>{setPwdval(e.target.value)}}
                               id='pwd1'
                        />

                        <button onClick={handleSubmit} className="button_rev" type="submit" >Sign in</button>
                    </form>

                    <div className="footer">
                        <h4>Don't have an account? <Link className="link" to='/register'>Sign Up Now</Link></h4>
                    </div>

                    <button onClick={loginWithGoogle}>Login with google</button>



                </div>
            </div>
            
        </div>
    )
}

export default Login;