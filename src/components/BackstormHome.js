import Hero from './Hero';
import CAR from './CAR';
import Activite from './Activite';
import Youtube from './Youtube';
import Actualite from './Actualite';
import FAQ from './FAQ';
import Footer from './Footer';

const BackstormHome = () => {
  
  return (
    <div className="bg-whitesmoke text-xl font-roboto">
      <Hero />
      <CAR />
      <Activite />
      <Youtube />
      <Actualite />
      <FAQ />
      <Footer />
    </div>
  );
};

export default BackstormHome;
