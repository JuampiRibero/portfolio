import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "react-scroll-to-top";
import LanguageProvider from "./context/language";

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-personal-gray">
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
        <ScrollToTop
          className="flex justify-center items-center opacity-50 !important"
          smooth
          top={500}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;
