import { parseISO as v2 } from "https://unpkg.com/browse/date-fns@2.30.0/parseISO/index.js";
import { parseISO as v3 } from "https://unpkg.com/date-fns@3.6.0/parseISO.mjs";

const date = "Mon May 20 2024 13:23:58 GMT-0700";
const x = v2(date);
console.log(x);

const y = v3(date);
console.log(y);
