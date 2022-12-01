import "./App.css";
import { useState } from "react";
import AppChart from "./components/Chart";
import { CloudRain, Sun, Snowflake } from "phosphor-react";
import data from "./data";

const App = () => {
  const fecthDataHandler = () => {
    fetch("https://b77b-154-68-225-162.eu.ngrok.io/api/nodes/?name=Node1").then(
      response => console.log(response)
    );
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
              <CloudRain size={42} />
            </span>
            Weather WAN
          </div>

          <div className="charts-container">
            <AppChart data={data?.pressure} chartType={"Pressure"} />
            <AppChart data={data?.temperature} chartType={"Temperature"} />
            <AppChart
              data={data?.relativeHumidity}
              chartType={"Relative Humidity"}
            />
            <AppChart
              data={data?.atmoshphericPressure}
              chartType={"Atmospheric Pressure"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
