import "../src/styles/App.css";
import "../src/styles/EmployeePage.css";
import "../src/styles/HomePage.css";
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";

function App() {
  return (
    <div className="App">
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;
