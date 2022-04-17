import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

import { Api } from "../api/Api";



const SignUp=()=>{

    const [email, setEmail]=useState('')
    const [password1, setPassword1]=useState('')
    const [password2, setPassword2]=useState('')
    const [token, setToken]=useState('')

    const x = token.key?window.location.href="/account":token.email||token.password1|| "Please Enter Right Info"

    console.log(token);
    useEffect(()=>x)
 
   const signupClicked = () => {

    Api.RegesterUser({email,password1,password2})
    .then(res=>setToken(res)) 
    .catch(error=>console.log(error))
   }
    
    return(
        <div>
            <form onSubmit={event=> event.preventDefault()}>

           
            <h1>hello this is SignUp page</h1>
           
                <div className="email">
                    <input type="email"  onChange={e =>setEmail(e.target.value)} value={email} placeholder="Email"/>
                </div>
                <div className="password1">
                    <input type="password"  onChange={e=>setPassword1(e.target.value)} value={password1} placeholder="Password"/>
                </div>
                <div className="password2">
                    <input type="password"  onChange={e=>setPassword2(e.target.value)} value={password2} placeholder="Repeat password"/>
                </div>
                
                <div className="submit">
                    <input type="submit" title="Submit"onClick={signupClicked}/>
                </div>
                <p>{x}</p>
                <p><Link to="/signin"> if you alread have account click to sign in</Link></p>

            </form >

        </div>
    )
}
export default SignUp;