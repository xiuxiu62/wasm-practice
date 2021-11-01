import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App: React.FC = (): JSX.Element => (
  <React.StrictMode>
    <div className="min-h-screen m-8 flex flex-col text-center">
      <u>
        <h1 className="text-xl">hello world</h1>
      </u>
    </div>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.querySelector("#root"));
