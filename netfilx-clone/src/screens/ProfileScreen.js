import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  // Fetching user data from Redux store
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg"
            alt="Avatar"/>
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
                <h3>Plans</h3> 
                <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;