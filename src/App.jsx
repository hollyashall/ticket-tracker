

import "./App.scss";
import Employee from "./components/EmployeeTile/Employee";
import team from "./data/team";




const App = () => {

const employeeTiles = team.map(employee => {
  return <Employee key={employee.id} name={employee.name} role={employee.role} />
})

  return (
    <>
    <div className="app">
      
        <Employee title="Tickets"  />
        <div>{employeeTiles}</div>
        
    </div>
    </>
  );
};

export default App;