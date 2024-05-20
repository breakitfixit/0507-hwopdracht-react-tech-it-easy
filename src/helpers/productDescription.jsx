import {inventory} from "../constants/inventory.js";

//Opdracht 2b:
// Gebruik een array-methode om alle tv's van Tech It Easy weer te geven
// in hetzelfde format als de best verkochte tv (helperfuncties .

// Gebruik hiervoor ook de helperfuncties die je hebt gemaakt tijdens deel 1,
// maar sla de opties (zoals bluetooth, wifi, etc.) nog even over.

function ProductDescription() {
    return (
        <div className="product description">
            {inventory.map((tv) => {
                return (
                    <div key={tv.type}>
                        {tv.brand} {tv.type} - {tv.name}
                    </div>
                );
            })}
        </div>
    );
}

export default ProductDescription;