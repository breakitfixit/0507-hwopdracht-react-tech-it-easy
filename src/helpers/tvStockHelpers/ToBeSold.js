// Importeer inventory data
import PurchasedTvs from "../PurchasedTvs.js";
import SoldTvs from "../SoldTvs.js";

function ToBeSold() {
    const totalPurchasedTVs = PurchasedTvs();
    const totalSoldTVs = SoldTvs();
    return totalPurchasedTVs - totalSoldTVs;
}

export default ToBeSold;