import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import AssetList from "./components/assetList/AssetList";

function App() {
  return (
    <div className="main_container">
      <Header />
      <AssetList />
    </div>
  );
}

export default App;
