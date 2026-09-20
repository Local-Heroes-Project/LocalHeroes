import { UsersRound } from "lucide-react"; 
import { Plus } from "lucide-react"
import { LogIn } from "lucide-react"
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
      
        
        <UsersRound size={52} color="#a2105e" />
        
           <h2>Local Heroes</h2>
      
      </div>

      <nav className="nav-left">
        <a href="#" className="active">
           < UsersRound  />
         
         <span>Heroes</span>
        </a>

        <a href="#">
         <Plus />
          <span>Nominate </span>
        </a>

        <a href="/about">  <span>AboutUs</span> </a>
      </nav>

      
      <button className="sign-in"><LogIn color="#dfd8d8" />Sign In</button>
    </header>
  );
}

export default Navbar;

