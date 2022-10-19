import "./TicketCounter.scss"
import React, {useState} from "react";




const CounterFunc = () => {
  const [ticketCount, setTicketCount] = useState(0);


  const ticketPlus = () => {

    const beep = new Audio("../../assets/stop-13692.mp3");
    setTicketCount (ticketCount + 1);
    beep.play();
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