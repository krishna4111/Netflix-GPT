import { useState } from "react";
import Header from "../header/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen w-full ">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
        alt="background-img"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Header />

      <form
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
                className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
                type="text"
                placeholder="Enter Your Name"
              ></input>
            </div>
          )}
          <div className="flex flex-col gap-4 mb-4">
            <label className="text-white">Email or mobile number</label>
            <input
              className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
              type="text"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <label className="text-white">password</label>
            <input
              className="border p-4 rounded-md text-white focus:scale-105 focus:ring-2"
              type="text"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex flex-col gap-4 ml-0 m-2">
            <button className="bg-red-600 p-2 rounded-md text-white font-bold cursor-pointer">
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
