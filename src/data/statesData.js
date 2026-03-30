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
        pos: { x: 193, y: 473 }
      },
      {
        day: "Day 2",
        name: "Coorg",
        img: "/images/ka-coorg.jpg",
        pos: { x: 143, y: 570 }
      },
      {
        day: "Day 3",
        name: "Mysore",
        img: "/images/ka-mysore.jpg",
        pos: { x: 170, y: 574 }
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
        pos: { x: 106, y: 423 }
      },
      {
        day: "Day 2",
        name: "Lonavala",
        img: "/images/mh-lonavala.jpg",
        pos: { x: 120, y: 424 }
      },
      {
        day: "Day 3",
        name: "Aurangabad",
        img: "/images/mh-ajanta.jpg",
        pos: { x: 172, y: 393 }
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
        pos: { x: 258, y: 578 }
      },
      {
        day: "Day 2",
        name: "Ooty",
        img: "/images/tn-ooty.jpg",
        pos: { x: 183, y: 589 }
      },
      {
        day: "Day 3",
        name: "Madurai",
        img: "/images/tn-madurai.jpg",
        pos: { x: 208, y: 635 }
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
        pos: { x: 245, y: 458 }
      },
      {
        day: "Day 2",
        name: "Warangal",
        img: "/images/tg-warangal.jpg",
        pos: { x: 262, y: 444 }
      },
      {
        day: "Day 3",
        name: "Nagarjunasagar",
        img: "/images/tg-nagarjunasagar.jpg",
        pos: { x: 250, y: 478 }
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
        pos: { x: 322, y: 462 }
      },
      {
        day: "Day 2",
        name: "Araku Valley",
        img: "/images/ap-araku.jpg",
        pos: { x: 318, y: 451 }
      },
      {
        day: "Day 3",
        name: "Tirupati",
        img: "/images/ap-tirupati.jpg",
        pos: { x: 257, y: 538 }
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
        pos: { x: 42, y: 303 }
      },
      {
        day: "Day 2",
        name: "Gir National Park",
        img: "/images/gj-gir-national-park.jpg",
        pos: { x: 57, y: 345 }
      },
      {
        day: "Day 3",
        name: "Dwarka",
        img: "/images/gj-dwarka.jpg",
        pos: { x: 27, y: 335 }
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
        pos: { x: 250, y: 280 }
      },
      {
        day: "Day 2",
        name: "Sanchi",
        img: "/images/mp-sanchi.jpg",
        pos: { x: 220, y: 310 }
      },
      {
        day: "Day 3",
        name: "Bandhavgarh",
        img: "/images/mp-bandhavgarh.jpg",
        pos: { x: 300, y: 310 }
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
        pos: { x: 340, y: 400 }
      },
      {
        day: "Day 2",
        name: "Sirpur",
        img: "/images/ct-sirpur.jpg",
        pos: { x: 360, y: 360 }
      },
      {
        day: "Day 3",
        name: "Bhoramdeo",
        img: "/images/ct-bhoramdeo.jpg",
        pos: { x: 320, y: 370 }
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
        pos: { x: 410, y: 380 }
      },
      {
        day: "Day 2",
        name: "Puri",
        img: "/images/or-puri.jpg",
        pos: { x: 400, y: 395 }
      },
      {
        day: "Day 3",
        name: "Chilika Lake",
        img: "/images/or-chilika.jpg",
        pos: { x: 380, y: 410 }
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
        pos: { x: 380, y: 310 }
      },
      {
        day: "Day 2",
        name: "Betla",
        img: "/images/jh-betla.jpg",
        pos: { x: 340, y: 290 }
      },
      {
        day: "Day 3",
        name: "Deoghar",
        img: "/images/jh-baidyanath.jpg",
        pos: { x: 400, y: 270 }
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
        pos: { x: 165, y: 605 }
      },
      {
        day: "Day 2",
        name: "Alleppey",
        img: "/images/kl-alleppey.jpg",
        pos: { x: 167, y: 625 }
      },
      {
        day: "Day 3",
        name: "Wayanad",
        img: "/images/kl-wayanad.jpg",
        pos: { x: 150, y: 575 }
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
        pos: { x: 365, y: 255 }
      },
      {
        day: "Day 2",
        name: "Nalanda",
        img: "/images/br-nalanda.jpg",
        pos: { x: 375, y: 265 }
      },
      {
        day: "Day 3",
        name: "Bodh Gaya",
        img: "/images/br-bodhgaya.jpg",
        pos: { x: 355, y: 275 }
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
        pos: { x: 110, y: 500 }
      },
      {
        day: "Day 2",
        name: "Panaji & Old Goa",
        img: "/images/ga-panaji.jpg",
        pos: { x: 115, y: 505 }
      },
      {
        day: "Day 3",
        name: "South Goa",
        img: "/images/ga-dudhsagar.jpg",
        pos: { x: 125, y: 520 }
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
        pos: { x: 160, y: 250 }
      },
      {
        day: "Day 2",
        name: "Jodhpur",
        img: "/images/rj-jodhpur.jpg",
        pos: { x: 110, y: 235 }
      },
      {
        day: "Day 3",
        name: "Udaipur",
        img: "/images/rj-udaipur.jpg",
        pos: { x: 125, y: 305 }
      }
    ]
  }
};

