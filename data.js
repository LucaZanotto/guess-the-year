const data = [
  {
    name: "Telefono cellulare",
    year: 1973,
    description: "Il primo prototipo fu sviluppato da Motorola.",
    image: "images/telefonocellulare.jpg"
  },
  {
    name: "Internet",
    year: 1983,
    description: "Anno di adozione ufficiale del protocollo TCP/IP.",
    image: "images/internet.jpg"
  },
  {
    name: "Stampante 3D",
    year: 1984,
    description: "Chuck Hull ha inventato la stereolitografia.",
    image: "images/stampante3d.jpg"
  },
  {
    name: "Codice a barre",
    year: 1974,
    description: "Scansionato per la prima volta in un supermercato in Ohio.",
    image: "images/codiceabarre.jpg"
  },
  {
    name: "Carta di credito",
    year: 1950,
    description: "La prima fu la Diners Club, introdotta negli USA.",
    image: "images/carta_di_credito.avif"
  },
  {
    name: "Post-it",
    year: 1977,
    description: "Inventati da 3M come segnalibri removibili.",
    image: "images/postit.webp"
  },
  {
    name: "Bluetooth",
    year: 1999,
    description: "Standard wireless a corto raggio.",
    image: "images/bluetooth.png"
  },
  {
    name: "Pen drive (USB stick)",
    year: 2000,
    description: "Introdotta da IBM e Trek Technology.",
    image: "images/pendrive.png"
  },
  {
    name: "Wikipedia",
    year: 2001,
    description: "Lanciata come enciclopedia libera online.",
    image: "images/wikipedia.png"
  },
  {
    name: "iPhone",
    year: 2007,
    description: "Il primo smartphone lanciato da Apple.",
    image: "images/iphone.avif"
  },
  {
    name: "Netflix (streaming)",
    year: 2007,
    description: "Da noleggio DVD a streaming on-demand.",
    image: "images/netflix.jpg"
  },
  {
    name: "Instagram",
    year: 2010,
    description: "App di photo sharing nata come Burbn.",
    image: "images/instagram.avif"
  },
  {
    name: "Bitcoin",
    year: 2009,
    description: "Il primo blocco della blockchain è stato minato da Satoshi Nakamoto.",
    image: "images/bitcoin.avif"
  },
  {
    name: "Tetris",
    year: 1984,
    description: "Creato da Alexey Pajitnov in URSS.",
    image: "images/tetris.jpg"
  },
  {
    name: "Pac-Man",
    year: 1980,
    description: "Creato da Namco, uno dei giochi arcade più famosi.",
    image: "images/pacman.png"
  },
  {
    name: "YouTube",
    year: 2005,
    description: "Il primo video caricato si intitola 'Me at the zoo'.",
    image: "images/youtube.webp"
  },
  {
    name: "Fotocamera digitale",
    year: 1975,
    description: "Kodak sviluppò il primo prototipo.",
    image: "images/fotocamera_digitale.avif"
  },
  {
    name: "Mouse del computer",
    year: 1967,
    description: "Douglas Engelbart creò il primo esemplare.",
    image: "images/mouse.avif"
  },
  {
    name: "Google",
    year: 1998,
    description: "Fondato da Larry Page e Sergey Brin.",
    image: "images/google.webp"
  },
  {
    name: "WhatsApp",
    year: 2009,
    description: "Creata da Jan Koum e Brian Acton.",
    image: "images/whatsapp.avif"
  },
  {
    name: "Macchina a vapore",
    year: 1712,
    description: "Thomas Newcomen costruì la prima macchina a vapore utilizzabile.",
    image: "images/macchina_vapore.webp"
  },
  {
    name: "Stampa a caratteri mobili",
    year: 1453,
    description: "Inventata da Johannes Gutenberg, rivoluzionò la diffusione dei libri.",
    image: "images/stampa_mobili.png"
  },
  {
    name: "Bussola",
    year: 1100,
    description: "Inventata in Cina per la navigazione.",
    image: "images/bussola.avif"
  },
  {
    name: "Ruota",
    year: -3500,
    description: "Una delle prime grandi invenzioni meccaniche dell’umanità.",
    image: "images/ruota.jpg"
  },
  {
    name: "Carta",
    year: 105,
    description: "Inventata in Cina da Cai Lun.",
    image: "images/carta.webp"
  },
  {
    name: "Lampadina elettrica",
    year: 1879,
    description: "Thomas Edison brevettò la prima commercialmente valida.",
    image: "images/lampadina.jpg"
  },
  {
    name: "Radio",
    year: 1895,
    description: "Guglielmo Marconi realizzò la prima trasmissione radio.",
    image: "images/radio.avif"
  },
  {
    name: "Aereo",
    year: 1903,
    description: "I fratelli Wright effettuarono il primo volo controllato.",
    image: "images/aereo.jpg"
  },
  {
    name: "Automobile",
    year: 1886,
    description: "Karl Benz costruì il primo veicolo a motore funzionante.",
    image: "images/automobile.jpg"
  },
  {
    name: "Penicillina",
    year: 1928,
    description: "Alexander Fleming scoprì il primo antibiotico.",
    image: "images/penicillina.jpg"
  },
  {
    name: "Telescrivente (telegrafo)",
    year: 1837,
    description: "Samuel Morse sviluppò il telegrafo elettrico.",
    image: "images/telegrafo.webp"
  },
  {
    name: "Telefono",
    year: 1876,
    description: "Alexander Graham Bell brevettò il telefono.",
    image: "images/telefono.jpg"
  },
  {
    name: "Televisione",
    year: 1927,
    description: "Philo Farnsworth realizzò la prima dimostrazione.",
    image: "images/televisione.jpg"
  },
  {
    name: "Microscopio",
    year: 1590,
    description: "Zacharias Janssen ne sviluppò uno dei primi esemplari.",
    image: "images/microscopio.avif"
  },
  {
    name: "Forno a microonde",
    year: 1945,
    description: "Percy Spencer scoprì per caso la cottura a microonde.",
    image: "images/microonde.jpg"
  },
  {
    name: "Orologio meccanico",
    year: 1300,
    description: "Usato inizialmente nei monasteri per segnare le ore.",
    image: "images/orologio_meccanico.jpg"
  },
  {
    name: "Paracadute",
    year: 1783,
    description: "Louis-Sébastien Lenormand compì il primo salto documentato.",
    image: "images/paracadute.jpg"
  },
  {
    name: "Sottomarino",
    year: 1620,
    description: "Cornelis Drebbel costruì il primo sottomarino funzionante.",
    image: "images/sottomarino.jpg"
  },
  {
    name: "Razzo spaziale",
    year: 1926,
    description: "Robert Goddard lanciò il primo razzo a propellente liquido.",
    image: "images/razzo.webp"
  },
  {
    name: "Treno a vapore",
    year: 1804,
    description: "Richard Trevithick costruì la prima locomotiva a vapore.",
    image: "images/treno_vapore.jpg"
  },
  {
    name: "Fotografia",
    year: 1826,
    description: "Nicéphore Niépce realizzò la prima fotografia permanente.",
    image: "images/fotografia.jpg"
  },
  {
    name: "Velcro",
    year: 1941,
    description: "George de Mestral inventò il sistema ispirandosi ai rovi.",
    image: "images/velcro.jpg"
  },
  {
    name: "Bicicletta",
    year: 1817,
    description: "Karl Drais creò la draisina, prototipo della bici moderna.",
    image: "images/bicicletta.webp"
  },
  {
    name: "Aspirapolvere",
    year: 1901,
    description: "Hubert Cecil Booth inventò il primo aspirapolvere elettrico.",
    image: "images/aspirapolvere.jpg"
  },
  {
    name: "Turbina a gas",
    year: 1939,
    description: "Sir Frank Whittle sviluppò il primo motore a reazione operativo.",
    image: "images/turbina.jpg"
  },
  {
    name: "Laser",
    year: 1960,
    description: "Theodore Maiman costruì il primo laser funzionante.",
    image: "images/laser.jpg"
  },
  {
    name: "Cerniera lampo (zip)",
    year: 1913,
    description: "Gideon Sundback perfezionò il design moderno.",
    image: "images/cerniera.jpg"
  },
  {
    name: "Carta igienica",
    year: 1857,
    description: "Joseph Gayetty la commercializzò per primo negli USA.",
    image: "images/cartaigienica.jpg"
  },
  {
    name: "Occhiali",
    year: 1286,
    description: "Inventati in Italia per correggere la vista.",
    image: "images/occhiali.webp"
  },
  {
    name: "Forchetta",
    year: 1000,
    description: "Originaria di Bisanzio, adottata lentamente in Europa.",
    image: "images/forchetta.jpg"
  },
  {
    name: "Autolavaggio automatico",
    year: 1946,
    description: "Introdotto negli USA, rivoluzionò la pulizia delle auto.",
    image: "images/autolavaggio.jpg"
  },
  {
    name: "Cinematografo",
    year: 1895,
    description: "I fratelli Lumière proiettarono il primo film pubblico.",
    image: "images/cinematografo.jpg"
  },
  {
    name: "Climatizzatore",
    year: 1902,
    description: "Willis Carrier progettò il primo sistema moderno.",
    image: "images/climatizzatore.jpg"
  },
  {
    name: "GPS",
    year: 1978,
    description: "Sviluppato inizialmente per scopi militari dagli USA.",
    image: "images/gps.jpg"
  },
  {
    name: "Microchip",
    year: 1958,
    description: "Jack Kilby ne sviluppò il primo prototipo.",
    image: "images/microchip.jpg"
  },
  {
    name: "Contenitore Tupperware",
    year: 1946,
    description: "Earl Tupper introdusse la plastica flessibile sigillante.",
    image: "images/tupperware.jpg"
  },
  {
    name: "Caffettiera moka",
    year: 1933,
    description: "Inventata da Alfonso Bialetti, è un’icona italiana.",
    image: "images/moka.webp"
  },
  {
    name: "Zanzariera",
    year: -500,
    description: "Usata già nell’antica Cina e in Egitto per proteggere dal malaria.",
    image: "images/zanzariera.jpg"
  },
  {
    name: "Pila elettrica",
    year: 1800,
    description: "Alessandro Volta inventò la prima fonte di energia elettrica continua.",
    image: "images/pila.avif"
  },
  {
    name: "Semaforo",
    year: 1868,
    description: "Il primo fu installato a Londra con segnalazioni a gas.",
    image: "images/semaforo.avif"
  },
  {
    name: "Droni",
    year: 1935,
    description: "Usati inizialmente come bersagli volanti per l’addestramento.",
    image: "images/drone.jpg"
  },
  {
    name: "Forno elettrico",
    year: 1891,
    description: "Brevetto di Thomas Hadaway, rese la cucina più semplice.",
    image: "images/forno_elettrico.jpg"
  },
  {
    name: "Spazzolino da denti",
    year: 1498,
    description: "Inventato in Cina con setole di maiale.",
    image: "images/spazzolino.jpg"
  }
];
