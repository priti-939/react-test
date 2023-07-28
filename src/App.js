import "./App.css";
import React, { createContext, useState } from "react";
import Login from "./componets/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Sidebar from "./componets/SideBar";
import Navbar from "./componets/NavBar";
import { Grid } from "@mui/material";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const data = localStorage.getItem('email');
  console.log("app.js", data, user);

  return (
    <div>
                  <Router>

      <UserContext.Provider value={{ user, setUser }}>
        {data !== null   && <Navbar />}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {data !== null && <Sidebar />}
          </Grid>
          <Grid item xs={8}>
          <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                </Routes>

          </Grid>
        </Grid>
      </UserContext.Provider>
            </Router>
    </div>
  );
}

export default App;
