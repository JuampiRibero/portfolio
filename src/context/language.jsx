import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [isEnglish, setEnglish] = useState(false);

  const toggleLanguage = () => {
    setEnglish(!isEnglish);
  };
  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
