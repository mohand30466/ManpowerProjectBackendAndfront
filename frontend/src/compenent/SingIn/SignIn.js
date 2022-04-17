import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/Api";
import { useCookies } from "react-cookie";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [token, setToken] = useCookies(["mykey"]);

  useEffect(() => {
    if (token.mykey === "undefined");
    else if (token.mykey) window.location.href = "home";
  }, [token]);

  const signinClicked = (e) => {
    e.preventDefault();
    Api.SignInUser({ email, password })
      .then((res) => setToken("mykey", res.key))
      .then((error) => console.log(error));
    promptUser();
  };
  const promptUser = () => setMsg("email or password is incorrect");

  return (
    <>
      <form onSubmit={signinClicked}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={signinClicked} className="btn btn-primary">
          Submit
        </button>
        <p> {msg} </p>
        <Link to="/signUp">
          if you dont have account click here to sign up{" "}
        </Link>
      </form>
    </>
  );
};
export default SignIn;

{
  /* <h1> hello this is Signin page </h1>
<div className="email">
  <input
    type="email"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    placeholder="inter your email"
  />
</div>{" "}
<div className="password1">
  <input
    type="password"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    placeholder="repeat your password1"
  />
</div>{" "}
<div className="submit">
  <button onClick={signinClicked}> Sign in </button>{" "}
</div>
<p> {msg} </p> 
<p> forget password </p>{" "}
<p>
  {" "}
  <Link to="/signUp">
    if you dont have account click here to sign up{" "}
  </Link>
</p> */
}
