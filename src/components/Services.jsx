import React from 'react'
import '../components/styles/component.css'
import logo2 from '../assets/logo2.png'
import biryani from '../assets/biryani.jpg'
import Chicken from '../assets/chicken.jpg'
import grilled from '../assets/grilled sandwich.jpg'
import panner from '../assets/panner.webp'
import pasta from '../assets/pasta.webp'
import tikka from '../assets/tikka.webp'
import fries from '../assets/fries.jpg'
import momos from '../assets/momos.jpg'

export const Services = () => {
    return (
        <div>
            <div id="container">
                <div id="image">
                    <img src={logo2} id="img" alt=''/>
                </div>
                <div id="info">
                    <div className="info-details">
                        <h1 id="head1">We Are More Than<br />Multiple Service</h1>
                        <p id="para1">This is a type of restraunt which typically serves food and drinks in <br />addition to light refreshment such as baked goods or snacks. The term<br />comes from rench meaning food</p>
                    </div>
                    <div id="banner">
                        <div class="frame">
                            <button class="btn">Online Order</button>
                            <button class="btn">Pre-Reservation</button>
                        </div>
                        <div class="frame">
                            <button class="btn">24/7 Service</button>
                            <button class="btn">Organised foodie place</button>
                        </div>
                        <div class="frame">
                            <button class="btn">Clean kitchen</button>
                            <button class="btn">Super Chefs</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 id="head2">Our Regular Menu Pack</h1>

            <div id="nav">
                <ul id="list">
                    <li class="nav_link">Special food</li>
                    <li class="nav_link">Mexican</li>
                    <li class="nav_link">Italian</li>
                    <li class="nav_link">Japanese</li>
                    <li class="nav_link">Drinks</li>
                    <li class="nav_link">Lunch</li>
                    <li class="nav_link">More itmes+</li>
                </ul>
            </div>

            <div class="gallery">
                <div class="pic">
                    <img src={pasta} class="gallery_pic"alt='' />
                    <h4 class="card-heading">Pasta</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={Chicken} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">Chicken Shawarma</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={biryani} class="gallery_pic" alt='' />
                    <h4 class="card-heading">Biryani</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={fries} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">French Fries</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>

                <div class="pic">
                    <img src={momos} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">Momos</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={panner} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">Panner Makhani</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={grilled} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">Sandwich</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
                <div class="pic">
                    <img src={tikka} class="gallery_pic" alt=''/>
                    <h4 class="card-heading">Panner Tikka</h4>
                    <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="pricing">
                        <button class="btn">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

