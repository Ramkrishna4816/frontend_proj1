// SVG ViewBox: 0 0 611.86 695.70
// All pos {x, y} values are in SVG coordinate space to match the map paths

export const statesData = {
  ka: {
    id: "ka",
    name: "Karnataka",
    speciality: "Land of Sandalwood & Silk",
    facts: [
      "Karnataka is the largest producer of sandalwood in the world.",
      "Home to one of the richest biodiversity hotspots — the Western Ghats.",
      "Bangalore is known as the Silicon Valley of India.",
      "Karnataka has the highest number of UNESCO World Heritage Sites in South India.",
      "The state is the largest exporter of coffee in India.",
      "It features a diverse landscape from pristine beaches to rolling hills.",
      "The majestic Jog Falls is one of the highest plunge waterfalls in India."
    ],
    moreFacts: [
      "Karnataka produces over 70% of India's coffee.",
      "The state has the second largest number of waterfalls in the world.",
      "Mysore Palace is one of the most visited monuments in India.",
      "Karnataka is the birthplace of Carnatic music legend Purandaradasa.",
      "The state has over 500 wildlife sanctuaries and national parks.",
      "Hampi was once the second largest city in the world after Beijing."
    ],
    stats: {
      distance: "520 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Hampi",
        img: "/images/ka-hampi.jpg",
        desc: "Ancient ruined city of the Vijayanagara Empire, a UNESCO World Heritage Site."
      },
      {
        name: "Coorg",
        img: "/images/ka-coorg.jpg",
        desc: "The Scotland of India — lush coffee plantations and misty hills."
      },
      {
        name: "Mysore",
        img: "/images/ka-mysore.jpg",
        desc: "The City of Palaces, famous for Dasara celebrations and silk sarees."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Hampi",
        img: "/images/ka-hampi.jpg",
        pos: { x: 171, y: 468 }
      },
      {
        day: "Day 2",
        name: "Coorg",
        img: "/images/ka-coorg.jpg",
        pos: { x: 139, y: 558 }
      },
      {
        day: "Day 3",
        name: "Mysore",
        img: "/images/ka-mysore.jpg",
        pos: { x: 157, y: 549 }
      }
    ]
  },

  mh: {
    id: "mh",
    name: "Maharashtra",
    speciality: "Land of Forts & Bollywood",
    facts: [
      "Maharashtra is India's richest state by GDP.",
      "Mumbai is home to the world's largest film industry — Bollywood.",
      "The state has over 350 forts built by Chhatrapati Shivaji Maharaj.",
      "Maharashtra is the largest producer of onions in India.",
      "It boasts the first passenger train in India, which ran from Mumbai to Thane in 1853.",
      "The state features an incredibly long and scenic Konkan coastline.",
      "Tadoba National Park is one of its oldest and largest tiger reserves."
    ],
    moreFacts: [
      "The Ajanta and Ellora Caves are UNESCO World Heritage Sites.",
      "Maharashtra has India's longest coastline among non-coastal states.",
      "Pune is called the Oxford of the East for its many universities.",
      "The famous Wari pilgrimage attracts over 1 million devotees annually.",
      "Maharashtra produces 40% of India's total industrial output.",
      "Nashik is known as the Wine Capital of India."
    ],
    stats: {
      distance: "340 km",
      season: "Nov – Feb"
    },
    places: [
      {
        name: "Mumbai",
        img: "/images/mh-mumbai.jpg",
        desc: "The City of Dreams — Gateway of India, Marine Drive, and Bollywood."
      },
      {
        name: "Ajanta Caves",
        img: "/images/mh-ajanta.jpg",
        desc: "2nd century BCE Buddhist rock-cut caves with stunning murals."
      },
      {
        name: "Lonavala",
        img: "/images/mh-lonavala.jpg",
        desc: "A scenic hill station near Pune famous for its fudge and waterfalls."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Mumbai",
        img: "/images/mh-mumbai.jpg",
        pos: { x: 100, y: 437 }
      },
      {
        day: "Day 2",
        name: "Lonavala",
        img: "/images/mh-lonavala.jpg",
        pos: { x: 111, y: 430 }
      },
      {
        day: "Day 3",
        name: "Aurangabad",
        img: "/images/mh-ajanta.jpg",
        pos: { x: 162, y: 392 }
      }
    ]
  },

  tn: {
    id: "tn",
    name: "Tamil Nadu",
    speciality: "Land of Temples & Classical Arts",
    facts: [
      "Tamil is one of the world's oldest living classical languages.",
      "Tamil Nadu has the highest number of temples in India — over 38,000.",
      "The state is India's largest producer of bananas and flowers.",
      "Chennai is the Detroit of South Asia due to its auto industry.",
      "It is home to the southern tip of the Indian peninsula, Kanyakumari.",
      "The state is widely known for its incredibly delicious Chettinad cuisine.",
      "The Nilgiri Mountain Railway is a famous UNESCO World Heritage site."
    ],
    moreFacts: [
      "Bharatanatyam, one of India's oldest dance forms, originates here.",
      "The Chola dynasty built some of the world's largest temples.",
      "Tamil Nadu has the longest beach road in Asia — Marina Beach.",
      "The state produces 40% of India's leather goods.",
      "Kanchipuram is famous for its handwoven silk sarees since ancient times.",
      "Ooty is known as the Queen of Hill Stations."
    ],
    stats: {
      distance: "680 km",
      season: "Nov – Mar"
    },
    places: [
      {
        name: "Chennai",
        img: "/images/tn-chennai.jpg",
        desc: "The cultural capital with Marina Beach, Kapaleeshwarar Temple, and more."
      },
      {
        name: "Madurai",
        img: "/images/tn-madurai.jpg",
        desc: "The Temple City — home to the magnificent Meenakshi Amman Temple."
      },
      {
        name: "Ooty",
        img: "/images/tn-ooty.jpg",
        desc: "Queen of Hill Stations with the UNESCO-listed Nilgiri Mountain Railway."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Chennai",
        img: "/images/tn-chennai.jpg",
        pos: { x: 238, y: 563 }
      },
      {
        day: "Day 2",
        name: "Ooty",
        img: "/images/tn-ooty.jpg",
        pos: { x: 182, y: 591 }
      },
      {
        day: "Day 3",
        name: "Madurai",
        img: "/images/tn-madurai.jpg",
        pos: { x: 203, y: 621 }
      }
    ]
  },

  tg: {
    id: "tg",
    name: "Telangana",
    speciality: "Land of Pearls & Nizams",
    facts: [
      "Hyderabad is the largest producer of pearls in the world.",
      "Telangana is home to the Kakatiya dynasty's architectural marvels.",
      "The state has the largest number of water bodies in India.",
      "Hyderabad's Charminar was built in 1591 CE.",
      "It shares its borders with Maharashtra, Karnataka, Chhattisgarh, and Andhra Pradesh.",
      "The Ramappa Temple is known for its intricate sandbox foundation technology.",
      "Pochampally Ikat sarees from Telangana are globally renowned."
    ],
    moreFacts: [
      "Telangana became India's 29th state in June 2014.",
      "The state is a global hub for the pharmaceutical industry.",
      "Warangal Fort is a masterpiece of Kakatiya architecture.",
      "Telangana has over 1,000 lakes and tanks.",
      "The famous Hyderabadi Biryani originated in the Nizam's royal kitchens.",
      "HITEC City in Hyderabad is one of Asia's top tech hubs."
    ],
    stats: {
      distance: "280 km",
      season: "Oct – Feb"
    },
    places: [
      {
        name: "Hyderabad",
        img: "/images/tg-hyderabad.jpg",
        desc: "The City of Nizams — Charminar, Golconda Fort, and world-famous biryani."
      },
      {
        name: "Warangal",
        img: "/images/tg-warangal.jpg",
        desc: "Ancient Kakatiya capital with the iconic Thousand Pillar Temple."
      },
      {
        name: "Nagarjunasagar",
        img: "/images/tg-nagarjunasagar.jpg",
        desc: "One of the world's largest masonry dams and a Buddhist heritage site."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Hyderabad",
        img: "/images/tg-hyderabad.jpg",
        pos: { x: 218, y: 452 }
      },
      {
        day: "Day 2",
        name: "Warangal",
        img: "/images/tg-warangal.jpg",
        pos: { x: 252, y: 440 }
      },
      {
        day: "Day 3",
        name: "Nagarjunasagar",
        img: "/images/tg-nagarjunasagar.jpg",
        pos: { x: 228, y: 475 }
      }
    ]
  },

  ap: {
    id: "ap",
    name: "Andhra Pradesh",
    speciality: "Land of Spices & Silk",
    facts: [
      "Andhra Pradesh is the largest producer of chillies in the world.",
      "The state has the longest coastline in peninsular India — 974 km.",
      "Tirupati Balaji Temple is the richest and most visited temple in the world.",
      "AP is a major producer of tobacco, groundnuts, and rice.",
      "The Kondapalli toys made from soft wood are a famous handicraft of the state.",
      "It is bordered by the Bay of Bengal to the east.",
      "The Borra Caves found here are amongst the deepest and largest in India."
    ],
    moreFacts: [
      "Andhra Pradesh was divided into AP and Telangana in 2014.",
      "The famous Kuchipudi dance form originates from this state.",
      "Visakhapatnam is home to India's oldest shipyard.",
      "The state has the second largest Buddhist circuit in India.",
      "Araku Valley coffee is exported globally as a premium product.",
      "AP has one of the largest manganese deposits in Asia."
    ],
    stats: {
      distance: "450 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Visakhapatnam",
        img: "/images/ap-visakhapatnam.jpg",
        desc: "The City of Destiny — beautiful beaches, a submarine museum, and hills."
      },
      {
        name: "Araku Valley",
        img: "/images/ap-araku.jpg",
        desc: "A scenic tribal hill station famous for its coffee plantations and waterfalls."
      },
      {
        name: "Tirupati",
        img: "/images/ap-tirupati.jpg",
        desc: "The richest temple in the world, drawing millions of pilgrims each year."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Visakhapatnam",
        img: "/images/ap-visakhapatnam.jpg",
        pos: { x: 303, y: 459 }
      },
      {
        day: "Day 2",
        name: "Araku Valley",
        img: "/images/ap-araku.jpg",
        pos: { x: 297, y: 449 }
      },
      {
        day: "Day 3",
        name: "Tirupati",
        img: "/images/ap-tirupati.jpg",
        pos: { x: 230, y: 536 }
      }
    ]
  },

  gj: {
    id: "gj",
    name: "Gujarat",
    speciality: "Land of Lions & White Desert",
    facts: [
      "Gujarat is home to the last wild Asiatic lions in the Gir Forest.",
      "The Great Rann of Kutch is the world's largest salt flat.",
      "Gujarat has the longest coastline of any Indian state — 1,600 km.",
      "The state is the birthplace of Mahatma Gandhi.",
      "It features the Statue of Unity, which is the tallest statue in the world.",
      "Gujarat is a major center for intricate textile arts like Bandhani.",
      "The local cuisine is uniquely known for its sweet, salty, and spicy flavor balance."
    ],
    moreFacts: [
      "Gujarat accounts for 72% of India's diamond cutting and polishing.",
      "Modhera Sun Temple is an architectural masterpiece from 1026 CE.",
      "The state has the highest density of heritage stepwells in India.",
      "Gujarat is India's largest producer of cotton and salt.",
      "Dholavira is one of the largest Indus Valley Civilization sites.",
      "The Rann Utsav festival attracts over 500,000 visitors annually."
    ],
    stats: {
      distance: "580 km",
      season: "Nov – Feb"
    },
    places: [
      {
        name: "Rann of Kutch",
        img: "/images/gj-rann-of-kutch.jpg",
        desc: "The world's largest salt desert, magical under a full moon."
      },
      {
        name: "Gir National Park",
        img: "/images/gj-gir-national-park.jpg",
        desc: "The last refuge of the majestic Asiatic lion in the wild."
      },
      {
        name: "Dwarka",
        img: "/images/gj-dwarka.jpg",
        desc: "One of the four sacred Hindu dhams, an ancient coastal temple city."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Rann of Kutch",
        img: "/images/gj-rann-of-kutch.jpg",
        pos: { x: 21, y: 313 }
      },
      {
        day: "Day 2",
        name: "Gir National Park",
        img: "/images/gj-gir-national-park.jpg",
        pos: { x: 66, y: 390 }
      },
      {
        day: "Day 3",
        name: "Dwarka",
        img: "/images/gj-dwarka.jpg",
        pos: { x: 18, y: 361 }
      }
    ]
  },

  mp: {
    id: "mp",
    name: "Madhya Pradesh",
    speciality: "The Heart of India",
    facts: [
      "Madhya Pradesh has the largest forest cover in India.",
      "Bandhavgarh National Park has the highest density of Royal Bengal tigers.",
      "The Khajuraho monuments are a UNESCO World Heritage site known for intricate carvings.",
      "Sanchi Stupa is one of the oldest stone structures in India.",
      "Bhopal, the capital city, is known as the 'City of Lakes'.",
      "The state is a prominent producer of soybeans and garlic.",
      "Marble Rocks at Bhedaghat form a spectacular gorge over the Narmada River."
    ],
    moreFacts: [
      "Ujjain is one of the four sites for the Kumbh Mela.",
      "Bhimbetka rock shelters show traces of human life from the Stone Age.",
      "Panchmarhi is the only hill station in Madhya Pradesh.",
      "Gwalior Fort is described as the 'pearl amongst fortresses in India'.",
      "Kanha National Park inspired Rudyard Kipling's 'The Jungle Book'.",
      "Indore has been consistently ranked as India's cleanest city."
    ],
    stats: {
      distance: "400 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Khajuraho",
        img: "/images/mp-khajuraho.jpg",
        desc: "Famous for its stunning UNESCO World Heritage temples with exquisite carvings."
      },
      {
        name: "Sanchi Stupa",
        img: "/images/mp-sanchi.jpg",
        desc: "An ancient Great Stupa built by Emperor Ashoka, a landmark of Buddhist art."
      },
      {
        name: "Bandhavgarh",
        img: "/images/mp-bandhavgarh.jpg",
        desc: "A renowned national park, home to the Royal Bengal Tigers and rich wildlife."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Khajuraho",
        img: "/images/mp-khajuraho.jpg",
        pos: { x: 251, y: 289 }
      },
      {
        day: "Day 2",
        name: "Sanchi",
        img: "/images/mp-sanchi.jpg",
        pos: { x: 185, y: 319 }
      },
      {
        day: "Day 3",
        name: "Bandhavgarh",
        img: "/images/mp-bandhavgarh.jpg",
        pos: { x: 258, y: 311 }
      }
    ]
  },

  ct: {
    id: "ct",
    name: "Chhattisgarh",
    speciality: "Land of Surprises & Waterfalls",
    facts: [
      "Chhattisgarh is one of the fastest-developing states in India.",
      "Chitrakote Falls is often called the 'Niagara Falls of India'.",
      "The state has some of the oldest indigenous tribal communities.",
      "It produces 15% of the total steel produced in the country.",
      "It is often referred to as the 'Rice Bowl of Central India'.",
      "The state features extensive, unexplored limestone cave systems.",
      "Kosa silk from Chhattisgarh is famous worldwide for its sturdy nature."
    ],
    moreFacts: [
      "Sirpur is an ancient town rich in Buddhist, Hindu, and Jain monuments.",
      "Kanger Valley National Park is known for its biodiversity and limestone caves.",
      "Bastar district is famous for its unique tribal arts and Dhokra metal casting.",
      "Mainpat is known as the 'Shimla of Chhattisgarh' and houses a Tibetan settlement.",
      "Bhoramdeo Temple is referred to as the 'Khajuraho of Chhattisgarh'.",
      "The state has dense forest cover across more than 40% of its area."
    ],
    stats: {
      distance: "320 km",
      season: "Nov – Feb"
    },
    places: [
      {
        name: "Chitrakote Falls",
        img: "/images/ct-chitrakote.jpg",
        desc: "India's widest waterfall located on the Indravati river in Bastar."
      },
      {
        name: "Sirpur",
        img: "/images/ct-sirpur.jpg",
        desc: "A historical site featuring ancient brick temples and Buddhist viharas."
      },
      {
        name: "Bhoramdeo",
        img: "/images/ct-bhoramdeo.jpg",
        desc: "An ancient temple dedicated to Lord Shiva set amidst lush forests."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Chitrakote Falls",
        img: "/images/ct-chitrakote.jpg",
        pos: { x: 286, y: 430 }
      },
      {
        day: "Day 2",
        name: "Sirpur",
        img: "/images/ct-sirpur.jpg",
        pos: { x: 295, y: 388 }
      },
      {
        day: "Day 3",
        name: "Bhoramdeo",
        img: "/images/ct-bhoramdeo.jpg",
        pos: { x: 278, y: 359 }
      }
    ]
  },

  or: {
    id: "or",
    name: "Odisha",
    speciality: "Soul of Incredible India",
    facts: [
      "The Konark Sun Temple is designed as a colossal chariot with 24 wheels.",
      "Chilika Lake is the largest brackish water lagoon in Asia.",
      "Puri is home to the famous Jagannath Ratha Yatra festival.",
      "Odisha is famous for its unique Pattachitra paintings.",
      "The state is known for its intricate sand art along its beaches.",
      "It hosts one of the largest nesting grounds for Olive Ridley turtles.",
      "Bhubaneswar is often called the 'Temple City of India'."
    ],
    moreFacts: [
      "Bhitarkanika is India's second largest mangrove ecosystem.",
      "Gahirmatha beach is the world's most important nesting beach for Olive Ridley Sea Turtles.",
      "Udayagiri and Khandagiri caves feature ancient rock-cut Jain sanctuaries.",
      "Odissi is one of the eight classical dance forms of India.",
      "The Lingaraj Temple dominates the skyline of Bhubaneswar.",
      "Odisha is known for intricate silver filigree work from Cuttack."
    ],
    stats: {
      distance: "400 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Konark Sun Temple",
        img: "/images/or-konark.jpg",
        desc: "A magnificent 13th-century sun temple structured as a giant stone chariot."
      },
      {
        name: "Puri",
        img: "/images/or-puri.jpg",
        desc: "A holy city famed for the Jagannath Temple and long sandy beaches."
      },
      {
        name: "Chilika Lake",
        img: "/images/or-chilika.jpg",
        desc: "A massive lagoon that hosts migratory birds and Irrawaddy dolphins."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Konark",
        img: "/images/or-konark.jpg",
        pos: { x: 378, y: 395 }
      },
      {
        day: "Day 2",
        name: "Puri",
        img: "/images/or-puri.jpg",
        pos: { x: 373, y: 406 }
      },
      {
        day: "Day 3",
        name: "Chilika Lake",
        img: "/images/or-chilika.jpg",
        pos: { x: 353, y: 421 }
      }
    ]
  },

  jh: {
    id: "jh",
    name: "Jharkhand",
    speciality: "The Land of Forests",
    facts: [
      "Jharkhand possesses 40% of the mineral resources of India.",
      "Ranchi is known as the 'City of Waterfalls'.",
      "Betla National Park is one of the first national parks in India to become a tiger reserve.",
      "Parasnath Hill is a major Jain pilgrimage site.",
      "The state is heavily defined by the expansive Chota Nagpur Plateau.",
      "It is famous for the traditional tribal art form known as Sohrai.",
      "Dhanbad, a key city, is famously referred to as the 'Coal Capital of India'."
    ],
    moreFacts: [
      "Deoghar is home to the Baidyanath Jyotirlinga, one of the 12 Shiva Jyotirlingas.",
      "Jamshedpur is the first planned industrial city of India.",
      "Hazaribagh means 'a thousand gardens' and has rich flora and fauna.",
      "The Santhal tribe is the largest tribal group in the state.",
      "Netarhat is famous for its stunning sunrises and sunsets.",
      "Jharkhand was carved out of the southern part of Bihar in 2000."
    ],
    stats: {
      distance: "250 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Ranchi Waterfalls",
        img: "/images/jh-hundru.jpg",
        desc: "Picturesque waterfalls like Hundru and Dassam surrounded by nature."
      },
      {
        name: "Betla National Park",
        img: "/images/jh-betla.jpg",
        desc: "A beautiful national park exhibiting diverse wildlife and thick forests."
      },
      {
        name: "Baidyanath Temple",
        img: "/images/jh-baidyanath.jpg",
        desc: "A sacred Hindu temple complex dedicated to Lord Shiva in Deoghar."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Ranchi",
        img: "/images/jh-hundru.jpg",
        pos: { x: 366, y: 327 }
      },
      {
        day: "Day 2",
        name: "Betla",
        img: "/images/jh-betla.jpg",
        pos: { x: 342, y: 343 }
      },
      {
        day: "Day 3",
        name: "Deoghar",
        img: "/images/jh-baidyanath.jpg",
        pos: { x: 389, y: 306 }
      }
    ]
  },

  kl: {
    id: "kl",
    name: "Kerala",
    speciality: "God's Own Country",
    facts: [
      "Kerala has the highest literacy rate in India.",
      "It is the largest producer of rubber, pepper, and coconut in India.",
      "The state is world-famous for its tranquil backwaters and houseboats.",
      "Ayurveda, an ancient healing system, is a cornerstone of Kerala's culture.",
      "It leads India in metrics of human development and life expectancy.",
      "The western coast is flanked by the picturesque Arabian Sea.",
      "The state is distinguished by its incredible snake boat races during Onam."
    ],
    moreFacts: [
      "Kathakali is one of the oldest classical dance forms native to Kerala.",
      "The Padmanabhaswamy Temple is reputed to be the richest Hindu temple in the world.",
      "Vallam Kali (the traditional boat race) is a major tourist attraction during Onam.",
      "Kerala is known for its beautiful monsoon season and tropical greenery.",
      "Munnar's rolling hills are completely covered with sprawling tea plantations.",
      "The state was formed on November 1, 1956, marking Kerala Piravi."
    ],
    stats: {
      distance: "300 km",
      season: "Sep – Mar"
    },
    places: [
      {
        name: "Munnar",
        img: "/images/kl-munnar.jpg",
        desc: "A breathtaking hill station characterized by expansive tea estates and misty viewpoints."
      },
      {
        name: "Alleppey",
        img: "/images/kl-alleppey.jpg",
        desc: "Known as the Venice of the East, famous for its backwater houseboat cruises."
      },
      {
        name: "Wayanad",
        img: "/images/kl-wayanad.jpg",
        desc: "Lush green district packed with waterfalls, historical caves, and spice plantations."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Munnar",
        img: "/images/kl-munnar.jpg",
        pos: { x: 171, y: 590 }
      },
      {
        day: "Day 2",
        name: "Alleppey",
        img: "/images/kl-alleppey.jpg",
        pos: { x: 161, y: 606 }
      },
      {
        day: "Day 3",
        name: "Wayanad",
        img: "/images/kl-wayanad.jpg",
        pos: { x: 157, y: 583 }
      }
    ]
  },

  br: {
    id: "br",
    name: "Bihar",
    speciality: "Land of Enlightenment",
    facts: [
      "Bihar is the birthplace of Buddhism and Jainism.",
      "It is home to Nalanda University, one of the oldest universities in the world.",
      "The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage Site.",
      "The name 'Bihar' is derived from the Sanskrit and Pali word 'Vihara', which means 'abode'.",
      "The ancient city of Vaishali is considered one of the world's first republics.",
      "It is defined by the fertile plains carved by the mighty Ganges river.",
      "Litti Chokha is an incredibly popular traditional meal hailing from this state."
    ],
    moreFacts: [
      "Patna, formerly Pataliputra, was the capital of the Maurya and Gupta empires.",
      "The state is famous for Madhubani painting and diverse handloom arts.",
      "Chhath Puja is an ancient, major Hindu festival indigenous to Bihar.",
      "Sikhism's tenth Guru, Guru Gobind Singh, was born in Patna."
    ],
    stats: {
      distance: "250 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Bodh Gaya",
        img: "/images/br-bodhgaya.jpg",
        desc: "The sacred site where Gautama Buddha is said to have attained Enlightenment under the Bodhi Tree."
      },
      {
        name: "Nalanda",
        img: "/images/br-nalanda.jpg",
        desc: "The ruins of the great ancient center of learning, which attracted scholars from all over Asia."
      },
      {
        name: "Patna",
        img: "/images/br-patna.jpg",
        desc: "A historic city resting on the banks of the Ganges, offering a deep plunge into ancient Indian heritage."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Patna",
        img: "/images/br-patna.jpg",
        pos: { x: 365, y: 254 }
      },
      {
        day: "Day 2",
        name: "Nalanda",
        img: "/images/br-nalanda.jpg",
        pos: { x: 369, y: 271 }
      },
      {
        day: "Day 3",
        name: "Bodh Gaya",
        img: "/images/br-bodhgaya.jpg",
        pos: { x: 354, y: 287 }
      }
    ]
  },

  ga: {
    id: "ga",
    name: "Goa",
    speciality: "Pearl of the Orient",
    facts: [
      "Goa is India's smallest state by area but one of the most popular tourist destinations.",
      "It has a rich Portuguese heritage, reflected in its architecture, cuisine, and culture.",
      "The state is world-renowned for its pristine beaches and vibrant nightlife.",
      "The Basilica of Bom Jesus in Old Goa is a UNESCO World Heritage site.",
      "It has the highest GDP per capita among all Indian states.",
      "The Mandovi and Zuari are the primary lifeblood rivers of the state.",
      "Goa is surrounded by the lush green Western Ghats on its eastern edge."
    ],
    moreFacts: [
      "Goa celebrates Carnival and Shigmo with grand parades and festivities.",
      "It was a Portuguese province for over 450 years until 1961.",
      "The Dudhsagar Waterfall is one of India's tallest waterfalls.",
      "Feni, a unique cashew liquor, is exclusively produced in Goa."
    ],
    stats: {
      distance: "150 km",
      season: "Nov – Feb"
    },
    places: [
      {
        name: "Panaji",
        img: "/images/ga-panaji.jpg",
        desc: "The capital city, famous for its colorful Latin Quarter, Fontainhas."
      },
      {
        name: "North Goa Beaches",
        img: "/images/ga-beaches.jpg",
        desc: "Bustling beaches like Baga and Calangute, known for water sports and nightlife."
      },
      {
        name: "Dudhsagar Falls",
        img: "/images/ga-dudhsagar.jpg",
        desc: "A majestic four-tiered waterfall located on the Mandovi River."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "North Goa",
        img: "/images/ga-beaches.jpg",
        pos: { x: 120, y: 506 }
      },
      {
        day: "Day 2",
        name: "Panaji & Old Goa",
        img: "/images/ga-panaji.jpg",
        pos: { x: 122, y: 511 }
      },
      {
        day: "Day 3",
        name: "South Goa",
        img: "/images/ga-dudhsagar.jpg",
        pos: { x: 122, y: 517 }
      }
    ]
  },

  rj: {
    id: "rj",
    name: "Rajasthan",
    speciality: "Land of Kings",
    facts: [
      "Rajasthan is India's largest state by area.",
      "It is home to the vast Thar Desert and the ancient Aravalli Range.",
      "The state is famous for its majestic forts, palaces, and vibrant culture.",
      "Jaipur, the capital city, is universally known as the 'Pink City'.",
      "Jodhpur is known globally as the stunning 'Blue City'.",
      "The state boasts the extraordinary Dilwara Jain Temples in Mount Abu.",
      "It is renowned worldwide for exquisite gemstone jewelry and block-printed textiles."
    ],
    moreFacts: [
      "The Keoladeo National Park in Bharatpur is a World Heritage Site known for its avian life.",
      "Pushkar hosts one of the world's largest annual camel fairs.",
      "The state’s architecture relies heavily on local red sandstone and marble.",
      "Dal Baati Churma is a globally recognized, quintessential traditional dish."
    ],
    stats: {
      distance: "250 km",
      season: "Oct – Mar"
    },
    places: [
      {
        name: "Jaipur",
        img: "/images/rj-jaipur.jpg",
        desc: "The vibrant capital, known for the Hawa Mahal, Amer Fort, and bustling bazaars."
      },
      {
        name: "Jodhpur",
        img: "/images/rj-jodhpur.jpg",
        desc: "The Blue City, overlooked by the colossal Mehrangarh Fort."
      },
      {
        name: "Udaipur",
        img: "/images/rj-udaipur.jpg",
        desc: "The City of Lakes, famous for its romantic palaces and shimmering waterways."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Jaipur",
        img: "/images/rj-jaipur.jpg",
        pos: { x: 167, y: 250 }
      },
      {
        day: "Day 2",
        name: "Jodhpur",
        img: "/images/rj-jodhpur.jpg",
        pos: { x: 90, y: 250 }
      },
      {
        day: "Day 3",
        name: "Udaipur",
        img: "/images/rj-udaipur.jpg",
        pos: { x: 126, y: 298 }
      }
    ]
  },

  an: {
    id: "an",
    name: "Andaman and Nicobar Islands",
    speciality: "Exploring Port Blair & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Port Blair", desc: "Historic capital city", img: "/images/an-img1.jpg" },
      { name: "Havelock", desc: "Pristine white sand beaches", img: "/images/an-img2.jpg" },
      { name: "Neil Island", desc: "Serene coral reefs", img: "/images/an-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Port Blair", pos: { x: 517, y: 574 }, img: "/images/an-img1.jpg" },
      { day: "Day 2", name: "Havelock", pos: { x: 520, y: 584 }, img: "/images/an-img2.jpg" },
      { day: "Day 3", name: "Neil Island", pos: { x: 520, y: 591 }, img: "/images/an-img3.jpg" }
    ],
    focusId: "an",
    facts: [
      "Home to the indigenous Sentinelese people.",
      "Features India's only active volcano on Barren Island.",
      "The Cellular Jail is a national memorial.",
      "Renowned for extensive coral reefs.",
      "Dugongs are the state marine animal.",
      "Covered mostly in dense tropical forests."
    ],
    moreFacts: [
      "Ross Island was the administrative headquarters.",
      "A true paradise for scuba diving.",
      "Mangroves protect the rich coastline.",
      "Connected by ships and flights to mainland.",
      "Includes hundreds of uninhabited islands.",
      "Limestone caves are found in Baratang."
    ]
  },
  ar: {
    id: "ar",
    name: "Arunachal Pradesh",
    speciality: "Exploring Tawang & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Tawang", desc: "Majestic monasteries and mountains", img: "/images/ar-img1.jpg" },
      { name: "Ziro", desc: "Lush pine-clad valleys", img: "/images/ar-img2.jpg" },
      { name: "Bomdila", desc: "Snow-capped Himalayan views", img: "/images/ar-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Tawang", pos: { x: 514, y: 223 }, img: "/images/ar-img1.jpg" },
      { day: "Day 2", name: "Ziro", pos: { x: 550, y: 228 }, img: "/images/ar-img2.jpg" },
      { day: "Day 3", name: "Bomdila", pos: { x: 521, y: 220 }, img: "/images/ar-img3.jpg" }
    ],
    focusId: "ar",
    facts: [
      "Known as the Land of Dawn-Lit Mountains.",
      "India's largest monastery is in Tawang.",
      "Experiences the first sunrise in India.",
      "Rich in orchids and diverse flora.",
      "Hosts the famous Ziro Music Festival.",
      "Home to over 26 major ethnic tribes."
    ],
    moreFacts: [
      "Namdapha National Park is a biodiversity hotspot.",
      "Bordered by Bhutan, China, and Myanmar.",
      "Sela Pass was a historic trade route.",
      "Bamboo and cane crafts are highly valued.",
      "Mithun is an important cultural animal.",
      "A pristine and largely unexplored frontier."
    ]
  },
  as: {
    id: "as",
    name: "Assam",
    speciality: "Exploring Guwahati & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Guwahati", desc: "Gateway to the Northeast", img: "/images/as-img1.jpg" },
      { name: "Kaziranga", desc: "Home of the one-horned rhino", img: "/images/as-img2.jpg" },
      { name: "Majuli", desc: "World's largest river island", img: "/images/as-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Guwahati", pos: { x: 469, y: 271 }, img: "/images/as-img1.jpg" },
      { day: "Day 2", name: "Kaziranga", pos: { x: 522, y: 263 }, img: "/images/as-img2.jpg" },
      { day: "Day 3", name: "Majuli", pos: { x: 535, y: 253 }, img: "/images/as-img3.jpg" }
    ],
    focusId: "as",
    facts: [
      "Famous for its Assam silk and tea.",
      "Kaziranga hosts two-thirds of the world's Indian rhinos.",
      "The mighty Brahmaputra river flows through it.",
      "Bihu is the major agricultural festival.",
      "Kamakhya Temple is a highly revered shrine.",
      "Boasts significant oil and natural gas reserves."
    ],
    moreFacts: [
      "Digboi holds the oldest operational oil well.",
      "Muga silk is unique to Assam.",
      "Manas National Park is incredibly biodiverse.",
      "Rich tradition of Vaishnavite monasteries.",
      "Famed for unique bamboo architecture.",
      "Shares boundaries with international neighbors."
    ]
  },
  ch: {
    id: "ch",
    name: "Chandigarh",
    speciality: "Exploring Rock Garden & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Rock Garden", desc: "Art from industrial waste", img: "/images/ch-img1.jpg" },
      { name: "Sukhna Lake", desc: "Tranquil artificial reservoir", img: "/images/ch-img2.jpg" },
      { name: "Rose Garden", desc: "Asia's largest botanical garden", img: "/images/ch-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Rock Garden", pos: { x: 180, y: 160 }, img: "/images/ch-img1.jpg" },
      { day: "Day 2", name: "Sukhna Lake", pos: { x: 180, y: 160 }, img: "/images/ch-img2.jpg" },
      { day: "Day 3", name: "Rose Garden", pos: { x: 180, y: 160 }, img: "/images/ch-img3.jpg" }
    ],
    focusId: "ch",
    facts: [
      "Designed by the famous architect Le Corbusier.",
      "Serves as the capital for both Punjab and Haryana.",
      "Known as 'The City Beautiful'.",
      "One of the earliest planned cities in India.",
      "The Rock Garden was built entirely from waste.",
      "Has a high per capita income in India."
    ],
    moreFacts: [
      "Categorized by well-defined geometric sectors.",
      "Extensive tree plantation lines the avenues.",
      "Features a strict architectural discipline.",
      "Sukhna Lake hosts migratory birds in winter.",
      "Maintains excellent urban infrastructure.",
      "A symbol of modern urban planning."
    ]
  },
  dd: {
    id: "dd",
    name: "Daman and Diu",
    speciality: "Exploring Diu Fort & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Diu Fort", desc: "Historic Portuguese fortress", img: "/images/dd-img1.jpg" },
      { name: "Nagoa Beach", desc: "Pristine sandy shores", img: "/images/dd-img2.jpg" },
      { name: "Devka Beach", desc: "Popular tourist destination", img: "/images/dd-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Diu Fort", pos: { x: 54, y: 391 }, img: "/images/dd-img1.jpg" },
      { day: "Day 2", name: "Nagoa Beach", pos: { x: 54, y: 391 }, img: "/images/dd-img2.jpg" },
      { day: "Day 3", name: "Devka Beach", pos: { x: 54, y: 391 }, img: "/images/dd-img3.jpg" }
    ],
    focusId: "dd",
    facts: [
      "A prominent former Portuguese colony.",
      "Diu Fort is an impressive coastal structure.",
      "Known for its clean, serene beaches.",
      "Blends Gujarati and Portuguese cultures.",
      "St. Paul's Church is a major historic landmark.",
      "Economy is supported by tourism and fishing."
    ],
    moreFacts: [
      "Diu Island is separated by a tidal creek.",
      "Features beautiful colonial era architecture.",
      "Ghoghla beach is famed for its gentle waves.",
      "Diu was conquered by the Portuguese in 1535.",
      "Now merged into a single UT with Dadra & Nagar Haveli.",
      "Maintains a distinct, peaceful coastal vibe."
    ]
  },
  dl: {
    id: "dl",
    name: "Delhi",
    speciality: "Exploring Red Fort & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Red Fort", desc: "Mughal architectural masterpiece", img: "/images/dl-img1.jpg" },
      { name: "Qutub Minar", desc: "Tallest brick minaret in the world", img: "/images/dl-img2.jpg" },
      { name: "India Gate", desc: "Iconic war memorial arch", img: "/images/dl-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Red Fort", pos: { x: 184, y: 208 }, img: "/images/dl-img1.jpg" },
      { day: "Day 2", name: "Qutub Minar", pos: { x: 186, y: 210 }, img: "/images/dl-img2.jpg" },
      { day: "Day 3", name: "India Gate", pos: { x: 188, y: 213 }, img: "/images/dl-img3.jpg" }
    ],
    focusId: "dl",
    facts: [
      "Capital of India with a massive urban area.",
      "Home to three UNESCO World Heritage Sites.",
      "Lotus Temple is a major Baha'i House of Worship.",
      "Chandni Chowk is one of India's oldest markets.",
      "Features vast green spaces and historical parks.",
      "The center of Indian political administration."
    ],
    moreFacts: [
      "Has a history of being rebuilt seven times.",
      "Humayun's Tomb inspired the Taj Mahal.",
      "Famed for a rich blend of varied cuisines.",
      "Hosts an intricate, massive Metro rail network.",
      "Lutyens' Delhi showcases colonial architecture.",
      "Jama Masjid is one of the largest mosques."
    ]
  },
  dn: {
    id: "dn",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    speciality: "Exploring Vanganga Lake & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Vanganga Lake", desc: "Beautiful recreational garden", img: "/images/dn-img1.jpg" },
      { name: "Dudhni Beach", desc: "Serene coastal stretch", img: "/images/dn-img2.jpg" },
      { name: "Tribal Museum", desc: "Preserving indigenous heritage", img: "/images/dn-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Vanganga Lake", pos: { x: 102, y: 405 }, img: "/images/dn-img1.jpg" },
      { day: "Day 2", name: "Dudhni Beach", pos: { x: 102, y: 405 }, img: "/images/dn-img2.jpg" },
      { day: "Day 3", name: "Tribal Museum", pos: { x: 102, y: 405 }, img: "/images/dn-img3.jpg" }
    ],
    focusId: "dn",
    facts: [
      "Nestled between Gujarat and Maharashtra.",
      "Rich in dynamic tribal culture and art.",
      "Governed by Portuguese until 1954.",
      "Silvassa is the lush green capital city.",
      "Abounds with dense forests and wildlife.",
      "Warli painting is a famous local art form."
    ],
    moreFacts: [
      "Swaminarayan Temple features intricate carvings.",
      "The economy relies heavily on manufacturing.",
      "Lions Park is a key tourist attraction.",
      "Vanganga Lake Garden is used for many film shoots.",
      "Characterized by a tropical monsoon climate.",
      "An emerging eco-tourism destination."
    ]
  },
  hp: {
    id: "hp",
    name: "Himachal Pradesh",
    speciality: "Exploring Shimla & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Shimla", desc: "Queen of the Hills", img: "/images/hp-img1.jpg" },
      { name: "Manali", desc: "Adventure hub and scenic valleys", img: "/images/hp-img2.jpg" },
      { name: "Dharamshala", desc: "Home of the Dalai Lama", img: "/images/hp-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Shimla", pos: { x: 205, y: 149 }, img: "/images/hp-img1.jpg" },
      { day: "Day 2", name: "Manali", pos: { x: 191, y: 115 }, img: "/images/hp-img2.jpg" },
      { day: "Day 3", name: "Dharamshala", pos: { x: 169, y: 126 }, img: "/images/hp-img3.jpg" }
    ],
    focusId: "hp",
    facts: [
      "Known as the 'Snow-laden Province'.",
      "Kalka-Shimla Railway is a UNESCO Heritage site.",
      "Produces a significant amount of India's apples.",
      "Rohtang Pass is a famous high-altitude route.",
      "McLeod Ganj is the center of Tibetan culture.",
      "Highly popular for trekking and skiing."
    ],
    moreFacts: [
      "Hosts the ancient Hadimba Devi Temple.",
      "The Great Himalayan National Park is biodiverse.",
      "Spiti Valley is known as a cold desert.",
      "Abundant in natural hot springs and rivers.",
      "Distinct local pahari culture and handicrafts.",
      "A prime destination for extreme adventure sports."
    ]
  },
  hr: {
    id: "hr",
    name: "Haryana",
    speciality: "Exploring Kurukshetra & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Kurukshetra", desc: "Site of the epic Mahabharata war", img: "/images/hr-img1.jpg" },
      { name: "Panipat", desc: "City of historical battles", img: "/images/hr-img2.jpg" },
      { name: "Gurugram", desc: "Modern corporate and urban hub", img: "/images/hr-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Kurukshetra", pos: { x: 169, y: 176 }, img: "/images/hr-img1.jpg" },
      { day: "Day 2", name: "Panipat", pos: { x: 168, y: 182 }, img: "/images/hr-img2.jpg" },
      { day: "Day 3", name: "Gurugram", pos: { x: 171, y: 213 }, img: "/images/hr-img3.jpg" }
    ],
    focusId: "hr",
    facts: [
      "Known as the heartland of Indian agriculture.",
      "Historically significant ancient battlefield.",
      "Gurugram is a major IT and industrial center.",
      "Sultanpur National Park is famous for birds.",
      "Surajkund is renowned for its crafts mela.",
      "Leading manufacturer of passenger cars."
    ],
    moreFacts: [
      "Rakhigarhi is a prominent Indus Valley site.",
      "The name means 'The Abode of God'.",
      "Famous for sporting excellence notably wrestling.",
      "A major contributor to the Green Revolution.",
      "Panipat is the hub of the textile industry.",
      "Combines robust traditions with rapid modernity."
    ]
  },
  jk: {
    id: "jk",
    name: "Jammu and Kashmir",
    speciality: "Exploring Srinagar & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Srinagar", desc: "Famous for Dal Lake houseboats", img: "/images/jk-img1.jpg" },
      { name: "Gulmarg", desc: "Meadow of flowers and snow", img: "/images/jk-img2.jpg" },
      { name: "Pahalgam", desc: "Valley of shepherds", img: "/images/jk-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Srinagar", pos: { x: 173, y: 54 }, img: "/images/jk-img1.jpg" },
      { day: "Day 2", name: "Gulmarg", pos: { x: 157, y: 48 }, img: "/images/jk-img2.jpg" },
      { day: "Day 3", name: "Pahalgam", pos: { x: 189, y: 61 }, img: "/images/jk-img3.jpg" }
    ],
    focusId: "jk",
    facts: [
      "Often referred to as 'Paradise on Earth'.",
      "Dal Lake is famous for its Shikara rides.",
      "Gulmarg has one of the world's highest gondolas.",
      "Produces distinct, world-renowned saffron.",
      "Wazwan is a traditional multi-course meal.",
      "Known for exquisite Pashmina shawls."
    ],
    moreFacts: [
      "Amarnath Cave is a major pilgrimage site.",
      "Mughal Gardens showcase Persian architecture.",
      "The Chenab and Jhelum rivers flow through.",
      "Features rich Kashmiri handicrafts and carpets.",
      "Har Hari Parbat offers panoramic city views.",
      "Winter sports are highly popular in Gulmarg."
    ]
  },
  ld: {
    id: "ld",
    name: "Lakshadweep",
    speciality: "Exploring Agatti & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Agatti", desc: "Beautiful coral atoll", img: "/images/ld-img1.jpg" },
      { name: "Bangaram", desc: "Pristine beach paradise", img: "/images/ld-img2.jpg" },
      { name: "Kavaratti", desc: "Scenic island capital", img: "/images/ld-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Agatti", pos: { x: 102, y: 626 }, img: "/images/ld-img1.jpg" },
      { day: "Day 2", name: "Bangaram", pos: { x: 102, y: 626 }, img: "/images/ld-img2.jpg" },
      { day: "Day 3", name: "Kavaratti", pos: { x: 102, y: 626 }, img: "/images/ld-img3.jpg" }
    ],
    focusId: "ld",
    facts: [
      "India's smallest Union Territory by area.",
      "Comprises 36 beautiful coral islands.",
      "Agatti holds the archipelago's only airstrip.",
      "Famed for exceptional scuba diving spots.",
      "The name means 'A hundred thousand islands'.",
      "Coconut agriculture is a key occupation."
    ],
    moreFacts: [
      "Minicoy is the southernmost island.",
      "Tuna fishing is a critical part of the economy.",
      "The islands feature fragile coral ecosystems.",
      "Entry requires special permits for conservation.",
      "Malayalam and Mahl are the primary languages.",
      "Beaches are known for sparkling white sand."
    ]
  },
  ml: {
    id: "ml",
    name: "Meghalaya",
    speciality: "Exploring Shillong & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Shillong", desc: "Scotland of the East", img: "/images/ml-img1.jpg" },
      { name: "Cherrapunji", desc: "One of the wettest places on earth", img: "/images/ml-img2.jpg" },
      { name: "Dawki", desc: "Crystal clear Umngot River", img: "/images/ml-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Shillong", pos: { x: 480, y: 281 }, img: "/images/ml-img1.jpg" },
      { day: "Day 2", name: "Cherrapunji", pos: { x: 478, y: 285 }, img: "/images/ml-img2.jpg" },
      { day: "Day 3", name: "Dawki", pos: { x: 490, y: 285 }, img: "/images/ml-img3.jpg" }
    ],
    focusId: "ml",
    facts: [
      "The name means 'Abode of Clouds'.",
      "Home to the famous Living Root Bridges.",
      "Mawsynram receives record-breaking rainfall.",
      "Follows a unique matrilineal society.",
      "Nongriat is a UNESCO tentative site.",
      "Rich in majestic waterfalls and huge caves."
    ],
    moreFacts: [
      "Umiam Lake is a major tourist destination.",
      "Nohkalikai Falls is one of the highest in India.",
      "Known for Wangala, the 100-drum festival.",
      "Houses huge limestone cave systems.",
      "Cleanest village in Asia is Mawlynnong.",
      "The Garo, Khasi, and Jaintia are major tribes."
    ]
  },
  mn: {
    id: "mn",
    name: "Manipur",
    speciality: "Exploring Imphal & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Imphal", desc: "Ancient capital of the kingdom", img: "/images/mn-img1.jpg" },
      { name: "Loktak Lake", desc: "Largest freshwater lake in NE", img: "/images/mn-img2.jpg" },
      { name: "Kangla Fort", desc: "Seat of the ancient kings", img: "/images/mn-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Imphal", pos: { x: 535, y: 300 }, img: "/images/mn-img1.jpg" },
      { day: "Day 2", name: "Loktak Lake", pos: { x: 534, y: 308 }, img: "/images/mn-img2.jpg" },
      { day: "Day 3", name: "Kangla Fort", pos: { x: 538, y: 301 }, img: "/images/mn-img3.jpg" }
    ],
    focusId: "mn",
    facts: [
      "The birthplace of modern polo.",
      "Known as the 'Jeweled Land'.",
      "Keibul Lamjao is the only floating national park.",
      "Sangai is the highly endangered state animal.",
      "Famous for its classical Manipuri dance.",
      "Handloom and handicrafts are integral."
    ],
    moreFacts: [
      "Ima Keithel is an exclusive women's market.",
      "The INA hoisted the flag here in 1944.",
      "Surrounded by lush green nine hill ranges.",
      "Shirui Lily is a unique flower found here.",
      "Yaoshang is a major spring festival.",
      "A melting pot of vibrant tribal cultures."
    ]
  },
  mz: {
    id: "mz",
    name: "Mizoram",
    speciality: "Exploring Aizawl & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Aizawl", desc: "Ridge-top city of peace", img: "/images/mz-img1.jpg" },
      { name: "Champhai", desc: "Glimpse of Myanmar border", img: "/images/mz-img2.jpg" },
      { name: "Lunglei", desc: "Bridge of rock and scenic views", img: "/images/mz-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Aizawl", pos: { x: 513, y: 319 }, img: "/images/mz-img1.jpg" },
      { day: "Day 2", name: "Champhai", pos: { x: 520, y: 334 }, img: "/images/mz-img2.jpg" },
      { day: "Day 3", name: "Lunglei", pos: { x: 513, y: 348 }, img: "/images/mz-img3.jpg" }
    ],
    focusId: "mz",
    facts: [
      "Known as the 'Land of the Hill People'.",
      "One of the highest literacy rates in India.",
      "Bamboo dances like Cheraw are very famous.",
      "Phawngpui is the highest mountain peak.",
      "Shares borders with Bangladesh and Myanmar.",
      "Anthuriams are cultivated extensively."
    ],
    moreFacts: [
      "The Tropic of Cancer passes through Aizawl.",
      "Chapchar Kut is an important agricultural festival.",
      "Very few flat lands; mostly rolling hills.",
      "Palak Dil is the largest natural lake.",
      "Rich in endemic bird species.",
      "Mizo is the predominantly spoken language."
    ]
  },
  nl: {
    id: "nl",
    name: "Nagaland",
    speciality: "Exploring Kohima & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Kohima", desc: "Historic WWII turning point", img: "/images/nl-img1.jpg" },
      { name: "Dimapur", desc: "Commercial gateway of the state", img: "/images/nl-img2.jpg" },
      { name: "Mokokchung", desc: "Cultural center of the Ao tribe", img: "/images/nl-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Kohima", pos: { x: 544, y: 277 }, img: "/images/nl-img1.jpg" },
      { day: "Day 2", name: "Dimapur", pos: { x: 536, y: 274 }, img: "/images/nl-img2.jpg" },
      { day: "Day 3", name: "Mokokchung", pos: { x: 552, y: 261 }, img: "/images/nl-img3.jpg" }
    ],
    focusId: "nl",
    facts: [
      "Known as the 'Land of Festivals'.",
      "Hosts the famous Hornbill Festival each December.",
      "Dzukou Valley is renowned for its seasonal flowers.",
      "Fierce Naga warriors resisted British advances.",
      "Kohima War Cemetery honors World War II heroes.",
      "Traditional tribal shawls specify a person's status."
    ],
    moreFacts: [
      "The state bird is the spectacular Blyth's Tragopan.",
      "Agriculture forms the bedrock of its economy.",
      "Composed of 16 recognized major indigenous tribes.",
      "Log drum beating is an ancient tribal custom.",
      "Mount Saramati is the highest peak in the state.",
      "Famous for extremely hot Bhut Jolokia chillies."
    ]
  },
  pb: {
    id: "pb",
    name: "Punjab",
    speciality: "Exploring Amritsar & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Amritsar", desc: "Spiritual epicenter of Sikhism", img: "/images/pb-img1.jpg" },
      { name: "Ludhiana", desc: "Industrial hub of the north", img: "/images/pb-img2.jpg" },
      { name: "Jalandhar", desc: "Ancient city with rich sports culture", img: "/images/pb-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Amritsar", pos: { x: 134, y: 132 }, img: "/images/pb-img1.jpg" },
      { day: "Day 2", name: "Ludhiana", pos: { x: 152, y: 155 }, img: "/images/pb-img2.jpg" },
      { day: "Day 3", name: "Jalandhar", pos: { x: 141, y: 144 }, img: "/images/pb-img3.jpg" }
    ],
    focusId: "pb",
    facts: [
      "The name means 'The Land of Five Rivers'.",
      "The Golden Temple is the holiest Sikh gurdwara.",
      "Famous for the energetic Bhangra and Giddha dances.",
      "A primary contributor to India's agricultural output.",
      "The Wagah border ceremony is a major attraction.",
      "Ludhiana is nicknamed the Manchester of India."
    ],
    moreFacts: [
      "Baisakhi is the major harvest festival celebrated here.",
      "Rich tradition of robust culinary dishes like Makki Di Roti.",
      "Jallianwala Bagh is a poignant national memorial.",
      "Anandpur Sahib holds immense historical importance.",
      "Phulkari is the traditional state embroidery art.",
      "Kapurthala is a renowned center for sports goods."
    ]
  },
  py: {
    id: "py",
    name: "Puducherry",
    speciality: "Exploring Paradise Beach & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Paradise Beach", desc: "Tranquil sandy shores", img: "/images/py-img1.jpg" },
      { name: "Auroville", desc: "Experimental township of peace", img: "/images/py-img2.jpg" },
      { name: "Promenade", desc: "French colonial seaside boulevard", img: "/images/py-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Paradise Beach", pos: { x: 260, y: 561 }, img: "/images/py-img1.jpg" },
      { day: "Day 2", name: "Auroville", pos: { x: 260, y: 561 }, img: "/images/py-img2.jpg" },
      { day: "Day 3", name: "Promenade", pos: { x: 260, y: 561 }, img: "/images/py-img3.jpg" }
    ],
    focusId: "py",
    facts: [
      "Formerly a French colonial settlement until 1954.",
      "The architecture is distinctly charming and European.",
      "Auroville features the iconic golden Matrimandir.",
      "Sri Aurobindo Ashram attracts global spiritual seekers.",
      "Composed of four unconnected geographic districts.",
      "Known for beautiful coastal promenades."
    ],
    moreFacts: [
      "Pondicherry was renamed to Puducherry in 2006.",
      "The White Town quarter is famous for mustard walls.",
      "Basilica of the Sacred Heart of Jesus is a landmark.",
      "French is still understood and taught extensively.",
      "Chunnambar Boat House is a major gateway to beaches.",
      "Reflects a serene blend of French-Indian heritage."
    ]
  },
  sk: {
    id: "sk",
    name: "Sikkim",
    speciality: "Exploring Gangtok & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Gangtok", desc: "Capital nested in the clouds", img: "/images/sk-img1.jpg" },
      { name: "Pelling", desc: "Stunning view of the Khangchendzonga", img: "/images/sk-img2.jpg" },
      { name: "Nathula Pass", desc: "Historic Silk Route passage", img: "/images/sk-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Gangtok", pos: { x: 427, y: 238 }, img: "/images/sk-img1.jpg" },
      { day: "Day 2", name: "Pelling", pos: { x: 421, y: 235 }, img: "/images/sk-img2.jpg" },
      { day: "Day 3", name: "Nathula Pass", pos: { x: 429, y: 233 }, img: "/images/sk-img3.jpg" }
    ],
    focusId: "sk",
    facts: [
      "Kangchenjunga is the highest mountainous peak in India.",
      "India's first fully organic farming state.",
      "Shares borders with Tibet, Bhutan, and Nepal.",
      "Renowned for beautiful high-altitude glacial lakes.",
      "Rumtek Monastery is an important seat of Buddhism.",
      "Home to the rare and magnificent red panda."
    ],
    moreFacts: [
      "Tsomgo Lake is frozen during the intense winters.",
      "Features a dramatic array of diverse climatic zones.",
      "A major exporter of large and valuable cardamom.",
      "The Teesta river provides vital ecological sustenance.",
      "Yumthang Valley is famous for its vibrant rhododendrons.",
      "The state was formally integrated into India in 1975."
    ]
  },
  tr: {
    id: "tr",
    name: "Tripura",
    speciality: "Exploring Agartala & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Agartala", desc: "City of majestic royal palaces", img: "/images/tr-img1.jpg" },
      { name: "Neermahal", desc: "The spectacular water palace", img: "/images/tr-img2.jpg" },
      { name: "Unakoti", desc: "Enigmatic ancient rock carvings", img: "/images/tr-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Agartala", pos: { x: 488, y: 324 }, img: "/images/tr-img1.jpg" },
      { day: "Day 2", name: "Neermahal", pos: { x: 493, y: 327 }, img: "/images/tr-img2.jpg" },
      { day: "Day 3", name: "Unakoti", pos: { x: 494, y: 314 }, img: "/images/tr-img3.jpg" }
    ],
    focusId: "tr",
    facts: [
      "Surrounded by Bangladesh on three distinct sides.",
      "Neermahal is the largest water palace in India.",
      "Ujjayanta Palace is an incredible architectural gem.",
      "Famous for delicate and intricate bamboo crafts.",
      "Unakoti has rock reliefs dating back to 7th century.",
      "Durga Puja and Kharchi Puja are major festivals."
    ],
    moreFacts: [
      "Historically a powerful continuous princely state.",
      "Queen pineapples from here are extremely popular.",
      "Separated from the rest of India by dense geography.",
      "Jampui Hills is celebrated for fragrant orange orchards.",
      "Rubber and tea plantations dot the local landscape.",
      "Richly blends Bengali and indigenous tripuri cultures."
    ]
  },
  up: {
    id: "up",
    name: "Uttar Pradesh",
    speciality: "Exploring Agra & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Agra", desc: "City of the iconic Taj Mahal", img: "/images/up-img1.jpg" },
      { name: "Varanasi", desc: "Oldest continuously inhabited city", img: "/images/up-img2.jpg" },
      { name: "Lucknow", desc: "City of Nawabs and culture", img: "/images/up-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Agra", pos: { x: 218, y: 231 }, img: "/images/up-img1.jpg" },
      { day: "Day 2", name: "Varanasi", pos: { x: 313, y: 253 }, img: "/images/up-img2.jpg" },
      { day: "Day 3", name: "Lucknow", pos: { x: 256, y: 237 }, img: "/images/up-img3.jpg" }
    ],
    focusId: "up",
    facts: [
      "The most populous functional state in India.",
      "Home to the majestic and iconic Taj Mahal.",
      "Varanasi is the spiritual capital of Hinduism.",
      "The Ganges and Yamuna rivers merge at Prayagraj.",
      "Sarnath is a highly revered Buddhist pilgrimage site.",
      "A monumental contributor to the nation's agriculture."
    ],
    moreFacts: [
      "Lucknow is renowned for Chikan embroidery and kebabs.",
      "Holds huge political significance in the country.",
      "Ayodhya hosts the colossal Kumbh Mela congregation.",
      "Fatehpur Sikri is an exceptionally preserved Mughal city.",
      "Mathura and Vrindavan are central to Krishna legends.",
      "A prominent hub for classical music and Kathak dance."
    ]
  },
  ut: {
    id: "ut",
    name: "Uttarakhand",
    speciality: "Exploring Dehradun & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Dehradun", desc: "Lush Doon valley capital", img: "/images/ut-img1.jpg" },
      { name: "Rishikesh", desc: "Yoga capital of the world", img: "/images/ut-img2.jpg" },
      { name: "Nainital", desc: "Scenic lake district", img: "/images/ut-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Dehradun", pos: { x: 211, y: 175 }, img: "/images/ut-img1.jpg" },
      { day: "Day 2", name: "Rishikesh", pos: { x: 218, y: 178 }, img: "/images/ut-img2.jpg" },
      { day: "Day 3", name: "Nainital", pos: { x: 247, y: 178 }, img: "/images/ut-img3.jpg" }
    ],
    focusId: "ut",
    facts: [
      "Often referred to entirely as the 'Land of the Gods'.",
      "Corbett is the oldest established national park.",
      "Haridwar and Rishikesh are famous spiritual hubs.",
      "Houses the highly revered Char Dham pilgrimage sites.",
      "Valley of Flowers is a breathtaking UNESCO site.",
      "The source of the sacred Ganges and Yamuna rivers."
    ],
    moreFacts: [
      "A prime destination for river rafting and trekking.",
      "Mussoorie is a globally widely popular hill station.",
      "Badrinath and Kedarnath are prominent holy towns.",
      "Features some of the highest and fiercest Himalayan peaks.",
      "Nanda Devi is the second highest mountain in India.",
      "Jim Corbett Park pioneered the Save the Tiger project."
    ]
  },
  wb: {
    id: "wb",
    name: "West Bengal",
    speciality: "Exploring Kolkata & more",
    stats: { distance: 400, season: "Oct-Mar" },
    places: [
      { name: "Kolkata", desc: "Cultural capital with colonial past", img: "/images/wb-img1.jpg" },
      { name: "Darjeeling", desc: "Tea gardens and Himalayan vistas", img: "/images/wb-img2.jpg" },
      { name: "Sunderbans", desc: "Largest mangrove forest reserve", img: "/images/wb-img3.jpg" }
    ],
    itinerary: [
      { day: "Day 1", name: "Kolkata", pos: { x: 411, y: 344 }, img: "/images/wb-img1.jpg" },
      { day: "Day 2", name: "Darjeeling", pos: { x: 416, y: 257 }, img: "/images/wb-img2.jpg" },
      { day: "Day 3", name: "Sunderbans", pos: { x: 422, y: 357 }, img: "/images/wb-img3.jpg" }
    ],
    focusId: "wb",
    facts: [
      "Kolkata served prominently as the British capital.",
      "The Sundarbans hosts the Royal Bengal Tiger.",
      "Darjeeling tea is globally celebrated for its aroma.",
      "Durga Puja is a massive, incredibly vibrant festival.",
      "Victoria Memorial is a legendary architectural marvel.",
      "The Howrah Bridge is an iconic global cantilever."
    ],
    moreFacts: [
      "Santiniketan was founded by the great Rabindranath Tagore.",
      "Famed deeply for classical arts, literature, and cinema.",
      "Features beautiful coastal beaches directly in Digha.",
      "Trains in Darjeeling are part of a UNESCO Heritage.",
      "Bishnupur is highly renowned for its terracotta temples.",
      "The state spans from the high Himalayas to the sea."
    ]
  },
};
