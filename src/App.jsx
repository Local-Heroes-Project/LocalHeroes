import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import React from "react";


function App() {
  return (
   <div className="App">
       <Navbar />
       <HeroSection />
        <SearchBar />
         <Footer />
         <AboutUs/>
   </div>
      
      
      
  
  );
}

export default App;