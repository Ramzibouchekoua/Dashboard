import React, { useState } from "react";
import "./App.css";
import ComingSoon from "./Components/ComingSoon";
import HomePage from "./Components/HomePage";

import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [sideBarId, setSideBarId] = useState(1);
  return (
    <div className="App">
      <SideBar setSideBarId={setSideBarId} sideBarId={sideBarId} />
      {(() => {
        switch (sideBarId) {
          case 1:
            return <HomePage />;
          default:
            return <ComingSoon />;
        }
      })()}
    </div>
  );
}

export default App;
