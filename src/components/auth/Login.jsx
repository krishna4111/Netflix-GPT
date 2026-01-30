import { useRef, useState } from "react";
import Header from "../header/Header";
import { signInValidation, signUpValidation } from "../../utils/validate";
import { auth } from "../../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/userSlice.js";
import { LOGIN_PAGE_BACKGROUND_IMAGE } from "../../utils/constants.js";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSingInOrSignUp = () => {
    //validate the form data.

    const message = isSignInForm
      ? signInValidation(email.current.value, password.current.value)
      : signUpValidation(
          name.current.value,
          email.current.value,
          password.current.value,
        );
    setErrorMessage(message);

    //Once the validation finished now we can do the SigIn or SignUp
    if (!message) {
      //signin / signup

      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        )
          .then((userCredentials) => {
            const user = userCredentials.user;
            return updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName }));
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        )
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(addUser(user));
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full ">
      <img
        src={LOGIN_PAGE_BACKGROUND_IMAGE}
        alt="background-img"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute border-2 border-black bg-black/80 p-10 w-full max-w-md rounded-md
        top-[55%] sm:top-[60%] md:top-[70%] lg:top-1/2
 -translate-y-1/2 mx-auto right-0 left-0"
      >
        <h1 className="text-3xl font-bold text-white">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        <div className="m-4 ml-0">
          {!isSignInForm && (
            <div className="flex flex-col gap-4 mb-4">
              <label className="text-white">Name</label>
              <input
                ref={name}
                className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
                type="text"
                placeholder="Enter Your Name"
              ></input>
            </div>
          )}
          <div className="flex flex-col gap-4 mb-4">
            <label className="text-white">Email or mobile number</label>
            <input
              ref={email}
              className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
              type="text"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <label className="text-white">password</label>
            <input
              ref={password}
              className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
              type="text"
              placeholder="Password"
            ></input>
          </div>

          <p className="text-red-600 font-semibold text-md pb-3">
            {errorMessage}
          </p>

          <div className="flex flex-col gap-4 ml-0 m-2">
            <button
              className="bg-red-600 p-2 rounded-md text-white font-bold cursor-pointer"
              onClick={handleSingInOrSignUp}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {isSignInForm && (
              <>
                <p className="text-gray-400 text-center font-semibold m-0 p-0">
                  OR
                </p>
                <button className="bg-neutral-500 p-2 rounded-md text-white font-bold cursor-pointer">
                  Use a sing-in code
                </button>
              </>
            )}
          </div>
        </div>
        {isSignInForm && (
          <p className="text-center mt-2 mb-2 text-white font-semibold underline cursor-pointer hover:text-gray-400 hover:duration-200">
            Forgot password?
          </p>
        )}

        <div className="flex items-center-safe gap-3 mb-4">
          <input
            type="checkbox"
            className="size-5 rounded-md accent-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label className="font-semibold text-white">Remember me</label>
        </div>
        <p className="text-gray-400 font-semibold">
          {isSignInForm ? "New to Netflix? " : "Already have an account"}
          <span
            className="text-white cursor-pointer hover:underline hover:decoration-2 px-2"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In here "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
