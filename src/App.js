import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Services from './components/Services';
import Geography from './components/Geography';
import Testimonials from './components/Testimonials';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <Geography />
      <Testimonials />
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;
