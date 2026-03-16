import Areas from "./components/Areas/Areas";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Tech from "./components/Tech/Tech";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Areas />
      <Contact />
      <Tech />
      <Footer />
      <WhatsAppButton />
    </>
  );

}

export default App;