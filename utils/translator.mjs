import parser from '@solidity-parser/parser';
import {functionDefinition} from "./function-definition.mjs";

export default function translator(source = '') {

  const ast = parser.parse(source);
  let _return = ``;
  parser.visit(ast, {
    ContractDefinition: (node) => {
      //console.log('node', node)
      //contractDefinition(node);
    },
    'FunctionDefinition': (node) => {
      _return += functionDefinition(node);
      //console.log(node);
    }
  });

  //writeFileSync('dump.json', JSON.stringify(ast, null, 2))

  return _return;
}