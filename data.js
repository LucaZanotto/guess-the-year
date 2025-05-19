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
  },
  {
    name: "Confucio",
    year: -551,
    description: "Filosofo cinese, le cui idee etiche e politiche plasmarono per secoli l'Asia orientale.",
    image: "images/confucio.jpg"
  },
  {
    name: "Aristotele",
    year: -384,
    description: "Filosofo greco, allievo di Platone e maestro di Alessandro Magno; fondatore del liceo di Atene.",
    image: "images/aristotele.jpg"
  },
  {
    name: "Alessandro Magno",
    year: -356,
    description: "Condottiero macedone che creò uno dei più vasti imperi del mondo antico.",
    image: "images/alessandro_magno.jpg"
  },
  {
    name: "Giulio Cesare",
    year: -100,
    description: "Generale e statista romano, preparò la trasformazione di Roma da repubblica a impero.",
    image: "images/giulio_cesare.jpg"
  },
  {
    name: "Cleopatra VII",
    year: -69,
    description: "Ultima regina dell’Egitto tolemaico, celebre per acume politico e alleanze con Roma.",
    image: "images/cleopatra.jpg"
  },
  {
    name: "Boudica",
    year: 25,
    description: "Regina degli Iceni, guidò la rivolta contro il dominio romano in Britannia.",
    image: "images/boudica.webp"
  },
  {
    name: "Marco Aurelio",
    year: 121,
    description: "Imperatore romano e filosofo stoico, autore dei \"Colloqui con sé stesso\".",
    image: "images/marco_aurelio.jpg"
  },
  {
    name: "Carlo Magno",
    year: 742,
    description: "Re dei Franchi e primo Imperatore del Sacro Romano Impero, promotore della rinascita carolingia.",
    image: "images/carlo_magno.jpg"
  },
  {
    name: "Guglielmo il Conquistatore",
    year: 1028,
    description: "Duca di Normandia che conquistò l’Inghilterra nel 1066, cambiandone per sempre la storia.",
    image: "images/guglielmo_conquistatore.jpg"
  },
  {
    name: "Eleonora d’Aquitania",
    year: 1122,
    description: "Una delle donne più influenti del Medioevo, regina di Francia e poi d’Inghilterra.",
    image: "images/eleonora_aquitania.jpg"
  },
  {
    name: "Gengis Khan",
    year: 1162,
    description: "Fondatore dell’Impero mongolo, creò il più vasto dominio contiguo della storia.",
    image: "images/gengis_khan.jpg"
  },
  {
    name: "Dante Alighieri",
    year: 1265,
    description: "Poeta fiorentino, autore della \"Divina Commedia\", pilastro della lingua italiana.",
    image: "images/dante.webp"
  },
  {
    name: "Giovanna d’Arco",
    year: 1412,
    description: "Eroina francese della guerra dei Cent’anni, venerata come santa.",
    image: "images/giovanna_darco.jpg"
  },
  {
    name: "Leonardo da Vinci",
    year: 1452,
    description: "Artista e inventore rinascimentale, simbolo del genio universale.",
    image: "images/leonardo.jpg"
  },
  {
    name: "Michelangelo Buonarroti",
    year: 1475,
    description: "Scultore, pittore e architetto, autore del David e della Cappella Sistina.",
    image: "images/michelangelo.jpg"
  },
  {
    name: "Martin Lutero",
    year: 1483,
    description: "Teologo tedesco, iniziatore della Riforma protestante con le 95 tesi.",
    image: "images/martin_lutero.jpg"
  },
  {
    name: "Suleiman il Magnifico",
    year: 1494,
    description: "Sultano ottomano al culmine del potere imperiale, promotore di riforme giuridiche.",
    image: "images/suleiman.jpg"
  },
  {
    name: "Galileo Galilei",
    year: 1564,
    description: "Padre della scienza moderna, sostenitore dell’eliocentrismo con osservazioni telescopiche.",
    image: "images/galileo.jpg"
  },
  {
    name: "Isaac Newton",
    year: 1643,
    description: "Fisico inglese, formulò le leggi della gravitazione universale e del moto.",
    image: "images/newton.jpg"
  },
  {
    name: "Pietro il Grande",
    year: 1672,
    description: "Zar che modernizzò la Russia, fondò San Pietroburgo e ampliò i confini imperiali.",
    image: "images/pietro_grande.jpg"
  },
  {
    name: "Voltaire",
    year: 1694,
    description: "Filosofo illuminista francese, difensore della tolleranza e della libertà di pensiero.",
    image: "images/voltaire.jpg"
  },
  {
    name: "Caterina II di Russia",
    year: 1729,
    description: "Imperatrice illuminata, estese e riformò l’Impero russo nel XVIII secolo.",
    image: "images/caterina_grande.jpg"
  },
  {
    name: "George Washington",
    year: 1732,
    description: "Comandante della rivoluzione americana e primo presidente degli Stati Uniti.",
    image: "images/george_washington.jpg"
  },
  {
    name: "Wolfgang Amadeus Mozart",
    year: 1756,
    description: "Compositore austriaco, prodigio della musica classico-viennese.",
    image: "images/mozart.jpg"
  },
  {
    name: "Napoleone Bonaparte",
    year: 1769,
    description: "Generale corso che divenne imperatore, protagonista delle guerre napoleoniche.",
    image: "images/napoleone.jpg"
  },
  {
    name: "Jane Austen",
    year: 1775,
    description: "Scrittrice inglese, autrice di romanzi realistici come \"Orgoglio e pregiudizio\".",
    image: "images/jane_austen.jpg"
  },
  {
    name: "Abraham Lincoln",
    year: 1809,
    description: "16° presidente USA, guidò il Paese durante la guerra civile e abolì la schiavitù.",
    image: "images/lincoln.jpg"
  },
  {
    name: "Ada Lovelace",
    year: 1815,
    description: "Matematica inglese, considerata la prima programmatrice di computer.",
    image: "images/ada_lovelace.jpg"
  },
  {
    name: "Florence Nightingale",
    year: 1820,
    description: "Fondatrice dell’infermieristica moderna, rivoluzionò l’assistenza sanitaria.",
    image: "images/florence_nightingale.jpg"
  },
  {
    name: "Nikola Tesla",
    year: 1856,
    description: "Inventore serbo-statunitense, pioniere della corrente alternata e di numerose innovazioni elettriche.",
    image: "images/tesla.jpg"
  },
  {
    name: "Marie Curie",
    year: 1867,
    description: "Fisica e chimica, prima donna a vincere un Nobel e l’unica a vincerne due in discipline diverse.",
    image: "images/marie_curie.jpg"
  },
  {
    name: "Mahatma Gandhi",
    year: 1869,
    description: "Leader del movimento indipendentista indiano, simbolo della nonviolenza.",
    image: "images/gandhi.jpg"
  },
  {
    name: "Albert Einstein",
    year: 1879,
    description: "Fisico teorico tedesco, noto per la teoria della relatività e il premio Nobel per l’effetto fotoelettrico.",
    image: "images/einstein.jpg"
  },
  {
    name: "Virginia Woolf",
    year: 1882,
    description: "Scrittrice e saggista britannica, figura centrale del modernismo letterario.",
    image: "images/virginia_woolf.jpg"
  },
  {
    name: "Winston Churchill",
    year: 1874,
    description: "Primo ministro britannico durante la Seconda guerra mondiale, noto per la sua oratoria.",
    image: "images/churchill.jpg"
  },
  {
    name: "Pablo Picasso",
    year: 1881,
    description: "Pittore spagnolo, cofondatore del cubismo e rivoluzionario dell’arte del XX secolo.",
    image: "images/picasso.jpg"
  },
  {
    name: "Franklin D. Roosevelt",
    year: 1882,
    description: "Presidente degli Stati Uniti durante la Grande Depressione e la Seconda guerra mondiale.",
    image: "images/roosevelt.jpg"
  },
  {
    name: "Anna Frank",
    year: 1929,
    description: "Giovane ebrea tedesca il cui diario è divenuto simbolo della persecuzione nazista.",
    image: "images/anna_frank.jpg"
  },
  {
    name: "Alan Turing",
    year: 1912,
    description: "Matematico e pioniere dell’informatica, contribuì alla decifrazione di Enigma.",
    image: "images/alan_turing.jpg"
  },
  {
    name: "Rosa Parks",
    year: 1913,
    description: "Attivista afroamericana, figura centrale nella lotta per i diritti civili negli USA.",
    image: "images/rosa_parks.jpg"
  },
  {
    name: "Nelson Mandela",
    year: 1918,
    description: "Leader sudafricano contro l’apartheid e primo presidente nero del Sudafrica.",
    image: "images/mandela.jpg"
  },
  {
    name: "John F. Kennedy",
    year: 1917,
    description: "35º presidente degli Stati Uniti, simbolo di una nuova generazione di leader.",
    image: "images/kennedy.jpg"
  },
  {
    name: "Yuri Gagarin",
    year: 1934,
    description: "Cosmonauta sovietico, primo uomo nello spazio nel 1961.",
    image: "images/gagarin.jpg"
  },
  {
    name: "Martin Luther King Jr.",
    year: 1929,
    description: "Guida del movimento per i diritti civili negli Stati Uniti, premio Nobel per la pace.",
    image: "images/mlk.jpg"
  },
  {
    name: "Stephen Hawking",
    year: 1942,
    description: "Fisico teorico, noto per i suoi studi sui buchi neri e la cosmologia.",
    image: "images/hawking.jpg"
  },
  {
    name: "Margaret Thatcher",
    year: 1925,
    description: "Prima donna a diventare primo ministro del Regno Unito, soprannominata 'la Lady di Ferro'.",
    image: "images/thatcher.jpg"
  },
  {
    name: "Malala Yousafzai",
    year: 1997,
    description: "Attivista pakistana per l’istruzione femminile, la più giovane vincitrice del premio Nobel per la pace.",
    image: "images/malala.jpg"
  },
  {
    name: "Barack Obama",
    year: 1961,
    description: "44º presidente degli Stati Uniti, primo afroamericano a ricoprire la carica.",
    image: "images/obama.webp"
  },
  {
    name: "Elon Musk",
    year: 1971,
    description: "Imprenditore e innovatore sudafricano-statunitense, fondatore di SpaceX, Tesla e cofondatore di Neuralink.",
    image: "images/elon_musk.jpg"
  },
  {
    name: "Greta Thunberg",
    year: 2003,
    description: "Attivista svedese per il clima, simbolo della mobilitazione giovanile contro il cambiamento climatico.",
    image: "images/greta_thunberg.jpg"
  }

];
