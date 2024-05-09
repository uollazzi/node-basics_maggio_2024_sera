import fs from "node:fs";
import path from "node:path";
import { DateTime } from "luxon";

export default () => {
    const workDir = process.cwd();
    const dataDir = "data";
    const dataFullDir = path.join(workDir, dataDir);

    // lettura
    try {
        const testo = fs.readFileSync(path.join(dataFullDir, "file.txt"), "utf8");
        console.log(testo);
    } catch (error: any) {
        console.log(error.errno);
        console.log("Errore nella lettura del file.");
    } finally {
        console.log("FINITO");
    }

    // scrittura
    const contenuto = `Sono le ore ${new Date().toLocaleTimeString()}`;

    try {
        fs.writeFileSync(path.join(dataFullDir, "data.txt"), contenuto, "utf8");
        console.log("SCRITTURA OK");
    } catch (error: any) {
        console.log(error.errno);
        console.log("Errore nella scrittura del file.");
    }

    // leggere contenuto cartella
    try {
        const entities = fs.readdirSync(workDir, { withFileTypes: true });
        for (const entity of entities) {
            console.log(entity.isDirectory() ? "[D]" : "[F]", entity.name);
        }
    } catch (error: any) {
        console.log("Errore nella lettura della cartella.", error);
    }

    // statistiche entità
    try {
        const entity = fs.statSync(path.join(dataFullDir, "data.txt"));

        let dataModifica = DateTime.fromMillis(entity.mtimeMs);

        console.log(dataModifica.toLocaleString(DateTime.DATETIME_FULL)); // epoch
        console.log(dataModifica.setLocale("it").toFormat("dd MMM yyyy HH")); // epoch
    } catch (error: any) {
        console.log("Errore nella lettura della cartella.", error);
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

// test git