import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex">
      <Aside />
      {/* Right side */}
      <div className="flex-1 max-w-[1536px] mx-auto border border-red-600">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;

// echo "# Musicfy" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/itsmecedy/Musicfy.git
// git push -u origin main
// …or push an existing repository from the command line
// git remote add origin https://github.com/itsmecedy/Musicfy.git
// git branch -M main
// git push -u origin main
