import "./App.scss";
import teamData from "./data/TeamData.js";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails.jsx"




const App = () => {

  console.log(teamData);

  return (
    <>
      <main className="app">
        <section className="ticket-tracker">
        <h2>Ticket Tracker</h2>
        <div className="employee-display">
          <EmployeeDetails title="Employee" teamArr={teamData}/>
        </div>
        </section>
      </main>
    </>
  );
}

export default App;
