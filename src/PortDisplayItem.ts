import * as vscode from 'vscode';

export class PortDisplayItem implements vscode.QuickPickItem {

    public label: string;
    public description: string;
    public detail: string;
    public backendPort: string;
    public backendUrl: string;
    public backendName: string;
    public backendStatus: string;
    public backendDescription: string;
    
    constructor(backendPort: string, backendUrl: string, backendName: string, backendStatus: string, backendDesc: string) {
	this.description = (!backendStatus || backendStatus.length === 0) ? "" :  "    ["+backendStatus+"]";
        this.label = backendPort+"\t"+backendDesc;
        this.detail =   backendUrl;
        this.backendPort = backendPort;
        this.backendUrl = backendUrl;
        this.backendName = backendName;
        this.backendStatus = backendStatus;
        this.backendDescription = backendDesc;
    }
}
