// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const axios = require('axios');

export async function activate(context: vscode.ExtensionContext) {

	const panel = vscode.window.createWebviewPanel(
		'Ui-components for your next prooject', // Identifies the type of the webview. Used internally
		'Ui-Components', // Title of the panel displayed to the user
		vscode.ViewColumn.One, // Editor column to show the new webview panel in
		{
			enableScripts: true // Enable JavaScript in the webview
		}
	);
	// #TODO Need to create a api and style the pannel 
	panel.webview.html = `
	<html>
	<head>
		<style>
			body, html {
				margin: 0;
				padding: 0;
				overflow: hidden;
			}
			iframe {
				border: none; /* Remove the iframe border */
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
			}
		</style>
	</head>
	<body>
		<iframe src="https://agricreations.com/"></iframe>
	</body>
	</html>
	
    `;
	

	let disposable = vscode.commands.registerCommand('ui-components-4-vscode.helloWorld', () => {
		vscode.window.showInformationMessage(`Enjoy the Ui-components Opencsource world !`);
	});
	context.subscriptions.push(disposable);


	
}

// This method is called when your extension is deactivated
export function deactivate() {}







// let disposable = vscode.commands.registerCommand('ui-components-4-vscode.helloWorld', () => {
// 	vscode.window.showInformationMessage(`Hello World from ui-components-4-vscode! ${response.data}`);
// });