import React, { useState } from "react";
import { Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../toolkit/store";
import { setEmail } from "../../toolkit/slices/userSlice";
import { signup } from "../../toolkit/actions/userActions";

const Signup: React.FC = () => {
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { email, status, error } = useSelector(
    (state: RootState) => state.user
  );

  const sendVerification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      dispatch(signup({ email }));
      console.log(
        { email } + "sent at:" + import.meta.env.VITE_APP_API_BASE_URL
      );
    }
    console.log("Form submitted with value:", email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(e.target.value)) {
      setIsValid(true);
      dispatch(setEmail(e.target.value));
      return;
    }
    return setIsValid(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-background px-4 py-20 rounded-lg min-h-screen xl:p-14">
        <div
          className="grid grid-col-1 w-full max-w-3xl border-solid border-4 border-secondary rounded-2xl h-full xl:grid-cols-2 xl:max-w-none xl:gap-12
        "
        >
          <div
            className="flex flex-col items-start justify-center gap-6 p-8 h-full
          "
          >
            <h2 className="text-4xl font-bold -tracking-tight">
              Subscribe Now!
            </h2>
            <p className="text-primary">
              Subscribe now! To get notified for upcoming updates, and get
              special offers on app release.
            </p>
          </div>
          <div className="bg-secondary p-8 flex items-center flex-col justify-center">
            <div className="flex flex-col gap-4 items-center max-w-[500px] text-center">
              <h2 className="text-4xl font-bold -tracking-tight">
                Create Account
              </h2>
            </div>
            <form
              onSubmit={sendVerification}
              className="mt-8 pt-8 border-t-[1px] border-solid border-[white] max-w-[500px] w-full gap-4 flex flex-col items-center"
            >
              <div className="max-w-4/5 min-w-[300px]">
                <label htmlFor="email" className="block font-medium">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your Fancy Email"
                  required
                  className="mx-0 my-2 block rounded-md border-[1px] border-solid border-[white] bg-none px-3 py-2 text-[black] w-full h-10 placeholder:text-[darkgray] focus:border-[royalblue] focus:border-2 focus:border-solid outline-none invalid:border-b-4 invalid:border-hover"
                />
                {!isValid && (
                  <span className="text-accent">
                    * please enter a valid email
                  </span>
                )}
              </div>
              <button
                disabled={!isValid}
                className="align-center mt-8 bg-hover px-8 py-2 text-xl rounded-lg font-bold disabled:brightness-50"
              >
                Sign In
              </button>
            </form>
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" && <p>Signup successful!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
