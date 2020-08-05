import React, { useState } from "react";
import "./styles.css";
import "./EffectExample";
import Login from "./Hooks_Components";
import EffectExample from "./EffectExample";
const nelson = require("./modExports");
export default function App() {
  console.log(nelson.sum(5, 2));
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <EffectExample />}
      <Login />
    </div>
  );
}
