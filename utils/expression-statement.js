import parseTemplate from "./parse-template.mjs";
import {operatorObject} from "./operator-object.mjs";

export function expressionStatement(node) {

  let statement;
  let args;

  if (node.arguments)
    args = node.arguments.map(expressionStatement);

  switch (node.type) {
    case 'FunctionCall':
      const name = node.expression.name || expressionStatement(node.expression);
      statement = parseTemplate('function-call', {name, args});
      break;
    case 'MemberAccess':
      statement = expressionStatement(node.expression).concat(...['.', node.memberName]);
      break;
    case 'Identifier':
      statement = node.name;
      break;
    case 'IndexAccess':
      statement = expressionStatement(node.base).concat(...['[', expressionStatement(node.index), ']']);
      break;
    case 'BinaryOperation':
      const left = expressionStatement(node.left);
      const right = expressionStatement(node.right);
      const verb = parseTemplate('operator-verb', operatorObject(node.operator));
      statement = parseTemplate('binary-operation', {left, operator: node.operator, verb, right})
      break;
    case 'ExpressionStatement':
      statement = expressionStatement(node.expression);
      break;
    case 'BooleanLiteral':
    case 'StringLiteral':
      statement = node.value;
      break;
    case 'NumberLiteral':
      statement = node.number;
      break;
    case 'TupleExpression':
      statement = node.components.map(expressionStatement).join(``)
      break;
    case 'Conditional':
      const condition = expressionStatement(node.condition);
      const trueExpression = expressionStatement(node.trueExpression);
      const falseExpression = expressionStatement(node.falseExpression);
      statement = parseTemplate(`conditional`, {condition, trueExpression, falseExpression});
      break;
    case 'UnaryOperation':
      const operator = node.operator;
      const subExpression = expressionStatement(node.subExpression);
      statement = parseTemplate('unary-operation', {operator, subExpression})
      break;
    default:
      statement = `no expressionStatement for ${node.type || JSON.stringify(node)}`;
      break;
  }

  return statement;
}