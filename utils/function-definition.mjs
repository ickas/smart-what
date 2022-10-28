import parseTemplate from "./parse-template.mjs";
import {bodyStatement} from "./body-statement.mjs";

export function functionDefinition({name, body, parameters, modifiers, returnParameters}) {

  parameters = parseTemplate(`parameters`, {parameters});
  modifiers = modifiers?.length ? parseTemplate(`modifiers`, {modifiers}) : ``;
  body = body?.statements?.map(bodyStatement).join(`\n`);

  return parseTemplate(`function-definition`, {name, parameters, modifiers, body, returnParameters});
}