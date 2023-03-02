import Typewriter from "typewriter-effect";
import "./utils/_Base.css";
import "./utils/_App.css";

const App = () => {
  return (
    <div className="app">
      <Typewriter
        options={{
          strings: ["Carlos Beckhauser"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default App;
