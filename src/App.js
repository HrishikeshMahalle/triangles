import "./styles.css";
import Make from "./components/Make";
import Areas from "./components/Areas";
import Hypotenuse from "./components/Hypotenuse";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>All About Triangles</h1>
        <ul>
          <li>
            <a href="#make">Angles</a>
          </li>
          <li>
            <a href="#areas">Area</a>
          </li>
          <li>
            <a href="#hypotenuse">Hypotenuse</a>
          </li>
          <li>
            <a href="#quiz">Quiz</a>
          </li>
        </ul>
      </nav>
      <Make />
      <Areas />
      <Hypotenuse />
      <Quiz />
    </div>
  );
};

export default App;
