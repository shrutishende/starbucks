import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import SignupScreen from "./screens/SignupScreen";
import MenuScreen from "./screens/MenuScreen";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // User is signed in
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                    })
                );
            } else {
                // User is signed out
                dispatch(logout());
            }
        });
    }, [dispatch]);

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    {/* <Route path="/account/signin" element={<LoginScreen />} /> */}
                </Routes>

                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>

                <Routes>
                    <Route
                        exact
                        path="/account/signin"
                        element={<LoginScreen />}
                        {...(user ? <Navigate to="/menu" /> : <LoginScreen />)}
                    ></Route>

                    <Route
                        exact
                        path="/account/create"
                        element={<SignupScreen />}
                        {...(!user ? (
                            <Navigate to="account/signin" />
                        ) : (
                            <>
                                <Header menuPage />
                                <MenuScreen />
                            </>
                        ))}
                    ></Route>

                    <Route
                        exact
                        path="/menu"
                        element={<MenuScreen />}
                        {...(user ? <Navigate to="/menu" /> : <SignupScreen />)}
                    ></Route>
                </Routes>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Fade>
                                <Footer />
                            </Fade>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
