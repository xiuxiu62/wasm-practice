import React from "react";
import ReactDOM from "react-dom";

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <p className="center">hello world</p>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
