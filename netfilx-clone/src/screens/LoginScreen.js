import React, { useState } from "react";
// import temp from "../../public/Images/temp";
import "./LoginScreen.css";
import SignupScreen from "./SignUpScreen";

function LoginScreen() {
  const [signin, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignin(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmers and more.</h1>
            <h2>Wach anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignin(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED &gt;
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      {/* GET STARTED */}
      {/* <section className="parent__jumbotron">
        <div className="jumbotron">
          <div className="leftSection">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray Players and more.
            </p>
          </div>

          <div className="rightSection">
            <video className="video" autoPlay playsInline loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                typeof="video/mp4"
              />
            </video>
            <img
              id="tv"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="alternatename"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default LoginScreen;