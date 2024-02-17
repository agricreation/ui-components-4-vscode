// Import necessary modules and components
import { vscode } from "./utilities/vscode";
import {
  VSCodeButton,
  VSCodeTextField,
  VSCodeBadge,
  VSCodePanels,
  VSCodePanelTab,
  VSCodePanelView
} from "@vscode/webview-ui-toolkit/react";
import "./App.css";

// Define the App component
function App() {
  // Define click handler function
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey buddy !",
    });
  }

  // Render the App component
  return (
    <main>
      <div className="flex container">
        {/* VSCodeTextField component */}
        <VSCodeTextField
          className="text_field"
          placeholder="Find Components"
          autofocus
        />
        {/* VSCodeButton component */}
        <VSCodeButton onClick={handleHowdyClick}>Find What I need</VSCodeButton>
      </div>



      {/* Additional content */}
      <br />
      <div className="content">
        <div className="container-fluid">
          <div className="gallery_containers">
            {/* Image card */}
            <div className="box">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjGxNgvab03qqiCSwFbzVv9ETIzCOW41oIM7U4VHyrQIJi4hmQwih9Mr_GEPPQ51AJvgqWgAQk8hu6ujZMDFXtNdT2dNNcvyJY3wspvFBrh4NTMl6iWxKjAOifdCUyTCZb5F0fKxvfBan-K6mO9lAfVCF9cH8YfHqiMiWxoRlCFLw37H46HzsEjToPA4Q=w256-h320"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Export the App component
export default App;
