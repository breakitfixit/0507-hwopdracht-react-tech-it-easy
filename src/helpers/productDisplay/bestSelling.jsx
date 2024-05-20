import {bestSellingTv} from "../../constants/inventory.js";

function BestSellingDisplayed() {
    return (
        <div className="best-selling">
            {bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}
        </div>
    );
}

export default BestSellingDisplayed;