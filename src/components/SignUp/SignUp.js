import { Box, Button, FormGroup, Paper, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const SignUp = () => {
    const [signUpState, setSignUpState] = useState({
        name: '',
        role: '',
        primarySkill: '',
        about: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setSignUpState({...signUpState, [e.target.name]: e.target.value})
    }

    const handleSignUp = (e) => {
        console.log(signUpState)
    }
  return (
    <>
      <div className="tz-mainPage tz-loginform">
        <Paper className="tz-loginPaper" elevation={12}>
          <form>
            <Box textAlign={"center"} sx={{ m: 4 }}>
              <Typography variant="h3">SIGN UP</Typography>
            </Box>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                value={signUpState.name}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="role"
                name="role"
                variant="outlined"
                type="text"
                value={signUpState.role}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="Primary Skill"
                name="primarySkill"
                variant="outlined"
                type="text"
                value={signUpState.primarySkill}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="About Yourself"
                name="about"
                variant="outlined"
                type="text"
                multiline
                minRows={2}
                value={signUpState.about}
                onChange={(e) => handleChange(e)}
              />
              
            </FormGroup>
            <FormGroup sx={{ m: 1.5}}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                type="email"
                value={signUpState.email}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="password"
                name="password"
                variant="outlined"
                type="password"
                value={signUpState.password}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup sx={{ m: 1.5 }}>
              <TextField
                label="Confirm password"
                name="confirmPassword"
                variant="outlined"
                type="password"
                value={signUpState.confirmPassword}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <Box textAlign={"center"} sx={{ m: 1 }}>
              <Button
                variant="contained"
                size="large"
                onClick={(e) => handleSignUp(e)}
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </Paper>
      </div>
    </>
  )
}

export default SignUp