// import { somma, sommaMultipla } from "./matematica";
// import molt from "./matematica";
import * as mate from "./matematica";
import molt, { sommaMultipla, somma } from "./matematica";

console.log(somma(5, 6));
console.log(molt(5, 6));
console.log(sommaMultipla(5, 6, 12, 90));
console.log(mate.somma(3, 9));

console.log("=".repeat(20));
import * as myOs from "./es-os";
myOs.logHostName();
myOs.logUserName();
myOs.logUserHomeDir();

console.log("=".repeat(20));
import myPath from "./es-path";
myPath();

console.log("=".repeat(20));
import myUrl from "./es-url";
myUrl();

console.log("=".repeat(20));
import myProcess from "./es-process";
myProcess();

console.log("=".repeat(20));
import myFs, { saveProducts } from "./es-fs";
myFs();
saveProducts();

console.log("=".repeat(20));
import { getPosts, getPostsSync } from "./richieste";
getPosts();


getPostsSync();

