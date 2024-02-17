// Import necessary modules and components
import { vscode } from "../utilities/vscode";
import { VSCodePanels, VSCodePanelTab, VSCodePanelView } from "@vscode/webview-ui-toolkit/react";
import "./App.css";

// Define the App component
function App() {

  // Render the App component
  return (
    <>
      {/* vsCodePanels component */}
      <VSCodePanels>
        <VSCodePanelTab id="tab-1">
          PROBLEMS
          {/* <VSCodeBadge >1</VSCodeBadge> */}
        </VSCodePanelTab>
        <VSCodePanelTab id="tab-2">
          OUTPUT
          {/* <VSCodeBadge >1</VSCodeBadge> */}
        </VSCodePanelTab>
        <VSCodePanelTab id="tab-3">
          DEBUG CONSOLE
          {/* <VSCodeBadge >1</VSCodeBadge> */}
        </VSCodePanelTab>
        <VSCodePanelTab id="tab-4">
          TERMINAL
          {/* <VSCodeBadge >1</VSCodeBadge> */}
        </VSCodePanelTab>
        <VSCodePanelView id="view-1"> Problems Content </VSCodePanelView>
        <VSCodePanelView id="view-2"> Output Content </VSCodePanelView>
        <VSCodePanelView id="view-3"> Debug Console Content </VSCodePanelView>
        <VSCodePanelView id="view-4"> Terminal Content </VSCodePanelView>
      </VSCodePanels>
    </>
  );
}

export default App;
