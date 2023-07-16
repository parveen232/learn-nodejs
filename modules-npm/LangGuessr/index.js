import { franc } from "franc";
import langs from "langs";
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);

const language = langs.where("3", langCode);
console.log(colors.green(language.name));

// node index.js "language text"