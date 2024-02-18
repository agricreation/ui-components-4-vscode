// Import necessary modules and components
import { vscode } from "./utilities/vscode";
import OutputsOfComponents from "./Components/Card";
import { VSCodeButton, VSCodeTextField } from "@vscode/webview-ui-toolkit/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ComponentsCard from './Components/ComponentsCard';
import "./App.css";

// Define the App component
function App() {

  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: `test`,
    });
  }

  // Render the App component
  return (
    <main>
      <div className="flex container">
        {/* VSCodeTextField component */}
        <VSCodeTextField className="text_field" placeholder="Find Components" autofocus />
        {/* VSCodeButton component */}
        <VSCodeButton onClick={handleHowdyClick}>Find What I need</VSCodeButton>
      </div>
      {/* Additional content */}
      <br />
      <div className="content">
        <div className="container-fluid">
          <div className="gallery_containers">
            {/* Image card */}
              <ComponentsCard 
              catogreise="all" componentType="all" onlyCard={true}
              />
          </div>
        </div>
      </div>
    </main>
  );
}

// Export the App component
export default App;
