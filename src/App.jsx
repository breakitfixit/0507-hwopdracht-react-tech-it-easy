// import SoldTVs from './helpers/SoldTvs';
import './App.css';
import calculateTotalSoldTVs from './helpers/SoldTvs';
import calculateTotalPurchasedTVs from './helpers/PurchasedTvs.js';
import ToBeSold from './helpers/tvStockHelpers/ToBeSold.js';


function App() {
    const totalSoldTVs = calculateTotalSoldTVs();
    console.log(`Totaal verkochte tv's: ${totalSoldTVs}`);

    const totalPurchasedTVs = calculateTotalPurchasedTVs();
    console.log(`Totaal ingekochte tv's: ${totalPurchasedTVs}`);

    const remainingStock = ToBeSold(); // Dit gebruikt de geïmporteerde ToBeSold functie
    console.log(`Nog te verkopen tv's: ${remainingStock}`);

    return (
        <main className="App">
            <h1></h1>
            <h2>Totaal verkochte tv&apos;s: <span className={"sold-amount"}>{totalSoldTVs}</span></h2>
            {/*vanwege terugkomende fout &apos; gebruikt ipv ' in tv's*/}
            <h2>Totaal ingekochte tv&apos;s: <span className={"purchased-amount"}>{totalPurchasedTVs}</span></h2>
            <h2>Nog te verkopen tv&apos;s: <span className="remaining-amount">{remainingStock}</span></h2>
        </main>
    );

}

export default App
