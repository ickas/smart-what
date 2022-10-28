import {expressionStatement} from "./expression-statement.js";
import {ifStatement} from "./if-statement.mjs";
import {variableDeclare} from "./variable-declare.mjs";
import {emitStatement} from "./emit-statement.mjs";
import {returnStatement} from "./return-statement.js";
import {forStatement} from "./for-statement.mjs";

export function bodyStatement({type, ...rest}) {
  let parsedStatement;

  switch (type) {
    case 'Block':
      parsedStatement = rest.statements?.map(bodyStatement).join(`\n`);
      break;
    case 'ExpressionStatement':
      parsedStatement = expressionStatement({type, ...rest});
      break;
    case 'IfStatement':
      parsedStatement = ifStatement(rest);
      break;
    case 'VariableDeclarationStatement':
      parsedStatement = variableDeclare(rest)
      break;
    case 'EmitStatement':
      parsedStatement = emitStatement(rest);
      break;
    case 'ReturnStatement':
      parsedStatement = returnStatement(rest);
      break;
    case 'ForStatement':
      parsedStatement = forStatement(rest);
      break;
    default:
      parsedStatement = `no bodyStatement for ${type}`;
      break;
  }

  return parsedStatement;
}