const NavigationBar = () => {
  const user = false;
  return (
    <div className="container d-none bg-white px-5 my-1  d-md-flex flex-row align-items-center justify-content-between text-white">
      <img className="h-75" src="/src/assets/whole.png" alt="logo" />
      <div className="position-relative">
      <input
        className="bg-black twelve-px bg-opacity-10 focus-ring-danger  px-4 text-center py-1  m-2 border-0 rounded-pill   "
        type="text"
        placeholder="Search Favorite Groupe"
        
      />
     
      </div>
      {user ? <div className="text-black">profile</div> : <div className="text-black fourteen-px">Create account. <a href="#">It’s free!</a></div>}
    </div>
  );
};

export default NavigationBar;
