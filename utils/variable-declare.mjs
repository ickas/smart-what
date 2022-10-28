import parseTemplate from "./parse-template.mjs";
import {expressionStatement} from "./expression-statement.js";
import {parseType} from "./parse-type.mjs";

export function variableDeclare({variables, initialValue}) {
  initialValue = initialValue ? expressionStatement(initialValue) : '';

  const {type, name} = parseType(variables[0]);
  return parseTemplate('variable-declaration', {name, type, initialValue})
}