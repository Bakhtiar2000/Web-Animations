import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";
import Animation4 from "./pages/Animation4";
import "./App.css";
import Animation1 from "./pages/Animation1";
import Animation5 from "./pages/Animation5";
import Animation6 from "./pages/Animation6";
import Animation7 from "./pages/Animation7";
import Animation8 from "./pages/Animation8";
import Animation9 from "./pages/Animation9";
import Animation10 from "./pages/Animation10";
import Bounce from "./pages/Bounce";
import Stagger from "./pages/Stagger";
import Card from "./pages/Card";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 pt-52">
        <Animation9 /> {/* The scrollbar. */}
        <h2 className="-mt-20 text-7xl font-semibold text-green-500 border-4 border-red-500 p-5">
          CSS ANIMATION
        </h2>
        <Bounce />
        <Stagger />
        <Card />
        <h2 className="mt-20 mb-10 text-6xl font-semibold text-green-500 border-4 border-red-500 p-5">
          FRAMER-MOTION ANIMATION
        </h2>
        <Animation1 />
        <Animation2 />
        <Animation3 />
        <Animation4 />
        <Animation5 />
        <Animation6 />
        <Animation7 />
        <Animation8 />
        <Animation10 />
      </div>
      <div></div>
    </>
  );
}

export default App;
