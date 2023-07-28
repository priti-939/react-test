import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, Typography } from "@mui/material";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { useContext, createContext } from 'react';
import { UserContext} from '../App';
import { Grid } from "@mui/material";
const Login = () => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email !== '' && password !== ''){

            navigate('/home');
           setUser(email);
           localStorage.setItem("email", email);

        }else{
            alert('Email and password is requried')
        }
    }

    return(
        <Grid container spacing={2}>
        <Grid item xs={12}>
           
        <div className="login-div">
        <h1>Login</h1>
            <Typography>Email Id </Typography>
            <TextField variant="outlined"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Typography>Password</Typography>
            <TextField variant="outlined" type="password"  value={password} onChange={(e) => setPass(e.target.value)}/>
            <br />
            <Button variant="contained" style={{marginTop: '15px'}} onClick={handleLogin}>Login</Button>
    </div>
    </Grid>
            </Grid>
    )
};

export default Login;