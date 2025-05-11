import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("red"); 
  const [active, setActive] = useState(false); 

  const changeColor = (newColor) => {
    setColor(newColor); 
  };

  useEffect (() => {
    if (active) {
      const interval = setInterval (() => {
        if (color === "red") {
          setColor("yellow")
        } else if (color === "yellow") {
          setColor("green")
        } else if (color === "green") {
          setColor("red")
        }
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [active, color]

  )
  return (
    <main>
      <div className='pole-box'></div>
      <div className="light-box">
        <div 
          className={`red ${color === "red" ? "light-on-red" : ""}`} 
          onClick={() => changeColor("red")}
        ></div>
        <div 
          className={`yellow ${color === "yellow" ? "light-on-yellow" : ""}`} 
          onClick={() => changeColor("yellow")}
        ></div>
        <div 
          className={`green ${color === "green" ? "light-on-green" : ""}`} 
          onClick={() => changeColor("green")}
        ></div>
      </div>
      <div className='bottom-box'>
        <button onClick={() => setActive(!active) } className="btn btn-info">Activar Semaforo</button>
      </div>
      
    </main>
  );
}

export default TrafficLight;
