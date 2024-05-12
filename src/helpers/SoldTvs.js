// Importeer inventory data
import { inventory } from "../constants/inventory.js";


// totaal aantal verkochte tv's te berekenen
function calculateTotalSoldTVs() {
    return inventory.reduce((total, item) => total + item.sold, 0);
}

export default calculateTotalSoldTVs;