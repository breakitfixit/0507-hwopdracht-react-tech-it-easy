// Importeer inventory data
import PurchasedTvs from "../purchasedTvs.js";
import SoldTvs from "../soldTvs.js";

function ToBeSold() {
    const totalPurchasedTVs = PurchasedTvs();
    const totalSoldTVs = SoldTvs();
    return totalPurchasedTVs - totalSoldTVs;
}

export default ToBeSold;