import Hero from "../components/Hero";
import Services from "../components/Services";
import Tech from "../components/Tech/Tech";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Tech />
      <Footer />
    </main>
  );
}

export default Home;