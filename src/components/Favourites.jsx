import { useGlobalContext } from "../context"
import "./styles/fav.css"

const Favourites = () => {

    const { favorites, selectMeal, removeFromFavorites } = useGlobalContext()

    return (
        <section className='favorites' >
            <div className="favorites-content">
                <h5>Favorites</h5>
                <div className="favorites-container">
                    {favorites.map(item => {
                        const { strMeal , idMeal, strMealThumb: image } = item;
                        return (
                            <div key={idMeal} className="favorite-item" >
                                <img src={image} className="favorites-img img" onClick={() => selectMeal(strMeal , true)} />
                                <button className = "remove-btn" onClick={() => removeFromFavorites(idMeal)}  >remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Favourites