import React from "react";

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
