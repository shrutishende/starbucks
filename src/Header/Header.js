import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import FindAStore from "../FindAStore";
import { Example } from "../MenuAnimation/Example";
import SignInButton from "../Signin/SignInButton";
import SignUpButton from "../Signin/SignUpButton";
import LogoutButton from "../Signin/LogoutButton";
import "./Header.css";

function Header({ menuPage }) {
    const user = useSelector(selectUser);
    return (
        <div className={`header ${menuPage && "header__menuPage"}`}>
            <div className="header__left">
                <Link className="header__logo" to="/">
                    <img
                        src="https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png"
                        alt=""
                    />
                </Link>

                <Link to="/menu" className="header__menu">
                    Menu
                </Link>

                <Link to="" className="header__menu">
                    Rewards
                </Link>

                <Link to="" className="header__menu">
                    Gift Cards
                </Link>
            </div>

            <div className="header__right">
                <Example />
                <FindAStore />

                {!user ? (
                    <>
                        <SignInButton />

                        <SignUpButton />
                    </>
                ) : (
                    <div className="header__logout">
                        {menuPage ? (
                            <LogoutButton />
                        ) : (
                            <Link to="menu">Order Now</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
