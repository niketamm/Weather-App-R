import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const App = (defaults) => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default App;