

import "./App.scss";
import Employee from "./components/EmployeeTile/Employee";
import team from "./data/team";
import "./components/Tickets/Tickets.scss";



const App = () => {

const employeeTiles = team.map(employee => {
  return <Employee key={employee.id} name={employee.name} role={employee.role} />
})

  return (
    <>
    <div className="app">
        <div className="Tickets">{employeeTiles}</div>
        
    </div>
    </>
  );
};

export default App;