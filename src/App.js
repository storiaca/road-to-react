import React from "react";
import "./App.css";

function getTitle(title) {
  return title;
}

// const welcome = {
//   greeting: "Hey",
//   title: "React",
// };

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      {/* <h1>
        {welcome.greeting} {welcome.title}
      </h1> */}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
