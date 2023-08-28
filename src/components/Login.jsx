import React, { useState } from "react";

const Login = () => {
  const [control, setControl] = useState(false);
  return (
    <div>
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
            placeholder="*******"
            title="Password must me 6 character with one Uppercase, one number and one special character(!@#$&*)"
            className="input input-bordered w-full max-w-xs"
            required
          />
        ) : (
          <input
            type="Password"
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

      <button className="btn btn-active">Register</button>

      <div className="mt-5 sign-in-btn">
        <button className="btn btn-active btn-accent">
          Log in with Google
        </button>
        <button className="btn btn-active btn-neutral">
          Log in with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
