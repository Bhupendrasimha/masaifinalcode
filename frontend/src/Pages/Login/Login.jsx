import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeLoginRequest } from "../../Redux/Login/actions";
import { TextField } from "@material-ui/core";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const isAuth = useSelector((state) => state.login.isAuth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length < 6) {
      toast("Email is invalid.", {
        autoClose: 4000,
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
      });
    }

    if (pass.length < 6) {
      toast("Password is invalid.", {
        autoClose: 4000,
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
      });
    } else {
      dispatch(makeLoginRequest(email, pass));
    }
  };

  return (
    <div className={styles.full}>
      <div className={styles.heading}>Election Poll Station Manager</div>
      <ToastContainer className={styles.toast} />
      <div className={styles.box}>
        <TextField
          id="outlined-multiline-flexible"
          variant="outlined"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          variant="outlined"
          value={pass}
          label="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
        <div>Not registered?</div>
        <div onClick={handleRegister} className={styles.links}>
          Register Here.
        </div>
      </div>
      {isAuth && <Redirect to="/cities" />}
    </div>
  );
};
