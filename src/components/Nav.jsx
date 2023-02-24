import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export const Nav = () => {
    const [clicked, setClicked] = useState();

    const handleClick = () => {
        clicked ? setClicked('') : setClicked('header mobile');
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

    window.addEventListener('scroll', changeColor)

    // let theme_toggle = document.querySelector('.theme_toggle');
    // let theme_icon = document.querySelector('.theme_icon');
    // let theme__icon = document.querySelector('.theme__icon');
    // let theme_name = document.querySelector('.theme_name');

    // theme_toggle.addEventListener('click', () => {
    //     theme_icon.classList.toggle('active');
    //     if (theme_icon.classList.contains('active')) {
    //         theme__icon.setAttribute('name', 'moon-outline');
    //         theme_name.innerText = 'Night';
    //         theme_toggle.classList.add('night');
    //         theme_icon.classList.remove('day');
    //     } else {
    //         theme__icon.setAttribute('name', 'sunny-outline');
    //         theme_name.innerText = 'Day';
    //         theme_icon.classList.add('day');
    //         theme_toggle.classList.remove('night');
    //     }
    // });


    let Links = [
        { name: "About Us", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "Reviews", link: "/review" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header class={clicked || "header"}{...color || "header-color"}>
            <div class="main_logo">
                <img src='./header-logo.png' alt="bite.labs" class="logo" />
                <h2 class="logo_title">Bite. Labs</h2>
            </div>
            <nav class="navbar">
                <ul class="navbar-list">
                    <li><a class="navbar-link" href="#">About Us</a></li>
                    <li><a class="navbar-link" href="#">Menu</a></li>
                    <li><a class="navbar-link" href="#">Reviews</a></li>
                    <li><a class="navbar-link" href="#">Blog</a></li>
                    <li><a class="navbar-link" href="#">Contact</a></li>
                </ul>
                {/* <ul class="navbar-list">
                    {
                        Links.map((link) => (
                            <li key={link.name} >
                                <Link to={link.link} className='navbar-link'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul> */}
            </nav>
            {/* <div class="nav-buttons">
            <div class="basket">
                <img src="./assets/basket.png" alt="basket" class="basket-logo" />
            </div>
            <button class="reserve">Reserve Table</button>
        </div>  */}

            <div class="container-darkmode">
                <div class="theme_toggle">
                    <div class="theme_icon">
                        <ion-icon name="sunny-outline" class="theme__icon"></ion-icon>
                    </div>
                    <span class="theme_name">Day</span>
                </div>
            </div>
            <div class="mobile-navbar-btn" onClick={handleClick}>
                <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
                <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
            </div>
        </header>
    )
}
