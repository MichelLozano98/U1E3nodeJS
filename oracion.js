const fs = require("fs");
const readline = require("leerlineas");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const text = fs.readFileSync("./hola.txt", { encoding: "utf8" });

const preguntar = function() {
    const cleantext = text.replace("\n", "");
    const data = cleantext.split(" ");
    const frase = shuffle(data).join(" ");
    rl.question(
        `\n${frase}.\nEs la frase correcta? (s)i | (c)lose | (enter) no: `,

        (respuesta) => {
            rl.pause();
            if (respuesta === "si" || respuesta === "s") {
                console.log("La frase correcta es: ", frase.toUpperCase());
                //console.log("Adiosito");
                process.exit(0);
            }
            if (respuesta === "close" || respuesta === "c") {
                process.exit(0);
            } else {
                preguntar();
            }
        },
    );
};

if (text) {
    preguntar();
}

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        const random = randomIndex(array.length - 1);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return [...array];
}

function randomIndex(length) {
    return Math.floor(Math.random() * (length - 0) + 0);
}