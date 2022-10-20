import "./App.scss";
import teamData from "./data/TeamData.js";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails.jsx"




const App = () => {

  console.log(teamData);

  return (
    <main>
      <div className="app">
        <section className="ticket-tracker">
        <h1>GOLDEN TICKET TRACKER</h1>
        <div className="employee-display">
          <EmployeeDetails title="Employee" teamArr={teamData}/>
        </div>
        </section>
      </div>
    </main>
  );
}

export default App;
