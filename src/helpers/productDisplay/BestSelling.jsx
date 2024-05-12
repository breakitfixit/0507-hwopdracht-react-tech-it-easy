import {bestSellingTv} from "../../constants/inventory.js";

function BestSelling() {
    return (
        <div className="best-selling">
            <h2>{bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}</h2>
        </div>
    );
}

export default BestSelling;