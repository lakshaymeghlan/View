import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Like from "./Components/Like_video/Like";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Feedback from "./Components/Feedback/Feedback";
import UploadVideo from "./Components/UploadVideo/UploadVideo";
import ViewVideo from "./Components/ViewVideo/ViewVideo";
import Profile from "./Components/Home/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Like />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/uploadvideo" element={<UploadVideo />} />
          <Route path="/viewvideo/:id" element={<ViewVideo />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
