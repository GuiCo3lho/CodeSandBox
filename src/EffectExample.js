import React, { useState, useEffect } from "react";

export default function EffectExample() {
  const [counter, setCounter] = useState(0);
  //var counter2 = 3;

  useEffect(() => {
    var elemento = document.getElementById("nelson");
    elemento.innerHTML = counter;

    return () => (document.title = "Nelsinho");
  }, [counter]);

  return (
    <div className="App">
      <h1 id="nelson">asdaasdsd</h1>

      <h1>{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Clicar</button>
      <button onClick={() => setCounter(0)}>Resetar</button>

      <button
        onClick={e => {
          //Why <button onClick={e=>{}}
          //counter2 += 2;
          //console.log(counter2);
          setCounter(n => n + 1);
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          setCounter(n => n - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
