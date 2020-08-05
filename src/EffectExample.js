import React, { useState, useEffect } from "react";

export default function EffectExample() {
  const [counter, setCounter] = useState(0);

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
    </div>
  );
}
