import  React  from "react";
import { useCookies } from "react-cookie";

export default function Userprofile() {
  const [token] = useCookies();

  // const logoutclick = () => {
  //   console.log("log out clicked");
  //   removetoken(["mykey"]);
  //   window.location.href = "/";
  // };

  return (
    <div>
     
      <h1>Welcome to main page:{token.mykey} </h1>
    </div>
  );
}


 {/* <button className="logout" onClick={logoutclick}>
        log out
      </button> */}
