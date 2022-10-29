export function parseType({typeName, name}) {
  const type = typeName.name || typeName.namePath || typeName.valueType?.namePath;
  return {name, type}
}