import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Songs from "./components/Songs";

function App() {
  return (
    <div className="flex">
      <Aside />
      {/* Right side */}
      <div className="flex-1 max-w-[1450px] mx-auto ">
        <Header />
        <Hero />
        <Filter />
        <Songs />
      </div>
    </div>
  );
}

export default App;
