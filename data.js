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
  },
  {
    name: "Simón Bolívar",
    year: 1783,
    description: "South American revolutionary leader who liberated several countries from Spanish rule.",
    image: "images/bolivar.jpg"
  },
  {
    name: "Harriet Tubman",
    year: 1822,
    description: "American abolitionist who led enslaved people to freedom via the Underground Railroad.",
    image: "images/tubman.webp"
  },
  {
    name: "Frida Kahlo",
    year: 1907,
    description: "Mexican painter known for her self-portraits and exploration of identity and suffering.",
    image: "images/kahlo.jpg"
  },
  {
    name: "Otto von Bismarck",
    year: 1815,
    description: "German statesman who unified Germany and served as its first chancellor.",
    image: "images/bismarck.jpg"
  },
  {
    name: "Sojourner Truth",
    year: 1797,
    description: "African-American abolitionist and women’s rights activist, known for her speeches on equality.",
    image: "images/truth.jpg"
  },
  {
    name: "Hammurabi",
    year: -1810,
    description: "Babylonian king known for one of the earliest legal codes in history.",
    image: "images/hammurabi.jpg"
  },
  {
    name: "Karl Marx",
    year: 1818,
    description: "German philosopher and economist, co-author of 'The Communist Manifesto'.",
    image: "images/marx.jpg"
  },
  {
    name: "Emmeline Pankhurst",
    year: 1858,
    description: "British political activist and leader of the suffragette movement for women's voting rights.",
    image: "images/pankhurst.jpg"
  },
  {
    name: "Che Guevara",
    year: 1928,
    description: "Argentinian revolutionary who played a key role in the Cuban Revolution.",
    image: "images/che_guevara.avif"
  },
  {
    name: "Alexander Fleming",
    year: 1881,
    description: "Scottish biologist who discovered penicillin, revolutionizing medicine.",
    image: "images/fleming.jpg"
  },
  {
    name: "Mahatma Phule",
    year: 1827,
    description: "Indian social reformer who worked for the education and rights of lower castes and women.",
    image: "images/phule.jpg"
  },
  {
    name: "Hypatia",
    year: 360,
    description: "Greek philosopher, mathematician, and astronomer, one of the first known female scholars.",
    image: "images/hypatia.jpg"
  },
  {
    name: "Lech Wałęsa",
    year: 1943,
    description: "Polish labor leader and Nobel Peace Prize laureate, key figure in ending communism in Poland.",
    image: "images/walesa.jpg"
  },
  {
    name: "Benazir Bhutto",
    year: 1953,
    description: "First woman to lead a Muslim-majority nation, Prime Minister of Pakistan.",
    image: "images/bhutto.jpg"
  },
  {
    name: "Hatshepsut",
    year: -1507,
    description: "One of the few female pharaohs of ancient Egypt, known for her prosperous reign.",
    image: "images/hatshepsut.jpg"
  },
  {
    name: "Ada Yonath",
    year: 1939,
    description: "Israeli crystallographer and Nobel laureate for her work on the structure of ribosomes.",
    image: "images/yonath.webp"
  },
  {
    name: "Akbar the Great",
    year: 1542,
    description: "Mughal emperor known for his military conquests and policy of religious tolerance.",
    image: "images/akbar.jpg"
  },
  {
    name: "Tsai Ing-wen",
    year: 1956,
    description: "First female president of Taiwan, known for progressive leadership and democratic values.",
    image: "images/tsai.jpg"
  },
  {
    name: "Rachel Carson",
    year: 1907,
    description: "American marine biologist and author of 'Silent Spring', key figure in the environmental movement.",
    image: "images/carson.jpg"
  },
  {
    name: "Desmond Tutu",
    year: 1931,
    description: "South African bishop and human rights activist who opposed apartheid.",
    image: "images/tutu.jpg"
  },
  {
    name: "Tenzing Norgay",
    year: 1914,
    description: "Nepalese mountaineer who, with Edmund Hillary, was the first to summit Mount Everest.",
    image: "images/norgay.jpg"
  },
  {
    name: "Cleisthenes",
    year: -570,
    description: "Athenian reformer known as the 'father of democracy' for his political innovations.",
    image: "images/cleisthenes.webp"
  },
  {
    name: "Marsha P. Johnson",
    year: 1945,
    description: "African-American LGBTQ+ activist and key figure in the Stonewall uprising.",
    image: "images/johnson.jpg"
  },
  {
    name: "Tokugawa Ieyasu",
    year: 1543,
    description: "Founder of the Tokugawa shogunate, which ruled Japan for over 250 years.",
    image: "images/ieyasu.jpg"
  },
  {
    name: "Antoine Lavoisier",
    year: 1743,
    description: "French chemist known as the 'father of modern chemistry' for his discovery of oxygen's role in combustion.",
    image: "images/lavoisier.jpg"
  },
  {
    name: "Foundation of Rome",
    year: -753,
    description: "Legendary founding of the city of Rome, marking the beginning of Roman civilization.",
    image: "images/foundation_rome.webp"
  },
  {
    name: "Battle of Marathon",
    year: -490,
    description: "Decisive Greek victory against Persia, symbol of Western resistance to invasion.",
    image: "images/marathon.jpg"
  },
  {
    name: "Assassination of Julius Caesar",
    year: -44,
    description: "Turning point that led to the fall of the Roman Republic and rise of the Empire.",
    image: "images/caesar_assassination.jpg"
  },
  {
    name: "Birth of Jesus Christ",
    year: 0,
    description: "Event marking the start of the Gregorian calendar and the foundation of Christianity.",
    image: "images/birth_christ.jpg"
  },
  {
    name: "Fall of the Western Roman Empire",
    year: 476,
    description: "Collapse of the Roman Empire in the West, traditionally marking the start of the Middle Ages.",
    image: "images/fall_rome.jpg"
  },
  {
    name: "Battle of Hastings",
    year: 1066,
    description: "Norman conquest of England, dramatically altering its culture and governance.",
    image: "images/hastings.webp"
  },
  {
    name: "Signing of the Magna Carta",
    year: 1215,
    description: "First document to limit the power of the English king, foundation for constitutional law.",
    image: "images/magna_carta.jpg"
  },
  {
    name: "Fall of Constantinople",
    year: 1453,
    description: "Ottoman capture of Constantinople, ending the Byzantine Empire and shifting power to the East.",
    image: "images/constantinople.webp"
  },
  {
    name: "Columbus Reaches America",
    year: 1492,
    description: "Christopher Columbus's voyage to the Americas, opening the Age of Exploration.",
    image: "images/columbus.jpg"
  },
  {
    name: "Defeat of the Spanish Armada",
    year: 1588,
    description: "England's victory over Spain marked the rise of British naval power.",
    image: "images/spanish_armada.webp"
  },
  {
    name: "English Civil War Begins",
    year: 1642,
    description: "Conflict between monarchy and Parliament leading to a brief republic under Cromwell.",
    image: "images/english_civil_war.jpg"
  },
  {
    name: "American Declaration of Independence",
    year: 1776,
    description: "Birth of the United States through a declaration of freedom from British rule.",
    image: "images/declaration_independence.jpg"
  },
  {
    name: "French Revolution",
    year: 1789,
    description: "Major social and political upheaval that ended absolute monarchy in France.",
    image: "images/french_revolution.jpg"
  },
  {
    name: "Battle of Waterloo",
    year: 1815,
    description: "Napoleon’s final defeat, ending his rule and reshaping Europe.",
    image: "images/waterloo.jpg"
  },
  {
    name: "American Civil War Begins",
    year: 1861,
    description: "Conflict over slavery and states' rights that defined the United States.",
    image: "images/civil_war.jpg"
  },
  {
    name: "Assassination of Archduke Franz Ferdinand",
    year: 1914,
    description: "Sparked World War I, one of the deadliest conflicts in history.",
    image: "images/franz_ferdinand.jpg"
  },
  {
    name: "Russian Revolution",
    year: 1917,
    description: "Overthrew the Tsarist regime and established the world’s first communist state.",
    image: "images/russian_revolution.jpg"
  },
  {
    name: "Stock Market Crash",
    year: 1929,
    description: "Triggered the Great Depression, a global economic crisis.",
    image: "images/stock_crash.webp"
  },
  {
    name: "D-Day Landings",
    year: 1944,
    description: "Allied invasion of Normandy that marked a turning point in World War II.",
    image: "images/d_day.jpg"
  },
  {
    name: "Atomic Bombing of Hiroshima",
    year: 1945,
    description: "First use of nuclear weapons in war, ending WWII and beginning the nuclear age.",
    image: "images/hiroshima.jpg"
  },
  {
    name: "Fall of the Berlin Wall",
    year: 1989,
    description: "Symbolic end of the Cold War and communist regimes in Eastern Europe.",
    image: "images/berlin_wall.jpg"
  },
  {
    name: "September 11 Attacks",
    year: 2001,
    description: "Terrorist attacks that reshaped global politics and security policies.",
    image: "images/911.jpg"
  }
]