import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogPost from "./pages/blogposts/BlogPost";
import BlogPage from "./pages/blogpage/BlogPage";
import Nav from "./components/Nav";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <>
        <Nav auth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login auth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>}/>
            <Route path="/blogposts" element={isAuthenticated && <BlogPost/>}/>
            <Route path="/blogposts/:blogId" element={isAuthenticated && <BlogPage/>}/>
        </Routes>
    </>
  );
}

export default App;