import { createContext, useState } from "react";

export const UserContext = createContext(null);
const Context = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInShow = (value) => {
    if (value){
        setShowSignIn(true);
        setShowSignUp(false)
    }
    else{
        setShowSignIn(false);
    }
  };

  const handleSignUpShow = (value) => {
    if (value){
        setShowSignUp(true)
        setShowSignIn(false);
    }
    else{
        setShowSignUp(false);
    }
  };
  


  const userInfo = {
    showSignIn,
    showSignUp,
    handleSignInShow,
    handleSignUpShow
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default Context;
