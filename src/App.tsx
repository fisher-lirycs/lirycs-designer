import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FillIcon from "./components/Icon";
import LionIcon from "./components/Icon/LineIcon";
import HalfIcon from "./components/Icon/HalfIcon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FillIcon name={"BookmarksFill"} theme="danger" width={32} height={32} />
      <LionIcon name="Icon123" theme="danger" width={32} height={32} />
      <HalfIcon name="BatteryHalf" theme="danger" width={32} height={32} />
    </div>
  );
}

export default App;
