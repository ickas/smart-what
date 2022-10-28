import {expressionStatement} from "./expression-statement.js";
import {bodyStatement} from "./body-statement.mjs";
import parseTemplate from "./parse-template.mjs";

export function forStatement({initExpression, conditionExpression, loopExpression, body}) {

  initExpression = bodyStatement(initExpression);
  conditionExpression = expressionStatement(conditionExpression);
  loopExpression = expressionStatement(loopExpression);
  body = bodyStatement(body);

  return parseTemplate('for-statement', {initExpression, conditionExpression, loopExpression, body});
}