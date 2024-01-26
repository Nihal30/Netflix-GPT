import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { addUser, removeUser } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO,Lang } from "../utils/constants";
import { toggleGptSearchView } from "../redux/slice/gptSlice";
import { addLanguage } from "../redux/slice/configSlic";
import {lang} from "../utils/languageConstant"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const Language = useSelector(store=>store.config.Language)
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // To cleanup the function
    return () => unsubscribe();
    console.log("unsubscribe", unsubscribe);
  }, []);

  const handleGptSearch = () => {
    //toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  //Language Change Function
  const handleSelectLanguage =(e)=>{
    dispatch(addLanguage(e.target.value))
   console.log('first', e.target.value) 
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-48 ">
        <img src={LOGO} alt="Logo" />
      </div>

      {user && (
        <div
          className="flex p-2 justify-center"
          style={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <select
            name=""
            id=""
            className="py-4 font-bold px-2 m-4 rounded-lg bg-zinc-700 text-red-500 text-xl hover:opacity-80"
            onChange={handleSelectLanguage}
          >
            {Lang?.map((item, index) => (
              <option key={index} value={item?.type} className="font-bold p-2">
                {item?.name}
              </option>
            ))}
          </select>
          <button
            className="text-red-500 bg-black opacity-70 p-4 rounded-lg hover:bg-opacity-60 text-xl font-bold m-2"
            onClick={handleGptSearch}
          >
            {lang[Language]?.GptSearch}
          </button>
          <div className="">
            <img src={user?.photoURL} alt="" className="w-15 h-12 m-2" />
          </div>
          <button
            onClick={hanldeSignOut}
            className="text-red-500 bg-black opacity-70 p-4 rounded-lg hover:bg-opacity-60 text-xl font-bold m-2"
            style={{ borderRadius: 15 }}
          >
            {lang[Language]?.SignOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
