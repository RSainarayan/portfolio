import { useState } from "react";
import Header from "./components/Header";
import Services from './components/Services'
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Profile/>
        <Services/>
        <Portfolio/>
        <Education/>
        <Contact/>
        <Profile/>
        <Footer/>

        

      </main>
        
    </div>
  )
}

export default App;
