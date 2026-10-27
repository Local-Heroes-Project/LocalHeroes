import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Users } from "lucide-react";
import "./SignUpPage.css"

function SignUp() {

  let navigate = useNavigate();
  const Signup = useAuthStore((state) => state.Signup);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createdId, setCreatedId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const created = await Signup(name, email, password);
    if (created) setCreatedId(created.id);
    navigate("/ProfilePage")
    
  };


  return (
    <div className='SignUP-page'>
      <div className="Back_btn" href="">
        {" "}
        <span className="LoginArrow">
          <ArrowLeft />
        </span>{" "}
        <Link to="/HeroesListingList">Back to Heroes{" "}</Link>
        
      </div>

      <form className="SignUpForm" onSubmit={onSubmit}>
        <label className="LoginCard">
          <span className="UserLogo">
            <Users size={100} color="#f7f7f7" />
          </span>

          
          <p className="line">
            SignUp Here{" "}
            <span className="Appreciation">Fill the Form</span>
          </p>
        </label >

        

        <label className="SingUP-Name">
        <p>Name</p>
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        </label>
        

        <label className="SingUP-Email">
          <p>Email </p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="SignUp-Password">
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {createdId && (
          <p className="SignUp-ok">
            ✅ Account created (id {createdId}). Wellcome to your New Account.
            Login with your Account to nominate your Hero.
          </p>
        )}

        <button className="SignUp-btn">
          {status === "loading" ? "Logging in…" : "SignUP"} 
        </button>
        <div className="SignUP-Bottom">
          <p>Do have an account?</p>
          <Link className="Login-btn" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
