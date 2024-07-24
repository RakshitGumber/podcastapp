import { Hero, Navbar } from "../components";

const Home: React.FC = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
