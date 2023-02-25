import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import basket from "../assets/basket.png"
import '../App.css';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Firebase/context/UserAuthContext";

export const Nav = () => {
    const [clicked, setClicked] = useState();
    const [darkMode, setdarkMode] = useState(false);
    const handleClick = () => {
        clicked ? setClicked('') : setClicked('header mobile');
    };

    // LOGOUT
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const [color, setColor] = useState();
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    // window.addEventListener('scroll', changeColor)

    // let theme_toggle = document.querySelector('.theme_toggle');
    // let theme_icon = document.querySelector('.theme_icon');
    // let theme__icon = document.querySelector('.theme__icon');
    // let theme_name = document.querySelector('.theme_name');

    // theme_icon.classNameList.toggle('active');
    // if (theme_icon.classNameList.contains('active')) {
    //     theme__icon.setAttribute('name', 'moon-outline');
    //     theme_name.innerText = 'Night';
    //     theme_toggle.classNameList.add('night');
    //     theme_icon.classNameList.remove('day');
    // } else {
    //     theme__icon.setAttribute('name', 'sunny-outline');
    //     theme_name.innerText = 'Day';
    //     theme_icon.classNameList.add('day');
    //     theme_toggle.classNameList.remove('night');
    // }


    const handleDark = () => {
        setdarkMode(item => !item);
    };

    // let Links = [
    //     { name: "About Us", link: "/" },
    //     { name: "Menu", link: "/menu" },
    //     { name: "Reviews", link: "/review" },
    //     { name: "Blog", link: "/blog" },
    //     { name: "Contact", link: "/contact" },
    // ];

    return (
        <header className={clicked || "header"}{...color || "header-color"}>
            <div className="main_logo">
                <img src='./header-logo.png' alt="bite.labs" className="logo" />
                <h2 className="logo_title">Bite. Labs</h2>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">

                <li ><Link className='navbar-link' to="/">Home</Link></li>
                    {
                        user ?
                        <li><a className="navbar-link" onClick={handleLogout} >Logout</a></li>
                        :
                        <li ><Link className='navbar-link' to="/signup">Sign up</Link></li>
                    }
                    <li><a className="navbar-link" href="#">Reviews</a></li>
                    <li><a className="navbar-link" href="#">Blog</a></li>
                    <li><a className="navbar-link" href="#">Contact</a></li>
                </ul>
                {/* <ul className="navbar-list">
                    {
                        Links.map((link) => (
                            <li key={link.name} >
                                <Link to={link.link} classNameName='navbar-link'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul> */}
            </nav>
            <div className="nav-buttons">
                <div className="basket">
                    <img src={basket} alt="basket" className="basket-logo" />
                </div>
                <button className="reserve">Reserve Table</button>
            </div>

            <div onClick={handleDark} className="container-darkmode">
                <div className={`theme_toggle ${darkMode ? "night" : "day"}`}>
                    <div className="theme_icon">
                        <ion-icon name={`${darkMode ? "moon-outline" : "sunny-outline"}`} className="theme__icon"></ion-icon>
                    </div>
                    <span className="theme_name"> {`${darkMode ? "Night" : "Day"}`} </span>
                </div>
            </div>
            <div className="mobile-navbar-btn" onClick={handleClick}>
                <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
                <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
            </div>
        </header>
    )
}
