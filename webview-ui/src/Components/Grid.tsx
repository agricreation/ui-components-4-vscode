// Import necessary modules and components
import { vscode } from "../utilities/vscode";
import {
    VSCodeDataGridRow,
    VSCodeDataGridCell
} from "@vscode/webview-ui-toolkit/react";
import "./App.css";

// Define the App component
function App() {

  // Render the App component
  return (
   <>
   <VSCodeDataGridRow>
  <VSCodeDataGridCell grid-column="1">Cell Data</VSCodeDataGridCell>
  <VSCodeDataGridCell grid-column="2">Cell Data</VSCodeDataGridCell>
  <VSCodeDataGridCell grid-column="3">Cell Data</VSCodeDataGridCell>
  <VSCodeDataGridCell grid-column="4">Cell Data</VSCodeDataGridCell>
</VSCodeDataGridRow>
   </>
  );
}

export default App;
