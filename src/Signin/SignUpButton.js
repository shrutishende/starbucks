import React from "react";
import { Link } from "react-router-dom";
import "./SignUpButton.css";

function SignUpButton() {
    return (
        <Link to="/account/create" className="signUpButton">
            Join Now
        </Link>
    );
}

export default SignUpButton;
