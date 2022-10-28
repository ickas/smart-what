export function parseType({typeName, name}) {
  const type = typeName.name || typeName.valueType?.namePath || typeName.namePath;
  return {name, type}
}