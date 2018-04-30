// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require('vscode');
const path = require("path");
const comment_1 = require("./comment");

const languages = [
    "ruby",
    "erb"
];

let comment;
if (!comment) {
    comment = new comment_1.Comment();
}

comment.generate_comment();

function languageIsSupported(document) {
    return (languages.findIndex(l => document.languageId === l) !== -1);
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-rubycommentdoc" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.rubyCommentDoc', function () {
        // The code you place here will be executed every time your command is executed
        if (!languageIsSupported(vscode.window.activeTextEditor.document)) {
            vscode.window.showWarningMessage(`Sorry! currently only supports Ruby and erb files.`);
            return false;
        }
        else {
            vscode.window.showInformationMessage('A Ruby Comment Doc APPEARED !!');
            comment.rubyComment();
        }
    });

    // Display a message box to the user

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;