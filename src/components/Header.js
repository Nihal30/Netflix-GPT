import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { addUser, removeUser } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector(store=>store.user)
// console.log('user', user)


  const hanldeSignOut = () => {
  
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser())
        // navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Auth Change Functio
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browser")
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
        
      } 
    });
   
    // To cleanup the function
    return () => unsubscribe()
    console.log('unsubscribe', unsubscribe)

  },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-48 ">
        <img
          src={LOGO}
          alt="Logo"
        />
      </div>

     { user && <div
        className="flex p-2 justify-center"
        style={{
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="">
          <img
            src={user?.photoURL}
            alt=""
            className="w-15 h-12"
          />
        </div>
        <button
          onClick={hanldeSignOut}
          className=" text-rose-500  bg-black p-3 "
          style={{ borderRadius: 15 }}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
