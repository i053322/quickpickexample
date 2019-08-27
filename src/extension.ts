// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { PortDisplayItem } from './PortDisplayItem';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quickpicktest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const items = [];
		items.push(new PortDisplayItem("1234","http://url","test","active","desc"));
		showPortItems(items,"placeholder");
	//	vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}


    // dispaly QuickPick control with provided PortDisplayItem list
    // upon item selection, the provided callback is executed
    export function showPortItems(portsToDisplay: PortDisplayItem[], placeholder: string)  {
        const quickPick = vscode.window.createQuickPick<PortDisplayItem>();
        quickPick.items = portsToDisplay;
        quickPick.ignoreFocusOut = false;
        quickPick.matchOnDescription = false;
        quickPick.canSelectMany = false;
        quickPick.matchOnDetail = false;
        quickPick.placeholder = placeholder;
        quickPick.onDidChangeSelection( (selection: any) => {
            if (selection[0]) {
                const quickPickitem = new PortDisplayItem(selection[0].backendPort,selection[0].backendUrl,selection[0].backendName,selection[0].backendStatus,selection[0].backendDescription);
                //callback(quickPickitem);
            }
        });
        quickPick.onDidHide(() => quickPick.dispose());
        quickPick.show();
	}	
// this method is called when your extension is deactivated
export function deactivate() {}
