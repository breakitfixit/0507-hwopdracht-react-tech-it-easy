# Opdrachtbeschrijving

## Inleiding

Je bent net begonnen als developer bij een bedrijf genaamd _Tech It Easy_, dat TV's verkoopt. Recentelijk hebben ze Fred
van financieën ontslagen omdat hij telkens wel online was op Teams, maar eigenlijk dutjes deed en niets uitvoerde. Dit
betekent dat de medewerkers een financieel dashboard nodig hebben om zelf de administratie bij te houden.

Omdat Fred al heel lang niets heeft uitgevoerd is het niet zo goed gesteld met de financieën. Je kunt er daarom vanuit
gaan dat de voorraad met televisies op dit moment statisch is, maar in de toekomst dynamisch wordt.

![Tech it easy](./src/assets/tech_it_easy.png)

In de `inventory` array (in `constants/inventory.js`) vind je 8 tv-objecten. Elk tv-object bevat de volgende informatie:

* `type` - het tv type
* `brand` - het merk
* `name` - de benaming
* `price` - de prijs (_in hele euro's_)
* `availableSizes` - een array met beschikbare schermgroottes voor dit model (_in inches_)
* `refreshRate` - de beeldverversing (_in Hz_)
* `screenType` - het type scherm (_LED - QLED - LCD_)
* `screenQuality` - de resolutie van het scherm (_Ultra HD/4K - Full HD - HD Ready_)
* `smartTv` - boolean waarde die aangeeft of het een Smart TV betreft
* `options` - een object met opties, waarin met booleans is aangegeven welke opties wel en niet aanwezig zijn (_wiFi,
  spraakbesturing, HDR, Bluetooth en AmiLight_)
* `originalStock` - de hoeveelheid exemplaren van dit type die tijdens deze voorraad-batch zijn ingekocht
* `sold` - de hoeveelheid verkochte exemplaren van dit type