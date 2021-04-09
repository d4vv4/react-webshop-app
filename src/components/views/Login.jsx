import React, { useRef, useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const Login = () => {
  const { handleLogin, saveUser } = useContext(dbContext);
  const [errorLogin, setLoginError] = useState("");
  const [errorCreate, setCreateError] = useState("");
  const history = useHistory();
  const username = useRef();
  const password = useRef();

  const tempLogin = async (e) => {
    let result = await handleLogin(e);
    console.log(result);
    if (result === "success") {
      history.push("/shop");
    } else {
      setLoginError("felaktig inloggning, försök igen");
    }
  };

  const tempSave = async (e) => {
    let result = await saveUser(e);
    console.log(result);
    if (result === "success") {
      history.push("/shop");
    } else {
      setCreateError("felaktig inmatning, försök igen");
    }
  };

  return (
    <React.Fragment>
      <h1>Logga in</h1>
      <form onSubmit={tempLogin}>
        <div className="row justify-content-center">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="username"
              ref={username}
              placeholder="Användarnamn"
            ></input>
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              name="password"
              ref={password}
              placeholder="Lösenord"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary w-25">
            Logga in
          </button>
        </div>
        {errorLogin && <p className="text-danger">{errorLogin}</p>}
      </form>
      <h1 className="mt-5">Skapa konto</h1>
      <form onSubmit={tempSave}>
        <div className="row justify-content-center">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="username"
              ref={username}
              placeholder="Användarnamn"
            ></input>
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              name="password"
              ref={password}
              placeholder="Lösenord"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary w-25">
            Spara
          </button>
        </div>
        {errorCreate && <p className="text-danger">{errorCreate}</p>}
      </form>
    </React.Fragment>
  );
};
export default Login;
