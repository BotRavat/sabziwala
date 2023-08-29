import { useEffect, useState } from "react";
import "./authpage.css";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function openForm(formType) {
    if (formType === "SignUp") {
      setIsSignUp(true);
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
      setIsSignUp(false);
    }
  }
  function closeForm() {
    setIsSignIn(false);
    setIsSignUp(false);
  }

  useEffect(() => {
    if (!isSignIn) setIsSignIn(true);
  }, []);

  return (
    <>
      {isSignIn && (
        <div
          className={`auth-page signin-page ${isSignIn ? "active" : ""}`}
          id="signin"
        >
          <div className="auth-page-top">
            <p className="cancel-button" onClick={() => closeForm("signIn")}>
              ❌
            </p>
            <p className="site-name">Sabzi wala</p>
          </div>

          <form className="form-container">
            <label>Enter Your Email</label>
            <input type="email" placeholder="xyz@gmail.com" />
            <label>Enter Your Password</label>
            <input type="password" placeholder="Enter password" />
            <button className="auth-page-button">Sign In</button>
            <p styles={{ fontSize: "12px", marginTop: "10px" }}>
              Don't have an account ?
              <span
                onClick={() => openForm("SignUp")}
                styles={{
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Sign Up
              </span>
            </p>
            <p className="terms-condition">
              By clicking on Sign In, I accept the
              <a className="link">Terms & Conditions</a> &
              <a className="link">Privacy Policy</a>
            </p>
          </form>
        </div>
      )}

      {isSignUp && (
        <div className={` auth-page ${isSignUp ? "active" : ""}`} id="auth">
          <div className="auth-page-top">
            <p className="cancel-button" onClick={() => closeForm("SignUp")}>
              ❌
            </p>
            <p className="site-name">Sabzi wala</p>
          </div>

          <form className="form-container">
            <label>Enter Your Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Enter Your Email</label>
            <input type="email" placeholder="xyz@gmail.com" />
            <label>Enter Password</label>
            <input type="password" placeholder="Choose a strong password" />
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter same password again" />
            <button className="auth-page-button">Sign Up</button>
            <p styles={{ fontSize: "12px", marginTop: "10px" }}>
              Already have an account ?
              <span
                onClick={() => openForm("SignIn")}
                styles={{
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Sign In
              </span>
            </p>
            <p className="terms-condition">
              By clicking on Sign Up, I accept the
              <a className="link">Terms & Conditions</a> &
              <a className="link">Privacy Policy</a>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
