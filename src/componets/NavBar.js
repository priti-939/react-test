import { Button } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);
    const data = localStorage.getItem('email');
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('email');
        setUser(null)
        navigate('/')
    }
    return(
        <>
        <div className="navbar">
            <div style={{float:'right'}}>
            <span >{data}</span>
            <Button  onClick={handleLogout}>Logout</Button>
            </div>
        </div>
        </>
    )
};

export default Navbar;