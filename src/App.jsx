import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";

import Navbar from "./components/Navibar";
import ProfileBar from "./components/ProfileBar";
import Events from "./components/Events";
import Birthday from "./components/BDayWrapper";
import PicDump from "./components/PicDump";
import Home from "./components/Home";
import DChristmas from "./components/DChristmas";
import Auth from "./components/Auth";
import Notes from "./components/Notes";

function App() {
  const auth = useAuth();

  if (!auth) return <div>Loading context...</div>;

  const { user, loading } = auth;

  if (loading) return <div>Loading...</div>;

  // NOT LOGGED IN → show full-screen Auth page (NO BORDERS)
  if (!user) {
    return (
      <div style={{ margin: 0, padding: 0 }}>
        <Auth />
      </div>
    );
  }

  return (
    <Router>
      {/* NAVBAR at top */}
      <Navbar />

      {/* ProfileBar right below navbar */}
      <ProfileBar />

      {/* ROUTES - NO EXTRA PADDING */}
      <div style={{ margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pic-dump" element={<PicDump />} />
          <Route path="/BDayWrapper" element={<Birthday />} />
          <Route path="/Christmas" element={<DChristmas />} />
          <Route path="/Notes" element={<Notes />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
