
import { useContext } from "react";
import SignIn from "../signIn/SignIn";
import { UserContext } from "../../context/Context";
import SignUp from "../signUp/SignUp";
import Profile from "./Profile";


const NavigationBar = () => {

  const {handleSignUpShow, user}= useContext(UserContext)
  console.log(user)


  return (
    <div className="container d-none bg-white px-5 my-1  d-md-flex flex-row align-items-center justify-content-between text-white">
      <img className="h-75" src="whole.png" alt="logo" />
      <div className="position-relative">
      <input
        className="bg-black twelve-px bg-opacity-10 focus-ring-danger  px-4 text-center py-1  m-2 border-0 rounded-pill   "
        type="text"
        placeholder="Search Favorite Groupe"
        
      />
     
      </div>
      {user ? <Profile /> : <div className="text-black fourteen-px">Create account. <button className="btn text-primary fw-medium" onClick={()=>handleSignUpShow(true)}>It’s free!</button></div>}

    <SignIn />
    <SignUp />
    
    </div>

    
  );
};

export default NavigationBar;
