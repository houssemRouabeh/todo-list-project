import { useRef, useState } from "react";
import CustomInput from "../components/forms/CustomInput";
import axios from "axios";

function Login() {
  const [error, setError] = useState("");
  const email = useRef();
  const password = useRef();
  const loginHandler = async (e) => {
    e.preventDefault();

    const inputEmail = email.current.value;
    const inputPassword = password.current.value;
    try {
      const response = await axios.get("/users.json");
      const users = response.data;
      const user = users.find(
        (element) =>
          element.username === inputEmail && element.password === inputPassword
      );
      if (user) {
        console.log("Welcome");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Server diconnected");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={(event) => loginHandler(event)}>
          <CustomInput
            id="email"
            type="email"
            placeholder="Enter your email"
            ref={email}
          >
            Email :
          </CustomInput>
          <CustomInput
            type="password"
            id="password"
            placeholder="Enter your password"
            ref={password}
          >
            Password :
          </CustomInput>
          <button type="submit">Login</button>
          <p>{error}</p>
        </form>
      </div>
    </>
  );
}

export default Login;
