import React, { useContext, useState } from "react";
import { UserContext } from "../provider/AuthProviders";

const Login = () => {
  const [control, setControl] = useState(false);
  const { logIn, logInWithGoogle, logInWithGithub } = useContext(UserContext);

  const handleLogIn = (event) => {
    event.preventDefault();

    // get data
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Log in with google
  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(er);
      });
  };

  // login with github
  const handleGithub = () => {
    logInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <form onSubmit={handleLogIn}>
      <h1 className="text-2xl mt-5 mb-24 font-bold">Please Log in!!!</h1>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="harry-potter@hogwarts.com"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        {control ? (
          <input
            type="text"
            name="password"
            placeholder="*******"
            title="Password must me 6 character with one Uppercase, one number and one special character(!@#$&*)"
            className="input input-bordered w-full max-w-xs"
            required
          />
        ) : (
          <input
            type="Password"
            name="password"
            placeholder="*******"
            title="Password must me 6 character with one Uppercase, one number and one special character(!@#$&*)"
            className="input input-bordered w-full max-w-xs"
            required
          />
        )}
      </div>

      <p className="link link-hover mt-3" onClick={() => setControl(!control)}>
        {control ? <span>Hide Password</span> : <span>Show Password</span>}
      </p>

      <p className="mt-3 text-red-600"></p>

      <button className="btn btn-active">Log in</button>

      <div className="mt-5 sign-in-btn">
        <button
          className="btn btn-active btn-accent"
          onClick={handleGoogleLogIn}
        >
          Log in with Google
        </button>
        <button className="btn btn-active btn-neutral" onClick={handleGithub}>
          Log in with Github
        </button>
      </div>
    </form>
  );
};

export default Login;
