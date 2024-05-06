import fs from "node:fs";
import path from "node:path";

export default () => {
    const workDir = process.cwd();
    const dataDir = "data";
    const dataFullDir = path.join(workDir, dataDir);

    try {
        const testo = fs.readFileSync(path.join(dataFullDir, "fil.txt"), "utf8");
        console.log(testo);
    } catch (error: any) {
        console.log(error.errno);
        console.log("Errore nella lettura del file.");
    } finally {
        console.log("FINITO");
    }
}

export const saveProducts = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let dati = await res.json();

    const workDir = process.cwd();
    const dataDir = "data";
    const dataFullDir = path.join(workDir, dataDir);

    fs.writeFileSync(path.join(dataFullDir, "products.json"), JSON.stringify(dati), "utf8");
}