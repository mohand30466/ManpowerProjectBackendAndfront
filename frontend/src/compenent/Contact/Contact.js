import { React } from "react";
import { useCookies } from "react-cookie";

const Contact = () => {
  const [token] = useCookies();

  return (
    <div>
      <h1> hello from Contact </h1> <h1> {token.mykey} </h1>{" "}
    </div>
  );
};
export default Contact;
