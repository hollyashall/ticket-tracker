import React from "react";
// import team from "../../data/team";
import "./Employee.scss"



const Employee = ({ name, role }) => {

    return (
      <section className="employee">
        <h2>{name}</h2>
        <p>{role}</p>

      </section>
       
    );

}
export default Employee;