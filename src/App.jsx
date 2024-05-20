// import SoldTVs from './helpers/SoldTvs';
import './App.css';
import calculateTotalSoldTVs from './helpers/soldTvs.js';
import calculateTotalPurchasedTVs from './helpers/purchasedTvs.js';
import ToBeSold from './helpers/tvStockHelpers/toBeSold.js';


import BestSellingDisplayed from './helpers/productDisplay/bestSelling.jsx';
import ProductDescriptions from "./helpers/productDescription.jsx";



function App() {
    const totalSoldTVs = calculateTotalSoldTVs();
    console.log(`Totaal verkochte tv's: ${totalSoldTVs}`);
    const totalPurchasedTVs = calculateTotalPurchasedTVs();
    console.log(`Totaal ingekochte tv's: ${totalPurchasedTVs}`);
    const remainingStock = ToBeSold(); // Dit gebruikt de geïmporteerde ToBeSold functie
    console.log(`Nog te verkopen tv's: ${remainingStock}`);

    // const Formattedprice = formatPrice(200)
    // console.log(`De prijs is: ${Formattedprice}`)


    return (
        <main className="App">
            <h1></h1>
            <h2>Totaal verkochte tv&apos;s: <span className={"sold-amount"}>{totalSoldTVs}</span></h2>
            {/*vanwege terugkomende fout &apos; gebruikt ipv ' in tv's*/}
            <h2>Totaal ingekochte tv&apos;s: <span className={"purchased-amount"}>{totalPurchasedTVs}</span></h2>
            <h2>Nog te verkopen tv&apos;s: <span className="remaining-amount">{remainingStock}</span></h2>
            <BestSellingDisplayed />
            <formattedprice />
            <ProductDescriptions />

        </main>
    );
}


export default App
