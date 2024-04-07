import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return (
    <div className="min-h-screen bg-personal-gray">
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <ScrollToTop className="flex justify-center items-center !important" smooth top={500} />
      <Footer />
    </div>
  );
};

export default App;
