export function operatorObject(_operator) {
  let operator = _operator?.toString();
  let verb;

  if (operator.includes('>'))
    verb = 'moreThan';
  if (operator.includes('<'))
    verb = 'lessThan';
  if (operator.includes('&&'))
    verb = 'and';
  if (operator.includes('**'))
    verb = 'powerOf';
  if (operator.includes('='))
    verb = !verb ? 'equal' : `${verb}OrEqual`;
  if (operator.includes('!='))
    verb = `notEqual`;
  if (operator.includes('||'))
    verb = `or`;

  return {[verb]: true};
}