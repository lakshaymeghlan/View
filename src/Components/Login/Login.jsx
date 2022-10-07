import React from "react";
import './Login.css'
import {Link} from 'react-router-dom';
import { useState,useEffect,useRef } from "react";
import logo from './logoPng.png';
import {LoginApiCall} from '../ApiCall/LoginApiCall';
import {useSelector, useDispatch} from 'react-redux'

function Login(){

    const state = useSelector(state =>state.UserReducer);
    const dispatch = useDispatch();
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
                LoginApiCall({"email":emailval,"password":pwdval},dispatch);
            setEmailval('');
            setPwdval('');     
        }
    }

    return (
        <div className="main-login">
            <div className="login-container">
                <div className="left-side">
                    <div className="img-class" style={{width:"9rem",height:"9rem" }}>
                        <img src={logo} id="img-id" alt="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label for='email1'>Email :</label>

                        <input placeholder="Email-ID" 
                               type='email' 
                               value={emailval} 
                               onChange={(e)=>{setEmailval(e.target.value)}} 
                               id='email1'
                        />
                      
                      <label for='pwd1'>Password :</label>
                        <input placeholder="Password" 
                               type="password" 
                               value={pwdval} 
                               onChange={(e)=>{setPwdval(e.target.value)}}
                               id='pwd1'
                        />

                        <button className="button_rev" type="submit" >Sign in</button>
                    </form>

                    <div className="footer">
                        <h4>Don't have an account? <Link className="link" to='/register'>Sign Up Now</Link></h4>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Login;