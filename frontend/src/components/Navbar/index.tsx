import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between xl:px-24 xl:py-8 px-4 py-2 sm:px-6 sm:py-3 md:px-12 md:py-6">
      <h1 className="xl:text-5xl sm:text-4xl text-3xl font-heading font-bold text-primary select-none">
        <a
          onClick={() => {
            navigate("../");
          }}
          className="cursor-pointer"
        >
          Podcast
        </a>
      </h1>
      {window.location.pathname !== "/signup" && (
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="capitalize xl:text-2xl hover:bg-hover sm:text-lg text-base font-bold text-primary font-bodyText xl:px-12 xl:py-4 sm:px-10 sm:py-3 px-6 py-2 bg-buttonBackground xl:rounded-2xl rounded-xl"
        >
          Sign up
        </button>
      )}
    </nav>
  );
};

export default Navbar;
