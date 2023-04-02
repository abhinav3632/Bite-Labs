import React from "react";
import { useGlobalContext } from "../context"
import load from './../loading/loading2.mp4'


export default function MealsContainer() {

    const { meals, loading, selectMeal, addToFavorites, removeFromFavorites
        , fetchMexican, fetchJapenese, fetchItalian,
        fetchCanadian, fetchIndian, fetchSeaFood } = useGlobalContext()

    if (loading) {
        return (
            <section className="loading-section" >
                <video autoPlay loop src={load} />
            </section>
        )
    }

    const main = meals.map(singleMeal => {
        const {idMeal, strMeal: title, strMealThumb: image } = singleMeal

        return (

        <div class="pic">
            <img src={image} class="gallery_pic" onClick={() => selectMeal(title)} />
            <h4 class="center">{title}</h4>
            <p class="center"></p>
            <div class="pricing">
                <h5>$35</h5>
                <button onClick={() => addToFavorites(idMeal)} class="btnn">Add to Fav..</button>
            </div>
        </div>
        )
    })

    return (
        <div class="gallery">
            {main}
        </div>
    )
}