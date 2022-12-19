class Service {

    constructor(name, price, fra) {
        this.name = name
        this.price = price
        this.fra = fra
    }
}


const services = [
    new Service("Dameklipp", 660, true),
    new Service("Ungdoms/student klipp", 560, false),
    new Service("Bleking av ettervekst", 1260, true),
    new Service("Farging", 890, true),
    new Service("Ettervekst farging", 790, true),
    new Service("Avfarging", 760, true),
    new Service("Foliestriper / noen del", 1260, false),
    new Service("Foliestriper", 1610, true),
    new Service("Airtouch/highlight", 2500, true),
    new Service("Kreativ farging (Balayage, ombre, shatush)", 1850, true),
    new Service("Ultralyd med infrarød hårpleie", 750, true),
    new Service("Hårbotox", 1300, true),
    new Service("Hårbotox med klipp", 1830, true),
    new Service("Keratinbehandling (nanoplastikk)", 1900, true),
    new Service("Hårbotox med klipp", 1830, true),
    new Service("Oppsetting", 600, true),
    new Service("Brudeoppsett", 2500, false),
    new Service("Brudeoppsett (ink prøvetime og makeup)", 4100, false),
    new Service("Permanent ink. klipp/form", 1570, true),
    new Service("Bryn korreksjon (napping)", 250, false),
    new Service("Farging av vipper", 210, false),
    new Service("Bryn korreksjon/farging", 370, false),
    new Service("Bryn korreskjon/farging av henna", 420, false),
    new Service("Make up", 750, false),
    new Service("Bryn korreskjon/farging av henna", 420, false),
    new Service("Herreklipp uten vask", 460, false),
    new Service("Herreklipp med vask", 500, false),
    new Service("Klipp pannelugg", 170, false),
    new Service("Vask/føn", 410, false),
    new Service("Styling uten vask", 250, false),
    new Service("Kur med massasje", 460, false),
    new Service("Barneklipp 1 - 3 år", 210, false),
    new Service("Barneklipp 4 - 8 år", 280, false),
    new Service("Barneklipp 9 - 12 år", 350, false),

]



export default services