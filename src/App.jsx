import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import { useListingsStore } from "./store/useListingsStore.js";
import { useAuthStore } from "./store/useAuthStore.js";
import SignUp from "./pages/SignUpPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import NominationForm from "./pages/NominationForm1.jsx"
import PublicRoute from "./components/PublicRoute.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import HeroesListingList from "./components/HeroesListingList.jsx";







function App() {

  const loadHeroes = useListingsStore((state) => state.loadHeroes)
  const fetchMe = useAuthStore((state) => state.fetchMe)
  const darkMode = useListingsStore((state) => state.darkMode)

  useEffect(() => {
    loadHeroes()
  }, [loadHeroes]);

  useEffect(() => {
    fetchMe();
  },[fetchMe])
  

  return (

    
    <div className={darkMode ? " dark" : "app"}>

      

      <Navbar />
     

     

      <Routes>

      <Route path="AboutUs" element={<AboutUs />} /> 
      <Route path="/HeroesListingList" element={<HeroesListingList />} /> 


      <Route element={<PublicRoute/>}>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        
            
      </Route>


      
     
      




      <Route element={<PrivateRoute/>}>
        <Route path="/NominationForm" element={<NominationForm />} /> 
        <Route path="/ProfilePage" element={<ProfilePage />} /> 

      </Route>
      
      





      </Routes>



      <Footer />

 

    </div>
  )
}

export default App
