// Importeer inventory data
import { inventory } from "../constants/inventory.js";

function calculateTotalPurchasedTvs() {
    return inventory.reduce((total, item) => total + item.originalStock, 0);
}

export default calculateTotalPurchasedTvs;