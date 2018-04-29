"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const ts = require("typescript");
const vs = require("vscode");

function emptyArray(arr) {
    while (arr.length > 0) {
        arr.pop();
    }
}
exports.emptyArray = emptyArray;
function getDocumentFileName(document) {
    const fileName = fixWinPath(document.fileName);
    return fileName;
}
exports.getDocumentFileName = getDocumentFileName;
function fixWinPath(filePath) {
    if (path.sep === "\\") {
        return filePath.replace(/\\/g, "/");
    }
    return filePath;
}
exports.fixWinPath = fixWinPath;