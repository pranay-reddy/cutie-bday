import React from "react";
import { useAuth } from "../context/AuthContext";
import "./ProfileBar.css";

export default function ProfileBar() {
  const { profile, signOut } = useAuth();

  if (!profile) return null;

  return (
    <div className="profile-bar">
      <span className="profile-name">Welcome, {profile.name}</span>
      <button className="profile-logout-btn" onClick={signOut}>Logout</button>
    </div>
  );
}
