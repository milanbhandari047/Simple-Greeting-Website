import React from "react";
import "./App.css";

const App = () => {
  let curDate = new Date();

  curDate = curDate.getHours();

  let greeting = "";

  let quotes = "";

  const cssStyle = {};

  if (curDate >= 4 && curDate < 12) {
    greeting = "Good Morning";
    quotes =
      "Each morning we are born again. What we do today matters most. -Buddha";

    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 18) {
    greeting = "Good Afternoon";
    quotes =
      "May your afternoon be as bright and beautiful as the sunlight that fills it, and may it bring you peace and joy. -Unknown";
    cssStyle.color = "blue";
  } else if (curDate >= 18 && curDate < 21) {
    greeting = "Good Evening";
    quotes =
      "Evening is a time of quiet reflection. It is a time to look back on the day and to prepare for tomorrow. -Unknown";

    cssStyle.color = "purple";
  } else {
    greeting = "Good Night";
    quotes =
      "The night is a time of mystery and magic, of darkness and possibility. -Unknown";

    cssStyle.color = "red";
  }

  return (
    <div>
      <h1>
        Hello , <span style={cssStyle}>{greeting} </span> <br />
        <span style={{ color: "tomato" }}>{quotes} </span>
      </h1>
    </div>
  );
};

export default App;
