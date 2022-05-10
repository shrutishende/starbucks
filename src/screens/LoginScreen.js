import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useDispatch } from "react-redux";
import FooterSecondary from "../Footer/FooterSecondary";
import FormSubmit from "../Signin/FormSubmit";
import { auth } from "../firebase";
import { login } from "../features/userSlice";

function LoginScreen() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = ({ email, password }) => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                    })
                );
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="loginScreen">
            <div className="loginScreen__left">
                <Link to="/">
                    <img
                        src="https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png"
                        alt=""
                    />
                </Link>
                <div className="loginScreen__info">
                    <h1>Sign in or create an account 🌟</h1>
                </div>
            </div>

            <div className="loginScreen__right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginScreen__inputContainer">
                        <TextField
                            name="email"
                            label="Email Address"
                            type="email"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="loginScreen__input"
                            inputRef={register({ required: true })}
                        />
                        {errors.email && (
                            <div className="loginScreen__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter an email.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <div className="loginScreen__inputContainer">
                        <TextField
                            name="password"
                            label="Password"
                            type={passwordShown ? "text" : "password"}
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="loginScreen__input"
                            inputRef={register({ required: true })}
                        />
                        {passwordShown ? (
                            <VisibilityOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        ) : (
                            <VisibilityOffOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        )}
                        {errors.password && (
                            <div className="loginScreen__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter an password.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <div className="loginScreen__resetLinks">
                        <Link to="">Forgot your username?</Link>
                        <Link to="">Forgot your password?</Link>
                    </div>
                    <FormSubmit name="Sign in" type="submit" />
                </form>
                <div className="loginScreen__rewards">
                    <h4>JOIN STARBUCKS® REWARDS</h4>
                </div>
                <div className="loginScreen__joinNow">
                    <div className="loginScreen__joinNowContainer">
                        <Link to="/account/create">Join now</Link>
                        <h4>Create an account and bring on the Rewards!</h4>
                        <p>
                            Join Starbucks® Rewards to earn free food and
                            drinks, get free refills, pay and order with your
                            phone, and more.
                        </p>
                    </div>
                </div>
                <FooterSecondary paddingLeft={30} flexDirection="column" />
            </div>
        </div>
    );
}

export default LoginScreen;
