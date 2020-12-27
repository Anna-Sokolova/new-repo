import { createClient } from "pexels";
import refs from "./refs.js";
const { form, quryResult } = refs;
// console.log(refs);
const apiKey = "563492ad6f91700001000001634c14c985944e77a6f2d3b2335fb9b7";
const client = createClient(apiKey);
console.log(client);
