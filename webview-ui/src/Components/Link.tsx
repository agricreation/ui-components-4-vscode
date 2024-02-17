
// Import necessary modules and components
import { vscode } from "../utilities/vscode";
import {
    VSCodeLink
} from "@vscode/webview-ui-toolkit/react";
import "./App.css";

// Define the App component
function App() {

  // Render the App component
  return (
   <>
  <p>An <VSCodeLink href="#">inline link</VSCodeLink> that is a part of a sentence.</p>
   </>
  );
}

export default App;
