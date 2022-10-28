import {expressionStatement} from "./expression-statement.js";
import parseTemplate from "./parse-template.mjs";

export function returnStatement(node) {
  return parseTemplate(`return-statement`, {expression: expressionStatement(node.expression)});
}