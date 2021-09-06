import './App.scss';
import Body from './components/Body';
import Provider from './components/context/JungleProvider';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Sector from './components/Sector';

function App() {
  return (
    <Provider>
      <div>
        <Hero />
        <Sector />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
