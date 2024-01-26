import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidDate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErroeMessage] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  console.log("email", email);
  // console.log("password", password.current.value);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    const message = checkValidDate(email.current.value, password.current.value);
    console.log("message ", message);
    setErroeMessage(message);

    if (message) return;

    // Sign In / SignUp

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://clc.imgix.net/movies/thumbnails/babe1.jpeg?auto=compress%2Cformat&fit=crop&w=1920",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browser");
            })
            .catch((error) => {
              setErroeMessage(error.message);
              // ...
            });
          console.log("user", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroeMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      // sign in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("user", user);
          // navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroeMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="LoginBg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12  absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-700 rounded-lg"
          />
        ) : null}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-zinc-700 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-zinc-700 rounded-lg"
        />
        <p className="font-bold text-red-800 p-1 text-xl">{errorMessage}</p>
        <button
          onClick={handleFormSubmit}
          className=" p-4 my-6 w-full bg-red-600 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p>
          <div className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix ? Sign Up"
              : "Aready Registered ? Sign In"}
          </div>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
