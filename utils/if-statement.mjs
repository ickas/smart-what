import {expressionStatement} from "./expression-statement.js";
import {bodyStatement} from "./body-statement.mjs";
import parseTemplate from "./parse-template.mjs";
import {operatorObject} from "./operator-object.mjs";

export function ifStatement({condition: {operator, left, right, ...rest}, trueBody, falseBody}) {

  left = left ? expressionStatement(left) : expressionStatement(rest);
  right = right ? expressionStatement(right) : '';

  trueBody = !trueBody ? '' : bodyStatement(trueBody);
  falseBody = !falseBody ? '' : bodyStatement(falseBody);

  operator = operator ? parseTemplate('operator-verb', operatorObject(operator)) : '';

  return parseTemplate('if-statement', {left, right, operator, trueBody, falseBody});
}