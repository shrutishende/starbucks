import React from "react";
import "./LogoutButton.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/userSlice";

function LogoutButton() {
    const dispatch = useDispatch();
    const history = useNavigate();

    const logoutOfApp = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout());
                history("/");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <button className="logoutButton" onClick={logoutOfApp}>
            Log Out
        </button>
    );
}

export default LogoutButton;
