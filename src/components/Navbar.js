import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [showNav, handleShowNav] = useState(false);

  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

  //runs once when component is mounted
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar); //attach an EventListener which runs transitionNavbar every time user scrolls
    return () => window.removeEventListener("scroll", transitionNavbar); //return function is run when component unmounts, cleaning up the EventListener
  }, []);

  return (
    <div className={`nav ${showNav && "nav_black"}`}>
      <div className='nav_contents flex items-center'>
        <Link to='/'>
          <img
            className='nav_logo mr-auto'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt=''
          />
        </Link>
        {user?.email ? (
          <div className='nav_contents flex items-center ml-auto'>
            <Link to='/account'>
              <button className='text-white text-s pr-4'>Account</button>
            </Link>
            <button
              onClick={handleLogout}
              className='bg-red-600 px-2 py-1 rounded cursor-pointer text-white text-s mr-4'
            >
              Logout
            </button>
            <Link to='/profile'>
              <img
                className='nav_avatar'
                src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                alt=''
              />
            </Link>
          </div>
        ) : (
          <div className='nav_contents flex items-center ml-auto'>
            <Link to='/login'>
              <button className='text-white text-s pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 px-2 py-1 rounded cursor-pointer text-white text-s mr-4'>
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
