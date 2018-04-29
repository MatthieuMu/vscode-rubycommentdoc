"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vs = require("vscode");
const ts = require("typescript");
const utils = require("./utilities");

class Comment {
    constructor() {
    }
    generate_comment(oui = 1) {
        console.log(oui);
    }
    rubyComment(){
        const editor = vs.window.activeTextEditor;
        const sb = this._createSnippet();
        editor.insertSnippet(sb);
    }
    _createSnippet(){
        var content = "####";
        content += "# okok";
        content += "####";
        const snippet = new vs.SnippetString(content.toString());
        return snippet
    }
}

exports.Comment = Comment;