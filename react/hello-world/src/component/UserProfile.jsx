import React, { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [profile, setProfile] = useState([{
    name: "",
    email: "",
    website: "",
  }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const profileData = {
          name: data.name,
          email: data.email,
          website: data.website,
        };
        setProfile(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="user-profile">
        <div className="loading">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-profile">
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile">
        <div className="profile-item">
          <label>Name:</label>
          <span>{profile.name}</span>
        </div>
        <div className="profile-item">
          <label>Email:</label>
          <span>{profile.email}</span>
        </div>
        <div className="profile-item">
          <label>Website:</label>
          <span>{profile.website}</span>
        </div>
    </div>
  );
}

export default UserProfile;
