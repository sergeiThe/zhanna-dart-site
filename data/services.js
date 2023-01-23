class Service {

    constructor(name, price, fra) {
        this.name = name
        this.price = price
        this.fra = fra
    }
}


const services = [
    new Service("Dameklipp", 690, true),
    new Service("Ungdoms/student klipp", 590, false),
    new Service("Bleking av ettervekst", 1290, true),
    new Service("Farging", 920, true),
    new Service("Ettervekst farging", 860, true),
    new Service("Avfarging", 860, true),
    new Service("Foliestriper / noen del", 1290, false),
    new Service("Foliestriper", 1640, true),
    new Service("Airtouch/highlight", 2530, true),
    new Service("Kreativ farging (eks. ombre)", 1880, true),
    new Service("Ultralyd med infrarød hårpleie", 780, true),
    new Service("Hårbotox", 1400, true),
    new Service("Hårbotox med klipp", 1930, true),
    new Service("Keratinbehandling (nanoplastikk)", 1930, true),
    new Service("Hårbotox med klipp", 1830, true),
    new Service("Oppsetting", 660, true),
    new Service("Brudeoppsett", 2530, false),
    new Service("Brudeoppsett (prøvetime + makeup)", 4190, false),
    new Service("Permanent ink. klipp/form", 1630, true),
    new Service("Bryn korreksjon (napping)", 270, false),
    new Service("Farging av vipper", 230, false),
    new Service("Bryn korreksjon/farging", 470, false),
    new Service("Bryn korreskjon/farging av henna", 430, false),
    // new Service("Make up", 750, false),
    new Service("Herreklipp uten vask", 490, false),
    new Service("Herreklipp med vask", 500, false),
    new Service("Klipp pannelugg", 190, false),
    new Service("Vask/føn", 440, false),
    new Service("Styling uten vask", 280, false),
    new Service("Kur med massasje", 490, false),
    new Service("Barneklipp 1 - 3 år", 230, false),
    new Service("Barneklipp 4 - 8 år", 310, false),
    new Service("Barneklipp 9 - 12 år", 380, false),

]



export default services