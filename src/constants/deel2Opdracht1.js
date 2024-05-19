import {inventory} from "./inventory.js";

// Opdracht 1a: Gebruik een array-methode
// om een array te maken met daarin alle tv-type namen.

// Log de uitkomst in de console.

const tvTypes = inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypes);

