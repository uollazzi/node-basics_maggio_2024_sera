// import process from "node:process";

export default () => {
    console.log("processId:", process.pid);
    console.log("directory attuale:", process.cwd());
    console.log("percorso eseguibile:", process.argv0);
    console.log("argomenti:", process.argv);

    console.log("istruzione:", process.argv[2]);

    if (process.argv[2] == "generate") {
        // genera un qualcsoa

        switch (process.argv[3]) {
            case "component":
                // genera un componente
                break;
            case "service":
                // genera un service
                break;
        }
    }
    else if (process.argv[2] == "new") {
        // genera una nuova app
    }
}