const data = [
  {
    name: "Mobile phone",
    year: 1973,
    description: "The first prototype was developed by Motorola.",
    image: "images/telefonocellulare.jpg"
  },
  {
    name: "Internet",
    year: 1983,
    description: "Year of official adoption of the TCP/IP protocol.",
    image: "images/internet.jpg"
  },
  {
    name: "3D Printer",
    year: 1984,
    description: "Chuck Hull invented stereolithography.",
    image: "images/stampante3d.jpg"
  },
  {
    name: "Barcode",
    year: 1974,
    description: "Scanned for the first time in an Ohio supermarket.",
    image: "images/codiceabarre.jpg"
  },
  {
    name: "Credit card",
    year: 1950,
    description: "The first was Diners Club, introduced in the USA.",
    image: "images/carta_di_credito.avif"
  },
  {
    name: "Post-it",
    year: 1977,
    description: "Invented by 3M as removable bookmarks.",
    image: "images/postit.webp"
  },
  {
    name: "Bluetooth",
    year: 1999,
    description: "Short-range wireless standard.",
    image: "images/bluetooth.png"
  },
  {
    name: "USB stick",
    year: 2000,
    description: "Introduced by IBM and Trek Technology.",
    image: "images/pendrive.png"
  },
  {
    name: "Wikipedia",
    year: 2001,
    description: "Launched as a free online encyclopedia.",
    image: "images/wikipedia.png"
  },
  {
    name: "iPhone",
    year: 2007,
    description: "The first smartphone launched by Apple.",
    image: "images/iphone.avif"
  },
  {
    name: "Netflix (streaming)",
    year: 2007,
    description: "From DVD rental to on-demand streaming.",
    image: "images/netflix.jpg"
  },
  {
    name: "Instagram",
    year: 2010,
    description: "Photo sharing app originally called Burbn.",
    image: "images/instagram.avif"
  },
  {
    name: "Bitcoin",
    year: 2009,
    description: "The first blockchain block was mined by Satoshi Nakamoto.",
    image: "images/bitcoin.avif"
  },
  {
    name: "Tetris",
    year: 1984,
    description: "Created by Alexey Pajitnov in the USSR.",
    image: "images/tetris.jpg"
  },
  {
    name: "Pac-Man",
    year: 1980,
    description: "Created by Namco, one of the most famous arcade games.",
    image: "images/pacman.png"
  },
  {
    name: "YouTube",
    year: 2005,
    description: "The first uploaded video is titled 'Me at the zoo'.",
    image: "images/youtube.webp"
  },
  {
    name: "Digital camera",
    year: 1975,
    description: "Kodak developed the first prototype.",
    image: "images/fotocamera_digitale.avif"
  },
  {
    name: "Computer mouse",
    year: 1967,
    description: "Douglas Engelbart created the first example.",
    image: "images/mouse.avif"
  },
  {
    name: "Google",
    year: 1998,
    description: "Founded by Larry Page and Sergey Brin.",
    image: "images/google.webp"
  },
  {
    name: "WhatsApp",
    year: 2009,
    description: "Created by Jan Koum and Brian Acton.",
    image: "images/whatsapp.avif"
  },
  {
    name: "Steam engine",
    year: 1712,
    description: "Thomas Newcomen built the first usable steam engine.",
    image: "images/macchina_vapore.webp"
  },
  {
    name: "Movable type printing",
    year: 1453,
    description: "Invented by Johannes Gutenberg, revolutionized book distribution.",
    image: "images/stampa_mobili.png"
  },
  {
    name: "Compass",
    year: 1100,
    description: "Invented in China for navigation.",
    image: "images/bussola.avif"
  },
  {
    name: "Wheel",
    year: -3500,
    description: "One of humanity’s earliest major mechanical inventions.",
    image: "images/ruota.jpg"
  },
  {
    name: "Paper",
    year: 105,
    description: "Invented in China by Cai Lun.",
    image: "images/carta.webp"
  },
  {
	name: "Light bulb",
	year: 1879,
	description: "Thomas Edison patented the first commercially viable light bulb.",
	image: "images/lampadina.jpg"
  },
  {
	name: "Radio",
	year: 1895,
	description: "Guglielmo Marconi made the first radio transmission.",
	image: "images/radio.avif"
  },
  {
	name: "Airplane",
	year: 1903,
	description: "The Wright brothers made the first controlled flight.",
	image: "images/aereo.jpg"
  },
  {
	name: "Automobile",
	year: 1886,
	description: "Karl Benz built the first functioning motor vehicle.",
	image: "images/automobile.jpg"
  },
  {
	name: "Penicillin",
	year: 1928,
	description: "Alexander Fleming discovered the first antibiotic.",
	image: "images/penicillina.jpg"
  },
  {
	name: "Telegraph",
	year: 1837,
	description: "Samuel Morse developed the electric telegraph.",
	image: "images/telegrafo.webp"
  },
  {
	name: "Telephone",
	year: 1876,
	description: "Alexander Graham Bell patented the telephone.",
	image: "images/telefono.jpg"
  },
  {
	name: "Television",
	year: 1927,
	description: "Philo Farnsworth demonstrated the first television.",
	image: "images/televisione.jpg"
  },
  {
	name: "Microscope",
	year: 1590,
	description: "Zacharias Janssen developed one of the first microscopes.",
	image: "images/microscopio.avif"
  },
  {
	name: "Microwave oven",
	year: 1945,
	description: "Percy Spencer discovered microwave cooking by accident.",
	image: "images/microonde.jpg"
  },
  {
	name: "Mechanical clock",
	year: 1300,
	description: "Originally used in monasteries to mark the hours.",
	image: "images/orologio_meccanico.jpg"
  },
  {
	name: "Parachute",
	year: 1783,
	description: "Louis-Sébastien Lenormand made the first documented jump.",
	image: "images/paracadute.jpg"
  },
  {
	name: "Submarine",
	year: 1620,
	description: "Cornelis Drebbel built the first functional submarine.",
	image: "images/sottomarino.jpg"
  },
  {
	name: "Rocket",
	year: 1926,
	description: "Robert Goddard launched the first liquid-fuel rocket.",
	image: "images/razzo.webp"
  },
  {
	name: "Steam train",
	year: 1804,
	description: "Richard Trevithick built the first steam locomotive.",
	image: "images/treno_vapore.jpg"
  },
  {
	name: "Photography",
	year: 1826,
	description: "Nicéphore Niépce took the first permanent photograph.",
	image: "images/fotografia.jpg"
  },
  {
	name: "Velcro",
	year: 1941,
	description: "George de Mestral invented the system inspired by burrs.",
	image: "images/velcro.jpg"
  },
  {
	name: "Bicycle",
	year: 1817,
	description: "Karl Drais created the draisine, prototype of the modern bike.",
	image: "images/bicicletta.webp"
  },
  {
	name: "Vacuum cleaner",
	year: 1901,
	description: "Hubert Cecil Booth invented the first electric vacuum cleaner.",
	image: "images/aspirapolvere.jpg"
  },
  {
	name: "Gas turbine",
	year: 1939,
	description: "Sir Frank Whittle developed the first operational jet engine.",
	image: "images/turbina.jpg"
  },
  {
	name: "Laser",
	year: 1960,
	description: "Theodore Maiman built the first working laser.",
	image: "images/laser.jpg"
  },
  {
	name: "Zipper",
	year: 1913,
	description: "Gideon Sundback perfected the modern design.",
	image: "images/cerniera.jpg"
  },
  {
	name: "Toilet paper",
	year: 1857,
	description: "Joseph Gayetty was the first to market it in the USA.",
	image: "images/cartaigienica.jpg"
  },
  {
	name: "Eyeglasses",
	year: 1286,
	description: "Invented in Italy to correct vision.",
	image: "images/occhiali.webp"
  },
  {
	name: "Fork",
	year: 1000,
	description: "Originated in Byzantium, gradually adopted in Europe.",
	image: "images/forchetta.jpg"
  },
  {
	name: "Automatic car wash",
	year: 1946,
	description: "Introduced in the USA, revolutionized car cleaning.",
	image: "images/autolavaggio.jpg"
  },
  {
	name: "Cinematograph",
	year: 1895,
	description: "The Lumière brothers projected the first public film.",
	image: "images/cinematografo.jpg"
  },
  {
	name: "Air conditioner",
	year: 1902,
	description: "Willis Carrier designed the first modern system.",
	image: "images/climatizzatore.jpg"
  },
  {
	name: "GPS",
	year: 1978,
	description: "Initially developed for military purposes by the USA.",
	image: "images/gps.jpg"
  },
  {
	name: "Microchip",
	year: 1958,
	description: "Jack Kilby developed the first prototype.",
	image: "images/microchip.jpg"
  },
  {
	name: "Tupperware container",
	year: 1946,
	description: "Earl Tupper introduced flexible sealing plastic.",
	image: "images/tupperware.jpg"
  },
  {
	name: "Moka coffee pot",
	year: 1933,
	description: "Invented by Alfonso Bialetti, an Italian icon.",
	image: "images/moka.webp"
  },
  {
	name: "Mosquito net",
	year: -500,
	description: "Used since ancient China and Egypt to protect from malaria.",
	image: "images/zanzariera.jpg"
  },
  {
	name: "Electric battery",
	year: 1800,
	description: "Alessandro Volta invented the first continuous electric power source.",
	image: "images/pila.avif"
  },
  {
	name: "Traffic light",
	year: 1868,
	description: "The first was installed in London with gas signals.",
	image: "images/semaforo.avif"
  },
  {
	name: "Drones",
	year: 1935,
	description: "Initially used as flying targets for training.",
	image: "images/drone.jpg"
  },
  {
	name: "Electric oven",
	year: 1891,
	description: "Patented by Thomas Hadaway, simplified cooking.",
	image: "images/forno_elettrico.jpg"
  },
  {
	name: "Toothbrush",
	year: 1498,
	description: "Invented in China with pig bristles.",
	image: "images/spazzolino.jpg"
  },
  {
	name: "Confucius",
	year: -551,
	description: "Chinese philosopher whose ethical and political ideas shaped East Asia for centuries.",
	image: "images/confucio.jpg"
  },
  {
	name: "Aristotle",
	year: -384,
	description: "Greek philosopher, student of Plato and teacher of Alexander the Great; founder of the Lyceum.",
	image: "images/aristotele.jpg"
  },
  {
	name: "Alexander the Great",
	year: -356,
	description: "Macedonian commander who created one of the largest empires of the ancient world.",
	image: "images/alessandro_magno.jpg"
  },
  {
	name: "Julius Caesar",
	year: -100,
	description: "Roman general and statesman, paved the way for the transformation from Republic to Empire.",
	image: "images/giulio_cesare.jpg"
  },
  {
	name: "Cleopatra VII",
	year: -69,
	description: "Last queen of Ptolemaic Egypt, known for her political acumen and alliances with Rome.",
	image: "images/cleopatra.jpg"
  },
  {
	name: "Boudica",
	year: 25,
	description: "Queen of the Iceni, led a revolt against Roman rule in Britain.",
	image: "images/boudica.webp"
  },
  {
	name: "Marcus Aurelius",
	year: 121,
	description: "Roman emperor and Stoic philosopher, author of 'Meditations'.",
	image: "images/marco_aurelio.jpg"
  },
  {
	name: "Charlemagne",
	year: 742,
	description: "King of the Franks and first Emperor of the Holy Roman Empire, promoter of the Carolingian Renaissance.",
	image: "images/carlo_magno.jpg"
  },
  {
	name: "William the Conqueror",
	year: 1028,
	description: "Duke of Normandy who conquered England in 1066, forever changing its history.",
	image: "images/guglielmo_conquistatore.jpg"
  },
  {
	name: "Eleanor of Aquitaine",
	year: 1122,
	description: "One of the most influential women of the Middle Ages, queen of France and then of England.",
	image: "images/eleonora_aquitania.jpg"
  },
  {
	name: "Genghis Khan",
	year: 1162,
	description: "Founder of the Mongol Empire, created the largest contiguous empire in history.",
	image: "images/gengis_khan.jpg"
  },
  {
	name: "Dante Alighieri",
	year: 1265,
	description: "Florentine poet, author of the 'Divine Comedy', a pillar of the Italian language.",
	image: "images/dante.webp"
  },
  {
    name: "Joan of Arc",
    year: 1412,
    description: "French heroine of the Hundred Years' War, venerated as a saint.",
    image: "images/giovanna_darco.jpg"
  },
  {
    name: "Leonardo da Vinci",
    year: 1452,
    description: "Renaissance artist and inventor, symbol of universal genius.",
    image: "images/leonardo.jpg"
  },
  {
    name: "Michelangelo Buonarroti",
    year: 1475,
    description: "Sculptor, painter, and architect, author of the David and the Sistine Chapel.",
    image: "images/michelangelo.jpg"
  },
  {
    name: "Martin Luther",
    year: 1483,
    description: "German theologian, initiator of the Protestant Reformation with the 95 Theses.",
    image: "images/martin_lutero.jpg"
  },
  {
    name: "Suleiman the Magnificent",
    year: 1494,
    description: "Ottoman sultan at the height of imperial power, promoter of legal reforms.",
    image: "images/suleiman.jpg"
  },
  {
    name: "Galileo Galilei",
    year: 1564,
    description: "Father of modern science, supporter of heliocentrism with telescopic observations.",
    image: "images/galileo.jpg"
  },
  {
    name: "Isaac Newton",
    year: 1643,
    description: "English physicist, formulated the laws of universal gravitation and motion.",
    image: "images/newton.jpg"
  },
  {
    name: "Peter the Great",
    year: 1672,
    description: "Tsar who modernized Russia, founded Saint Petersburg, and expanded imperial borders.",
    image: "images/pietro_grande.jpg"
  },
  {
    name: "Voltaire",
    year: 1694,
    description: "French Enlightenment philosopher, defender of tolerance and freedom of thought.",
    image: "images/voltaire.jpg"
  },
  {
    name: "Catherine II of Russia",
    year: 1729,
    description: "Enlightened empress, expanded and reformed the Russian Empire in the 18th century.",
    image: "images/caterina_grande.jpg"
  },
  {
    name: "George Washington",
    year: 1732,
    description: "Commander of the American Revolution and first president of the United States.",
    image: "images/george_washington.jpg"
  },
  {
    name: "Wolfgang Amadeus Mozart",
    year: 1756,
    description: "Austrian composer, prodigy of Viennese classical music.",
    image: "images/mozart.jpg"
  },
  {
    name: "Napoleon Bonaparte",
    year: 1769,
    description: "Corsican general who became emperor, protagonist of the Napoleonic Wars.",
    image: "images/napoleone.jpg"
  },
  {
    name: "Jane Austen",
    year: 1775,
    description: "English novelist, author of realistic novels like 'Pride and Prejudice'.",
    image: "images/jane_austen.jpg"
  },
  {
    name: "Abraham Lincoln",
    year: 1809,
    description: "16th president of the USA, led the country during the Civil War",
    image: "images/lincoln.jpg"
  },
  {
    name: "Ada Lovelace",
    year: 1815,
    description: "English mathematician, considered the first computer programmer.",
    image: "images/ada_lovelace.jpg"
  },
  {
    name: "Florence Nightingale",
    year: 1820,
    description: "Founder of modern nursing, revolutionized healthcare.",
    image: "images/florence_nightingale.jpg"
  },
  {
    name: "Nikola Tesla",
    year: 1856,
    description: "Serbo-American inventor, pioneer of alternating current and numerous electrical innovations.",
    image: "images/tesla.jpg"
  },
  {
    name: "Marie Curie",
    year: 1867,
    description: "Physicist and chemist, first",
    image: "images/marie_curie.jpg"
  },
  {
    name: "Mahatma Gandhi",
    year: 1869,
    description: "Leader of the Indian independence movement, symbol of nonviolence.",
    image: "images/gandhi.jpg"
  },
  {
    name: "Albert Einstein",
    year: 1879,
    description: "German theoretical physicist, known for the theory of relativity and Nobel Prize for the photoelectric effect.",
    image: "images/einstein.jpg"
  },
  {
    name: "Virginia Woolf",
    year: 1882,
    description: "British writer and essayist, central figure of literary modernism.",
    image: "images/virginia_woolf.jpg"
  },
  {
    name: "Winston Churchill",
    year: 1874,
    description: "British Prime Minister during World War II, known for his oratory.",
    image: "images/churchill.jpg"
  },
  {
    name: "Pablo Picasso",
    year: 1881,
    description: "Spanish painter, co-founder of Cubism and revolutionary of 20th-century art.",
    image: "images/picasso.jpg"
  },
  {
    name: "Franklin D. Roosevelt",
    year: 1882,
    description: "President of the United States during the Great Depression and World War II.",
    image: "images/roosevelt.jpg"
  },
  {
    name: "Anna Frank",
    year: 1929,
    description: "Young German Jewish girl whose diary has become a symbol of Nazi persecution.",
    image: "images/anna_frank.jpg"
  },
  {
    name: "Alan Turing",
    year: 1912,
    description: "Mathematician and pioneer of computer science, contributed to the decryption of Enigma.",
    image: "images/alan_turing.jpg"
  },
  {
    name: "Rosa Parks",
    year: 1913,
    description: "African American activist, key figure in the civil rights movement in the USA.",
    image: "images/rosa_parks.jpg"
  },
  {
    name: "Nelson Mandela",
    year: 1918,
    description: "South African leader against apartheid and first black president of South Africa.",
    image: "images/mandela.jpg"
  },
  {
    name: "John F. Kennedy",
    year: 1917,
    description: "35th President of the United States, symbol of a new generation of leaders.",
    image: "images/kennedy.jpg"
  },
  {
    name: "Yuri Gagarin",
    year: 1934,
    description: "Soviet cosmonaut, first man in space in 1961.",
    image: "images/gagarin.jpg"
  },
  {
    name: "Martin Luther King Jr.",
    year: 1929,
    description: "Leader of the civil rights movement in the United States, Nobel Peace Prize laureate.",
    image: "images/mlk.jpg"
  },
  {
    name: "Stephen Hawking",
    year: 1942,
    description: "Theoretical physicist, known for his studies on black holes and cosmology.",
    image: "images/hawking.jpg"
  },
  {
    name: "Margaret Thatcher",
    year: 1925,
    description: "First woman to become Prime Minister of the United Kingdom, nicknamed 'The Iron Lady'.",
    image: "images/thatcher.jpg"
  },
  {
    name: "Malala Yousafzai",
    year: 1997,
    description: "Pakistani activist for female education, youngest Nobel Peace Prize laureate.",
    image: "images/malala.jpg"
  },
  {
    name: "Barack Obama",
    year: 1961,
    description: "44th President of the United States, first African American to hold the office.",
    image: "images/obama.webp"
  },
  {
    name: "Elon Musk",
    year: 1971,
    description: "South African-American entrepreneur and innovator, founder of SpaceX, Tesla, and co-founder of Neuralink.",
    image: "images/elon_musk.jpg"
  },
  {
    name: "Greta Thunberg",
    year: 2003,
    description: "Swedish climate activist, symbol of youth mobilization against climate change.",
    image: "images/greta_thunberg.jpg"
  }

]