import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function parseTemplate(fileName = "", context = {}, templateDir = "") {
  //throw new Error(`${process.cwd()} -- ${__dirname} `)
  templateDir = templateDir || process.env.TEMPLATE_DIR || `${!process.env.NODE_ENV ? __dirname : process.cwd()}/utils/templates/`;

  const template = handlebars.compile(fs.readFileSync(path.resolve(path.join(templateDir, `${fileName}.hbs`)), 'utf-8'), {noEscape: true});
  return template(context);
}