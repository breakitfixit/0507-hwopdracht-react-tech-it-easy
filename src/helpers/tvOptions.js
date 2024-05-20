import {inventory} from "../constants/inventory.js";

// Opdracht 2c:
// Gebruik opnieuw een array-methode
// om voor iedere tv alle optie-namen (zonder iconen)
// weer te geven in een lijst.

const tvOptions = inventory.map((tv) => {
    return tv.options.map((option) => {
        return option.name;
    })
});


console.log(tvOptions)