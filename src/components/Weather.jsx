import React from "react";

function Weather(props) {
  const { temp, humidity } = props;
  console.log(humidity);
  return (
    <div className="container text-center">
      {/* Day 1 */}
      <div className="row">
        <div className="col">
          <h3>Current</h3>
          <p>High: {Math.round(temp.high)}℉</p>
          <p>Low: {Math.round(temp.low)}℉</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
      {/* Day 2  */}
      <div className="row">
        <div className="col">
          <h3>Tomorrow</h3>
          <p>Temperature High</p>
          <p>Temperature Low</p>
          <p>Humidity</p>
        </div>
      </div>
      {/* day 3 */}
      <div className="row">
        <div className="col">
          <h3>Today</h3>
          <p>Temperature High</p>
          <p>Temperature Low</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
