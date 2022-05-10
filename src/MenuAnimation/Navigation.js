import * as React from "react";
import { motion } from "framer-motion";
import MenuLink from "../MenuLink";
import FindAStore from "../FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import SignInButton from "../Signin/SignInButton";
import SignUpButton from "../Signin/SignUpButton";
import LogoutButton from "../Signin/LogoutButton";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const Navigation = ({ toggle }) => {
    const [showMenuCategory, setShowMenuCategory] = React.useState(false);
    const user = useSelector(selectUser);
    return (
        <>
            {showMenuCategory ? (
                <motion.ul variants={variants}>
                    <MenuLink
                        link="Menu"
                        goBackIcon
                        onClick={() => {
                            setShowMenuCategory(false);
                        }}
                        width="60%"
                    />
                    <MenuLink
                        link="All Products"
                        path="/menu"
                        onClick={() => {
                            setShowMenuCategory(false);
                            toggle();
                        }}
                    />
                    <MenuLink
                        link="Featured"
                        path="/menu/featured"
                        onClick={() => {
                            setShowMenuCategory(false);
                            toggle();
                        }}
                    />
                    <MenuLink
                        link="Previous Orders"
                        onClick={() => {
                            setShowMenuCategory(false);
                            toggle();
                        }}
                    />
                    <MenuLink
                        link="Favourite Products"
                        onClick={() => {
                            setShowMenuCategory(false);
                            toggle();
                        }}
                    />
                </motion.ul>
            ) : (
                <motion.ul variants={variants}>
                    <MenuLink
                        link="Menu"
                        icon
                        onClick={() => {
                            setShowMenuCategory(true);
                        }}
                    />

                    <MenuLink link="Rewards" />

                    <MenuLink link="Gift Cards" />

                    <motion.hr variants={variants2} />
                    <motion.div
                        className="navigation__buttons"
                        variants={variants2}
                    >
                        {!user ? (
                            <>
                                <SignInButton />

                                <SignUpButton />
                            </>
                        ) : (
                            <LogoutButton />
                        )}
                    </motion.div>

                    <motion.div variants={variants2}>
                        <FindAStore />
                    </motion.div>
                </motion.ul>
            )}
        </>
    );
};
