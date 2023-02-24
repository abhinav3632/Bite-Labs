import './App.css';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Founder } from './components/Founder';
import { Mobile } from './components/Mobile';
import { Nav } from './components/Nav';
import Foodslider from './components/Foodslider';

// import Slider from 'react-slick';
// import { Popdishes } from './components/Popdishes';
// import Reserve from './components/Reserve';




function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <Services />
      {/* <Reserve /> */}
      <Founder />
      <Foodslider />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
