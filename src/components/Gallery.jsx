import React from "react";
import { useGlobalContext } from "../context"
import Search from "./Search";
import '../components/styles/component.css'

import MealsContainer from './MealsContainer'


export const Gallery = () => {


    const { meals, loading, selectMeal, addToFavorites, removeFromFavorites
        , fetchMexican, fetchJapenese, fetchItalian,
        fetchCanadian, fetchIndian, fetchSeaFood } = useGlobalContext()



    // if (loading) {
    //     return (
    //         <section className="section" >
    //             <div class="lds-dual-ring"></div>
    //         </section>
    //     )
    // }


    // if (meals.length < 1) {
    //     return (
    //         <section className="section" >
    //             <h4>No Meals Matched Your Search Term. Please Try Again. </h4>
    //         </section>

    //     )
    // }

    // const dataa = [{ "strMeal": "BeaverTails", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ryppsv1511815505.jpg", "idMeal": "52928" }, { "strMeal": "Breakfast Potatoes", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/1550441882.jpg", "idMeal": "52965" }, { "strMeal": "Canadian Butter Tarts", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wpputp1511812960.jpg", "idMeal": "52923" }, { "strMeal": "Montreal Smoked Meat", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uttupv1511815050.jpg", "idMeal": "52927" }, { "strMeal": "Nanaimo Bars", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/vwuprt1511813703.jpg", "idMeal": "52924" }, { "strMeal": "Pate Chinois", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/yyrrxr1511816289.jpg", "idMeal": "52930" }, { "strMeal": "Pouding chomeur", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/yqqqwu1511816912.jpg", "idMeal": "52932" }, { "strMeal": "Poutine", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uuyrrx1487327597.jpg", "idMeal": "52804" }, { "strMeal": "Rappie Pie", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ruwpww1511817242.jpg", "idMeal": "52933" }, { "strMeal": "Split Pea Soup", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/xxtsvx1511814083.jpg", "idMeal": "52925" }, { "strMeal": "Sugar Pie", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/yrstur1511816601.jpg", "idMeal": "52931" }, { "strMeal": "Timbits", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/txsupu1511815755.jpg", "idMeal": "52929" }, { "strMeal": "Tourtiere", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ytpstt1511814614.jpg", "idMeal": "52926" }]


    // const main = meals.map(singleMeal => {
    //     const { idMeal, strMeal: title, strMealThumb: image } = singleMeal

    //     return (
    //         <div class="pic">
    //             <img src={image} class="gallery_pic" onClick={() => selectMeal(idMeal)} />
    //             <h4 class="card-heading">{title}</h4>
    //             <div class="pricing">
    //                 <button onClick={() => addToFavorites(idMeal)} class="btnn">Add to Fav..</button>
    //             </div>
    //         </div>
    //     )
    // })



    return (
        <>
            <h1 id="head2">Our Regular Menu Pack</h1>

            <div id="nav">
                <ul id="list">
                    <li onClick={fetchSeaFood} class="nav_link">All Dishes</li>
                    <li onClick={fetchMexican} class="nav_link">Mexican</li>
                    <li onClick={fetchItalian} class="nav_link">Italian</li>
                    <li onClick={fetchJapenese} class="nav_link">Japanese</li>
                    <li onClick={fetchCanadian} class="nav_link">Canadian</li>
                    <li onClick={fetchIndian} class="nav_link">Indian</li>
                    <li class="nav_link">More itmes+</li>
                </ul>
            </div>

            <Search />


            {/* {main} */}
            <MealsContainer />


        </>
    )
}