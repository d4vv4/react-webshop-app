import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const Login = () => {
  const { handleLogin, saveUser } = useContext(dbContext);
  const [error, setError] = useState("");
  const history = useHistory();
  const username = useRef();
  const password = useRef();

  const tempLogin = async (e) => {
    let result = await handleLogin(e);
    console.log(result);
    if (result === "success") {
      history.push("/");
    } else {
      setError("felaktig inloggning, försök igen");
    }
  };

  return (
    <React.Fragment>
      <h1>LOGGA IN</h1>
      <form onSubmit={tempLogin}>
        <input type="text" name="username" ref={username}></input>
        <input type="password" name="password" ref={password}></input>
        <button type="submit">Logga in</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
      <h1>SKAPA KONTO</h1>
      <form onSubmit={saveUser}>
        <input type="text" name="username" ref={username}></input>
        <input type="password" name="password" ref={password}></input>
        <button type="submit">Spara</button>
      </form>
    </React.Fragment>
  );
};
export default Login;
