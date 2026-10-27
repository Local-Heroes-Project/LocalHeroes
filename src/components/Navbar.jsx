import { UsersRound } from "lucide-react";
import { Plus } from "lucide-react";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useListingsStore } from "../store/useListingsStore";
import { useAuthStore } from "../store/useAuthStore.js";
import "./Navbar.css";

function Navbar() {
  const darkMode = useListingsStore((state) => state.darkMode);
  const toggleDark = useListingsStore((state) => state.toggleDark);
  const signOut = useAuthStore((state) => state.logOut);

  const token = useAuthStore((state) => state.token);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="Userlogo">
          <UsersRound size={52} />
        </span>

        <h2>Local Heroes</h2>
      </div>

      <nav className="nav-left">
        <span className="User">
          <UsersRound />

          <Link to="/HeroesListingList">
            <span>Heroes </span>
          </Link>
        </span>

        <Link to="/NominationForm" className="">
          {" "}
          <Plus />
          <span>Nominate </span>
        </Link>

        <Link to="/AboutUs" className="">
          {" "}
          AboutUs
        </Link>
      </nav>

      <div>
        {!token && (
          <div className="Buttons">
            <div>
              <button className="sign-in">
                <Link to="/login" className="">
                  <LogIn />
                  Sign In
                </Link>
              </button>
            </div>

            <div>
              <button className="sign-up">
                <Link to="/signup" className="">
                  SignUp
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {token && (
          <div>
            <button className="sign-Out" onClick={signOut}>
              <Link to="/PublicP">SignOut</Link>
            </button>
          </div>
        )}
      </div>

      <button className="toggle" onClick={toggleDark}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Navbar;
