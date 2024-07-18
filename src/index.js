import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>My First Component in React App. </h2>;
// }
function Greeting() {
  return React.createElement("h2", {}, "Hello World!");
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Greeting />);
