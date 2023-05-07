import React, { useEffect, useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import {
  Paper,
  Button,
  FormGroup,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(state);
    console.log("Submitted!!!");
  };

  const validateMail = (mail) => {
    let mailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    console.log(mailPattern.test(mail));

    if (!mailPattern.test(mail)) {
      setError({ ...error, emailError: true });
      setValidate(false);
    } else {
      setError({ ...error, emailError: false });
      setValidate(true);
    }
    return mailPattern.test(mail);
  };

  const validatePassword = (password) => {
    let passwordPattern =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    console.log(passwordPattern.test(password));

    if (!passwordPattern.test(password)) {
      setError({ ...error, passwordError: true });
      setValidate(false);
    } else {
      setError({ ...error, passwordError: false });
      setValidate(true);
    }
    return passwordPattern.test(password);
  };

  useEffect(() => {
    setError({ emailError: false, passwordError: false });
  }, []);

  return (
    <>
      <div className="tz-mainPage tz-loginform">
        <Paper className="tz-loginPaper" elevation={12}>
          <form>
            <Box textAlign={"center"} sx={{ m: 4 }}>
              <Typography variant="h3">SIGN IN</Typography>
            </Box>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                type={"email"}
                label="Email"
                name="email"
                variant="outlined"
                value={state.email}
                onChange={(e) => handleChange(e)}
                onBlur={() => validateMail(state.email)}
                error={error.emailError}
              />
              {error.emailError ? (
                <FormHelperText error>Incorrect E-Mail</FormHelperText>
              ) : null}
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="password"
                name="password"
                variant="outlined"
                type="password"
                value={state.password}
                onChange={(e) => handleChange(e)}
                onBlur={() => validatePassword(state.password)}
                error={error.passwordError}
              />
              {error.passwordError ? (
                <FormHelperText error>Incorrect password</FormHelperText>
              ) : null}
            </FormGroup>
            <Box textAlign={"center"} sx={{ m: 1 }}>
              <Button
                variant="contained"
                size="large"
                disabled={validate}
                onClick={(e) => handleSignIn(e)}
              >
                Sign In
              </Button>
            </Box>
          </form>
          <Box textAlign={"right"} sx={{ p: 1.5 }}>
            <Typography>
              New User?{" "}
              <Link className="tz-link" to="/sign-up">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default Login;
