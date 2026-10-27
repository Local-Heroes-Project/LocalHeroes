import { ArrowLeft } from "lucide-react";
import { Users } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import "./LoginPage.css";
import { email } from "zod";

function Login() {
  const signIn = useAuthStore((state) => state.LogIn);
  const status = useAuthStore((state) => state.status);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await signIn(email, password);
    if (ok) navigate("/ProfilePage");
  };

  return (
    <div className="Login-page">
      <div className="Back_btn" href="">
        {" "}
        <span className="LoginArrow">
          <ArrowLeft />
        </span>{" "}
        <Link to="/HeroesListingList">Back to Heroes </Link>
      </div>

      <form className="LoginForm" onSubmit={onSubmit}>
        <label className="LoginCard">
          <span className="UserLogo">
            <Users size={100} color="#f7f7f7" />
          </span>

          <h2>Welcome Back</h2>
          <p className="line">
            Sign in to thank heroes and share your{" "}
            <span className="Appreciation">appreciation</span>
          </p>
        </label>

        <label className="LoginEmail">
          <p>Email Address</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="Password">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {error && <p className="Login-error">{error}</p>}

        <button className="SignIn-btn">
          {status === "loading" ? "Logging in…" : "Signin"}
        </button>
        <div className="LoginBottom">
          <p>Don't have an account?</p>
          <Link className="Signup-btn" to="/signup">
            SignUP
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
