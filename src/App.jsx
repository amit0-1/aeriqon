import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import Courses from "./components/Courses.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <HomeCards />
      <About />
      <Footer />
      <ScrollToTop />

    </>
  );
}
