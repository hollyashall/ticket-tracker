import React from "react";
// import team from "../../data/team";
import "./Employee.scss"
import { useState } from "react";


const Employee = ({ name, role}) => {

  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter => Math.max(counter - 1, 0));
  }

  const handleIncrement = () => {
    setCounter(counter +1);
  }

    return (
      <section className="employee">
        <h2 className="employee__title">{name}</h2>
        <p className="employee__role">{role}</p>
        <p>Counter</p>

        <button onClick={handleDecrement}
            id={Employee.id}
            
            className="employee__button-minus"
          >
            -
          </button>

          <div className="employee__button-counter">
            <p>{counter}  </p>
          </div>
          <button onClick={handleIncrement}
            id={Employee.id}
           
            className="employee__button-add"
          >
            +
          </button>

      </section>
       
    );

}
export default Employee;