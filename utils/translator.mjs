import parser from '@solidity-parser/parser';
import {functionDefinition} from "./function-definition.mjs";
import {writeFileSync} from "fs";

export default function translator(source = '') {

  const ast = parser.parse(source);
  let _return = [];
  let nodes = [];
  parser.visit(ast, {
    ContractDefinition: (node) => {
      //console.log('node', node)
      //contractDefinition(node);
    },
    'FunctionDefinition': (node) => {
      _return.push(functionDefinition(node));
      nodes.push(node);
    }
  });

  //writeFileSync('dump.json', JSON.stringify(nodes, null, 2))
  //writeFileSync('dump.txt', _return.join(`\r\n`))



  return _return.join(`\r\n`);
}