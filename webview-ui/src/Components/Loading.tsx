
// Import necessary modules and components
import { vscode } from "../utilities/vscode";
import {
    VSCodeProgressRing
} from "@vscode/webview-ui-toolkit/react";
import "./App.css";

// Define the App component
function App() {

  // Render the App component
  return (
   <>
 <VSCodeProgressRing></VSCodeProgressRing>
   </>
  );
}

export default App;
