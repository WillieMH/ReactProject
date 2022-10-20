import "./EmployeeDetails.scss";
import CounterFunc from "../TicketCounter/TicketCounter.jsx"

const EmployeeDetails = (props) => {
  const{teamArr} = props;

  const emplInfo = teamArr.map((employeeInfo) => (

        <div className="eachCard">
        <h4>Name: {employeeInfo.name}</h4>
        <h4>Role: {employeeInfo.role}</h4>
        <CounterFunc />
        </div>

  ))

  return (

      <>{emplInfo}</>

  )
};



export default EmployeeDetails;