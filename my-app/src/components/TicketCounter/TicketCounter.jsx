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
      <div onClick={ticketMinus}><button>-</button></div>
      <p>{ticketCount}</p>
      <div onClick={ticketPlus}><button>+</button></div>
    </div>
  );
}

export default CounterFunc;