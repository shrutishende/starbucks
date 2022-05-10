import React from "react";
import { Link } from "react-router-dom";
import "./SignInButton.css";

function SignInButton() {
    return (
        <Link to="account/signin" className="signInButton">
            Sign In
        </Link>
    );
}

export default SignInButton;
