import parseTemplate from "./parse-template.mjs";
import {expressionStatement} from "./expression-statement.js";

export function emitStatement(node) {
  return parseTemplate('emit-statement', {expression: expressionStatement(node.eventCall)})
}