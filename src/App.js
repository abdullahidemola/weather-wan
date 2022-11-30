import React, { useState } from "react";
import "./App.css";
import Data from "./components/data";
import { CloudRain, Sun, Snowflake } from "phosphor-react";
const App = () => {
  const [valid, setValid] = useState(true);

  const fecthDataHandler = () => {
    fetch("https://b77b-154-68-225-162.eu.ngrok.io/api/nodes/?name=Node1").then(
      (response) => console.log(response)
    );
  };

  const onclickHandler = () => {
    fecthDataHandler();
    console.log("button clicked");
  };
  return (
    <>
      <div className="body">
        <span className="sun-icon">
          <Sun size={65} />
        </span>
        <span className="snow-icon">
          <Snowflake size={65} />
        </span>
        <div className="container">
          <div className="heading">
            <span className="icon">
              <CloudRain size={55} />
            </span>
            Weather WAN
          </div>
          <div className="box">
            <button className="btn" onClick={onclickHandler}>
              Click here to show data
            </button>
            {valid && <Data />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
