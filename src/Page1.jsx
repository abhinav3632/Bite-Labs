import './App.css';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Founder } from './components/Founder';
import { Mobile } from './components/Mobile';
import { Nav } from './components/Nav';
// import Reserve from './components/Reserve';
import { useGlobalContext } from './context'
import Modal from './components/Modal'
import Favourites from './components/Favourites';




export const Page1 = () =>{


    const { showModal, favorites } = useGlobalContext()

    return (
      <div className="App">
  
        {showModal && <Modal />}
        { favorites.length > 0 &&  <Favourites />}
        {/* <Nav /> */}
        <AboutUs />
        <Services />
        {/* <Reserve /> */}
        <Founder />
        <Mobile />
        <Footer />
      </div>
    );
}