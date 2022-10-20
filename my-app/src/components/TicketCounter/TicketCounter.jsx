import "./TicketCounter.scss"
import React, {useState} from "react";




const CounterFunc = () => {
  const [ticketCount, setTicketCount] = useState(0);


  const ticketPlus = () => {
    setTicketCount (ticketCount + 1);
  };

  const ticketMinus = () => {
    if (ticketCount === 0) {
      setTicketCount(0)
    } else setTicketCount (ticketCount - 1);
  };

  return (
    <div className="counter">

      <div className="heading">
        <h3>COUNTER</h3>
      </div>

      <div className="countDisplay">
        <p>{ticketCount}</p>
      </div>

      <div className="btnDisplay">
        <div onClick={ticketMinus}><button>-</button></div>
        <div onClick={ticketPlus}><button>+</button></div>
      </div>

    </div>
  );
}

export default CounterFunc;