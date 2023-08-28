import React, { useContext, useState } from "react";
import { UserContext } from "../provider/AuthProviders";

const Register = () => {
  const [control, setControl] = useState(false);
  const { signUp, logInWithGoogle, logInWithGithub } = useContext(UserContext);

  // register with email and password
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // Register with Google
  const handleGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Register with github
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
    <div>
      <form onSubmit={handleRegister}>
        <h1 className="text-2xl my-5 font-bold">Registration First!!!!</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Harry Potter"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

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
              type="password"
              name="password"
              placeholder="*******"
              title="Password must me 6 character with one Uppercase, one number and one special character(!@#$&*)"
              className="input input-bordered w-full max-w-xs"
              required
            />
          )}
        </div>

        <p
          className="link link-hover mt-3"
          onClick={() => setControl(!control)}
        >
          {control ? <span>Hide Password</span> : <span>Show Password</span>}
        </p>

        <p className="mt-3 text-red-600"></p>

        <button className="btn btn-active">Register</button>
      </form>

      <div className="mt-5 sign-in-btn">
        <button className="btn btn-active btn-accent" onClick={handleGoogle}>
          Register with Google
        </button>
        <button className="btn btn-active btn-neutral" onClick={handleGithub}>
          Register with Github
        </button>
      </div>
    </div>
  );
};

export default Register;
