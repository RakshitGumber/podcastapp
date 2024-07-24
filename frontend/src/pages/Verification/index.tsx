import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../../toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { verifyAndSignup } from "../../toolkit/actions/userActions";

const Verification: React.FC = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    token: "",
    password: "",
    subscribe: true,
  });
  const dispatch = useDispatch<AppDispatch>();

  const { status, error } = useSelector((state: RootState) => state.user);

  const { token }: any = useParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(verifyAndSignup(userData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (e.target.name === "subscribe")
      setUserData({ ...userData, subscribe: !e.target.checked });
    console.log(userData);
  };

  useEffect(() => {
    setUserData({ ...userData, token });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-background px-4 py-20 rounded-lg min-h-screen xl:p-14">
        <div
          className="grid grid-col-1 w-full max-w-3xl border-solid border-4 border-secondary rounded-2xl h-full xl:max-w-none xl:gap-12
        "
        >
          <div className="bg-secondary p-8 flex items-center flex-col justify-center">
            <div className="flex flex-col gap-4 items-center max-w-[500px] text-center">
              <h2 className="text-4xl font-bold -tracking-tight">
                Create Account
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 pt-8 border-t-[1px] border-solid border-[white] max-w-[500px] w-full gap-4 flex flex-col items-center"
            >
              <div className="max-w-4/5 min-w-[300px]">
                <label htmlFor="email" className="block font-medium">
                  Confirm your Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Confirm you email"
                  required
                  className="mx-0 my-2 block rounded-md border-[1px] border-solid border-[white] bg-none px-3 py-2 text-[black] w-full h-10 placeholder:text-[darkgray] focus:border-[royalblue] focus:border-2 focus:border-solid outline-none invalid:border-b-4 invalid:border-hover"
                />
                <label htmlFor="username" className="block font-medium">
                  Enter Username
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Enter Username"
                  required
                  className="mx-0 my-2 block rounded-md border-[1px] border-solid border-[white] bg-none px-3 py-2 text-[black] w-full h-10 placeholder:text-[darkgray] focus:border-[royalblue] focus:border-2 focus:border-solid outline-none invalid:border-b-4 invalid:border-hover"
                />
                <label htmlFor="password" className="block font-medium">
                  Set Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                  className="mx-0 my-2 block rounded-md border-[1px] border-solid border-[white] bg-none px-3 py-2 text-[black] w-full h-10 placeholder:text-[darkgray] focus:border-[royalblue] focus:border-2 focus:border-solid outline-none invalid:border-b-4 invalid:border-hover"
                />
                <input
                  type="checkbox"
                  name="subscribe"
                  id="subscribe"
                  className="mr-2"
                  onChange={handleChange}
                />
                <label htmlFor="subscribe" className="inline font-medium">
                  Would you like to subscribe for latest updates
                </label>
              </div>
              <button className="align-center mt-8 bg-hover px-8 py-2 text-xl rounded-lg font-bold disabled:brightness-50">
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

export default Verification;
