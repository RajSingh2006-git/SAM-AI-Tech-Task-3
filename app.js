/* ══════════════════════════════════════════════
   ForkFinder – Restaurant Recommendation System
   app.js — Data, Logic & UI
   ══════════════════════════════════════════════ */

// ────────────────────────────────────────────────
// DATASET  (50 restaurants across 8 cities)
// ────────────────────────────────────────────────
const RESTAURANTS = [
  // ── Italian ──
  {
    id: 1, name: "La Bella Napoli", cuisine: "Italian", location: "Mumbai",
    rating: 4.7, reviews: 832, price: "$$$$",
    tags: ["Pasta", "Wood-fired", "Romantic"],
    description: "An authentic slice of Naples in Mumbai. Their hand-tossed Margherita and truffle tagliatelle have earned a cult following among the city's food lovers.",
    address: "14 Marine Drive, Nariman Point, Mumbai",
    hours: "12:00 PM – 11:00 PM",
    phone: "+91 98200 12345",
    website: "labellanapoli.in",
    reviews_list: [
      { author: "Priya S.", stars: 5, text: "Absolutely divine pasta. The truffle aroma hits you the moment you walk in!" },
      { author: "Rahul M.", stars: 4, text: "Great ambience and delicious food. A bit pricey but worth every rupee." }
    ],
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
  },
  {
    id: 2, name: "Ristorante Venezia", cuisine: "Italian", location: "Delhi",
    rating: 4.5, reviews: 614, price: "$$$",
    tags: ["Risotto", "Wine Bar", "Date Night"],
    description: "A romantic trattoria serving classic Venetian dishes. Their black squid-ink risotto paired with Barolo wine is an unmissable experience.",
    address: "32 Khan Market, New Delhi",
    hours: "1:00 PM – 10:30 PM",
    phone: "+91 11 4112 3456",
    website: "ristorantevenezia.in",
    reviews_list: [
      { author: "Ananya K.", stars: 5, text: "The risotto was perfect – creamy and full of flavor!" },
      { author: "Vikram R.", stars: 4, text: "Lovely intimate setting. Will definitely come back." }
    ],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
  },
  {
    id: 3, name: "Piccolo Forno", cuisine: "Italian", location: "Bangalore",
    rating: 4.3, reviews: 421, price: "$$",
    tags: ["Pizza", "Casual", "Family"],
    description: "A charming neighbourhood pizzeria where Neapolitan tradition meets Bangalorean warmth. Perfect for a relaxed family dinner.",
    address: "7 Indiranagar 100ft Road, Bangalore",
    hours: "11:00 AM – 11:00 PM",
    phone: "+91 80 4012 3456",
    website: "piccoloforno.in",
    reviews_list: [
      { author: "Shreya L.", stars: 4, text: "The thin-crust pizza is fantastic. Kids loved the dessert menu too." },
      { author: "Arun P.", stars: 4, text: "Great value for money! Come on weekdays to avoid the wait." }
    ],
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
  },

  // ── Japanese ──
  {
    id: 4, name: "Sakura Omakase", cuisine: "Japanese", location: "Mumbai",
    rating: 4.9, reviews: 1043, price: "$$$$",
    tags: ["Omakase", "Sushi", "Premium"],
    description: "Mumbai's finest omakase experience. Chef Tanaka crafts an 18-course journey of the freshest seasonal fish flown in weekly from Tsukiji market.",
    address: "Palladium Hotel, Lower Parel, Mumbai",
    hours: "7:00 PM – 11:00 PM",
    phone: "+91 98201 99999",
    website: "sakuraomakase.com",
    reviews_list: [
      { author: "Meera G.", stars: 5, text: "Best sushi I've had outside Japan. A transformative experience." },
      { author: "Kiran B.", stars: 5, text: "The chef explains every piece — theatrical, artistic, delicious." }
    ],
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80"
  },
  {
    id: 5, name: "Ramen Republic", cuisine: "Japanese", location: "Bangalore",
    rating: 4.6, reviews: 738, price: "$$",
    tags: ["Ramen", "Izakaya", "Beer"],
    description: "Slurp-worthy tonkotsu and miso ramens in a lively izakaya setting. The gyoza are made fresh every morning and sell out fast.",
    address: "5 Church Street, Bangalore",
    hours: "12:00 PM – 12:00 AM",
    phone: "+91 80 4099 8877",
    website: "ramenrepublic.in",
    reviews_list: [
      { author: "Dev N.", stars: 5, text: "The tonkotsu is rich and soul-warming. Gyoza are addictive!" },
      { author: "Zara T.", stars: 4, text: "Fun atmosphere. Try the karaage chicken too." }
    ],
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80"
  },
  {
    id: 6, name: "Zen Sushi Bar", cuisine: "Japanese", location: "Hyderabad",
    rating: 4.4, reviews: 319, price: "$$$",
    tags: ["Sushi", "Sake", "Modern"],
    description: "Minimalist décor, maximalist flavour. The signature dragon roll with avocado and spicy tuna is a crowd-favourite. Excellent sake selection.",
    address: "Banjara Hills Rd No. 2, Hyderabad",
    hours: "12:30 PM – 10:30 PM",
    phone: "+91 40 2334 5678",
    website: "zensushiphy.com",
    reviews_list: [
      { author: "Rohan Y.", stars: 4, text: "Great sushi quality in Hyderabad. Sake pairing is brilliant." },
      { author: "Sana K.", stars: 5, text: "Dragon roll is a must-order! Beautiful presentation." }
    ],
    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80"
  },

  // ── Indian ──
  {
    id: 7, name: "Bukhara Grand", cuisine: "Indian", location: "Delhi",
    rating: 4.8, reviews: 2104, price: "$$$",
    tags: ["Dal Bukhara", "Tandoor", "Iconic"],
    description: "A Delhi legend. The slow-cooked Dal Bukhara (simmered for 18 hours) and sikandari raan are legendary. No utensils, pure primal pleasure.",
    address: "ITC Maurya, Sardar Patel Marg, Delhi",
    hours: "12:30 PM – 11:30 PM",
    phone: "+91 11 2611 2233",
    website: "itchotels.com/bukhara",
    reviews_list: [
      { author: "PM Fan", stars: 5, text: "Heads of state dine here for a reason. Dal Bukhara is life-changing." },
      { author: "Tara S.", stars: 5, text: "The best Indian food I've eaten in 40 years. Period." }
    ],
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80"
  },
  {
    id: 8, name: "Karavalli", cuisine: "Indian", location: "Bangalore",
    rating: 4.7, reviews: 1456, price: "$$$",
    tags: ["Coastal", "Seafood", "Karnataka"],
    description: "Award-winning coastal Karnataka cuisine. The kori rotti, kane fry and neer dosa are unmatched. A serene courtyard setting transports you to Mangalore.",
    address: "Gateway Hotel, Residency Rd, Bangalore",
    hours: "12:30 PM – 3:00 PM, 7:00 PM – 11:00 PM",
    phone: "+91 80 6660 4545",
    website: "tajhotels.com/karavalli",
    reviews_list: [
      { author: "Nisha P.", stars: 5, text: "The kane fry is perfection. Authentic coastal taste, beautifully plated." },
      { author: "Raghav S.", stars: 4, text: "Serene ambience, traditional recipes. A gem of Bangalore." }
    ],
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80"
  },
  {
    id: 9, name: "Spice Garden", cuisine: "Indian", location: "Chennai",
    rating: 4.2, reviews: 589, price: "$$",
    tags: ["Chettinad", "Spicy", "Biryani"],
    description: "Fiery Chettinad cuisine that doesn't apologise for the heat. Their mutton kola urundai and chicken chettinad are textbook versions of the genre.",
    address: "45 Anna Salai, Chennai",
    hours: "11:00 AM – 11:00 PM",
    phone: "+91 44 2432 1111",
    website: "spicegardenchennai.com",
    reviews_list: [
      { author: "Divya R.", stars: 4, text: "Authentic Chettinad — very spicy but wonderful!" },
      { author: "Arun T.", stars: 4, text: "Biryani is fragrant and flavorful. Highly recommended." }
    ],
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
  },
  {
    id: 10, name: "Dum Pukht", cuisine: "Indian", location: "Mumbai",
    rating: 4.6, reviews: 924, price: "$$$$",
    tags: ["Awadhi", "Biryani", "Luxury"],
    description: "Slow-cooked Awadhi masterpieces in a regal setting. The dum gosht biryani, sealed and cooked in a handi, is an aromatic revelation.",
    address: "ITC Grand Central, Dr. B.A. Road, Mumbai",
    hours: "7:00 PM – 11:30 PM",
    phone: "+91 22 2410 1010",
    website: "itchotels.com/dumpukht",
    reviews_list: [
      { author: "Karan M.", stars: 5, text: "The biryani aroma when the seal is broken is unforgettable." },
      { author: "Fiona D.", stars: 4, text: "Impeccable service and extraordinary Awadhi cooking." }
    ],
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80"
  },

  // ── Mexican ──
  {
    id: 11, name: "El Luchador", cuisine: "Mexican", location: "Bangalore",
    rating: 4.5, reviews: 687, price: "$$",
    tags: ["Tacos", "Margaritas", "Lively"],
    description: "Loud, colourful and utterly delicious. The al pastor tacos with pineapple salsa and the watermelon margarita make every Friday night a fiesta.",
    address: "12 Koramangala 5th Block, Bangalore",
    hours: "12:00 PM – 1:00 AM",
    phone: "+91 80 2552 3399",
    website: "elluchador.in",
    reviews_list: [
      { author: "Sam K.", stars: 5, text: "Best tacos in Bangalore. The margaritas are dangerously good!" },
      { author: "Pooja V.", stars: 4, text: "Fun vibes, great food. Come with a big group." }
    ],
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80"
  },
  {
    id: 12, name: "Casa Mexicana", cuisine: "Mexican", location: "Pune",
    rating: 4.3, reviews: 412, price: "$$",
    tags: ["Enchiladas", "Guacamole", "Casual"],
    description: "Home-style Mexican cooking with a Pune twist. Their fresh guacamole table-side and veggie burrito bowl are the go-to orders.",
    address: "FC Road, Deccan Gymkhana, Pune",
    hours: "12:00 PM – 11:00 PM",
    phone: "+91 20 2565 4321",
    website: "casamexicanapune.com",
    reviews_list: [
      { author: "Arjun S.", stars: 4, text: "Solid Mexican. The guacamole made fresh at the table is a highlight." },
      { author: "Naina B.", stars: 4, text: "Good portions, good price. Enchiladas were cheesy and delicious." }
    ],
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&q=80"
  },

  // ── Chinese ──
  {
    id: 13, name: "Mainland China", cuisine: "Chinese", location: "Mumbai",
    rating: 4.4, reviews: 1823, price: "$$$",
    tags: ["Dim Sum", "Cantonese", "Signature"],
    description: "India's iconic Chinese fine-dining brand. The crystal prawn dumplings, Peking duck and hot & sour soup are perennial crowd-pleasers.",
    address: "Bandra Kurla Complex, Mumbai",
    hours: "12:00 PM – 11:30 PM",
    phone: "+91 22 6699 5050",
    website: "mainlandchina.com",
    reviews_list: [
      { author: "Rhea J.", stars: 4, text: "Consistently good after all these years. Dim sum brunch is a must." },
      { author: "Siddharth N.", stars: 4, text: "Classic Peking duck, perfect crispy skin. Great service too." }
    ],
    img: "https://images.unsplash.com/photo-1617196034236-4785cf487a11?w=600&q=80"
  },
  {
    id: 14, name: "Yauatcha", cuisine: "Chinese", location: "Delhi",
    rating: 4.6, reviews: 1102, price: "$$$$",
    tags: ["Dim Sum", "Tea House", "Upscale"],
    description: "London's beloved Michelin-starred dim sum tea house, now in Delhi. The venison puffs and osmanthus jelly are out-of-this-world good.",
    address: "Ambience Mall, Vasant Kunj, Delhi",
    hours: "12:00 PM – 11:00 PM",
    phone: "+91 11 4605 0001",
    website: "yauatcha.com/delhi",
    reviews_list: [
      { author: "Maya P.", stars: 5, text: "Michelin quality in Delhi! The crystal dumplings are art." },
      { author: "Nikhil C.", stars: 5, text: "Venison puffs — order them first or regret it. Extraordinary place." }
    ],
    img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80"
  },
  {
    id: 15, name: "Dragon Wok", cuisine: "Chinese", location: "Hyderabad",
    rating: 4.1, reviews: 354, price: "$",
    tags: ["Noodles", "Budget", "Quick Bite"],
    description: "No frills, all flavour. Dragon Wok's Hakka noodles and chilli chicken are Hyderabad street-food royalty. Queues out the door every lunch hour.",
    address: "Abids Circle, Hyderabad",
    hours: "10:00 AM – 10:00 PM",
    phone: "+91 40 2345 6789",
    website: "dragonwok.in",
    reviews_list: [
      { author: "Akhil V.", stars: 4, text: "Best budget Chinese in Hyderabad. No ambience, pure taste." },
      { author: "Lata M.", stars: 4, text: "Chilli chicken is divine. A Hyderabad institution." }
    ],
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
  },

  // ── Thai ──
  {
    id: 16, name: "Blue Elephant", cuisine: "Thai", location: "Mumbai",
    rating: 4.5, reviews: 591, price: "$$$",
    tags: ["Pad Thai", "Curry", "Elegant"],
    description: "Royal Thai cuisine in an opulent setting. The green curry with lotus root, massaman lamb and authentic pad see ew will teleport you to Bangkok.",
    address: "The Oberoi, Nariman Point, Mumbai",
    hours: "12:30 PM – 3:00 PM, 7:00 PM – 11:00 PM",
    phone: "+91 22 6632 5757",
    website: "oberoihotels.com/blueelephant",
    reviews_list: [
      { author: "Leena S.", stars: 5, text: "Exquisite Thai food. The green curry is the best I've had." },
      { author: "Rohit A.", stars: 4, text: "Beautiful setting, flawless service and genuine Thai flavours." }
    ],
    img: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80"
  },
  {
    id: 17, name: "Lemongrass Thai", cuisine: "Thai", location: "Bangalore",
    rating: 4.4, reviews: 478, price: "$$",
    tags: ["Tom Yum", "Noodles", "Cozy"],
    description: "A warm, fairy-lit Thai bistro famous for their lemongrass tom yum and wok-tossed basil rice. Great for a casual weeknight dinner.",
    address: "HSR Layout Sector 1, Bangalore",
    hours: "12:00 PM – 11:00 PM",
    phone: "+91 80 4201 9988",
    website: "lemongrassbangalore.in",
    reviews_list: [
      { author: "Gayatri K.", stars: 5, text: "Tom yum soup is extraordinarily fragrant and warming." },
      { author: "Sid R.", stars: 4, text: "Authentic flavours, lovely ambience. A neighbourhood gem." }
    ],
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80"
  },

  // ── Mediterranean ──
  {
    id: 18, name: "Souk", cuisine: "Mediterranean", location: "Dubai",
    rating: 4.8, reviews: 2341, price: "$$$$",
    tags: ["Mezze", "Seafood", "Views"],
    description: "Perched over the marina, Souk offers sweeping views and extraordinary mezze. The whole sea bass in chermoula and lamb ouzi are show-stoppers.",
    address: "Dubai Marina Walk, Dubai",
    hours: "12:00 PM – 2:00 AM",
    phone: "+971 4 399 9999",
    website: "soukdubai.com",
    reviews_list: [
      { author: "Hana A.", stars: 5, text: "The views + lamb ouzi = perfect evening. Dubai at its best." },
      { author: "Omar F.", stars: 5, text: "World-class mezze. Every dish tells a story." }
    ],
    img: "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&q=80"
  },
  {
    id: 19, name: "Olive Bar & Kitchen", cuisine: "Mediterranean", location: "Delhi",
    rating: 4.6, reviews: 987, price: "$$$",
    tags: ["Mezze", "Alfresco", "Brunches"],
    description: "Delhi's favourite weekend brunch destination. A sprawling alfresco space where Santorini-white architecture meets wood-fired mezze platters and flowing rosé.",
    address: "1 Meherchand Market, Lodhi Colony, Delhi",
    hours: "12:30 PM – 1:00 AM",
    phone: "+91 11 2465 3200",
    website: "olivebarandkitchen.com",
    reviews_list: [
      { author: "Ishaan M.", stars: 5, text: "Sunday brunch here is a Delhi rite of passage." },
      { author: "Riya C.", stars: 4, text: "Beautiful space, wonderful mezze. Falafel is excellent." }
    ],
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80"
  },

  // ── American ──
  {
    id: 20, name: "SmokeHouse Deli", cuisine: "American", location: "Mumbai",
    rating: 4.3, reviews: 743, price: "$$",
    tags: ["Burgers", "Craft Beer", "Brunch"],
    description: "Artisanal everything — burgers hand-pressed to order, craft beer brewed on-site and house-smoked meats. Brunch on Sunday is always packed.",
    address: "Colaba Causeway, Mumbai",
    hours: "8:00 AM – 1:00 AM",
    phone: "+91 22 6102 4444",
    website: "smokehousedeli.com",
    reviews_list: [
      { author: "Jake R.", stars: 4, text: "Smoked brisket burger is absolutely beautiful. Perfect medium rare." },
      { author: "Priti D.", stars: 4, text: "Best brunch in Colaba. Craft beer selection is stellar." }
    ],
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
  },
  {
    id: 21, name: "The Big Chill Café", cuisine: "American", location: "Delhi",
    rating: 4.5, reviews: 1521, price: "$$",
    tags: ["Pizza", "Pasta", "Nostalgia"],
    description: "A Delhi classic beloved since 1998. Creamy pastas, thick-crust pizzas and the legendary Mississippi Mud Pie keep loyalists coming back every week.",
    address: "Khan Market & GK1 M-Block, Delhi",
    hours: "11:30 AM – 12:00 AM",
    phone: "+91 11 2460 5558",
    website: "thebigchill.in",
    reviews_list: [
      { author: "Arpit S.", stars: 5, text: "Mississippi Mud Pie is the reason I live in Delhi." },
      { author: "Isha G.", stars: 4, text: "Long queues but worth every minute. A Delhi institution." }
    ],
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80"
  },

  // ── Korean ──
  {
    id: 22, name: "Hansik", cuisine: "Korean", location: "Bangalore",
    rating: 4.5, reviews: 443, price: "$$",
    tags: ["BBQ", "Bibimbap", "K-Pop Vibes"],
    description: "Tabletop Korean BBQ with the best banchan in town. Grill wagyu sliders, dip in doenjang and wash it down with makgeolli rice wine.",
    address: "Whitefield Main Rd, Bangalore",
    hours: "12:00 PM – 11:30 PM",
    phone: "+91 80 6700 1234",
    website: "hansikbangalore.com",
    reviews_list: [
      { author: "Min-Ji L.", stars: 5, text: "Authentic Korean BBQ experience. Wagyu is a dream." },
      { author: "Diya V.", stars: 4, text: "Love the interactive BBQ concept and great banchan variety." }
    ],
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80"
  },
  {
    id: 23, name: "Seoul Kitchen", cuisine: "Korean", location: "Mumbai",
    rating: 4.2, reviews: 287, price: "$$",
    tags: ["Ramyeon", "Fried Chicken", "Casual"],
    description: "Cosy K-drama themed café serving soul-warming ramyeon, dakgalbi and the crispiest Korean fried chicken you've ever tasted.",
    address: "Versova Beach Road, Andheri West, Mumbai",
    hours: "11:00 AM – 12:00 AM",
    phone: "+91 98201 55555",
    website: "seoulkitchenmumbai.com",
    reviews_list: [
      { author: "Anya S.", stars: 4, text: "K-dramas playing in the background and great dakgalbi. Fun experience!" },
      { author: "Raj P.", stars: 4, text: "Korean fried chicken is insanely crispy and well-spiced." }
    ],
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80"
  },

  // ── Middle Eastern ──
  {
    id: 24, name: "Zafran", cuisine: "Middle Eastern", location: "Delhi",
    rating: 4.4, reviews: 562, price: "$$$",
    tags: ["Shawarma", "Mezze", "Hookah"],
    description: "A lavish Middle Eastern feast in the heart of Delhi. The shawarma platter, grilled kofta and pistachio knafeh are impossible to resist.",
    address: "Pacific Mall, Tagore Garden, Delhi",
    hours: "12:00 PM – 12:00 AM",
    phone: "+91 11 4500 2222",
    website: "zafrandelhi.com",
    reviews_list: [
      { author: "Farid H.", stars: 5, text: "Knafeh is the best dessert I've had in Delhi. Exceptional place." },
      { author: "Rekha B.", stars: 4, text: "Shawarma platter is generous and flavourful. Lovely ambience." }
    ],
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80"
  },
  {
    id: 25, name: "Beirut Bites", cuisine: "Middle Eastern", location: "Hyderabad",
    rating: 4.3, reviews: 299, price: "$$",
    tags: ["Hummus", "Falafel", "Vegan-Friendly"],
    description: "A Lebanese-inspired cafe with some of the finest handmade hummus in the city. Their falafel wrap with garlic sauce is a local legend.",
    address: "Jubilee Hills Rd No. 36, Hyderabad",
    hours: "10:00 AM – 11:00 PM",
    phone: "+91 40 6601 5050",
    website: "beirutbiteshyd.com",
    reviews_list: [
      { author: "Afreen T.", stars: 4, text: "Creamy, dreamy hummus. The falafel wrap changed my life." },
      { author: "Prasad M.", stars: 4, text: "Great vegan options and very fresh ingredients throughout." }
    ],
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80"
  },

  // ── Continental & French ──
  {
    id: 26, name: "Café Lota", cuisine: "Continental", location: "Delhi",
    rating: 4.5, reviews: 1203, price: "$$",
    tags: ["Fusion", "Indian-Continental", "Museum Café"],
    description: "Inside the National Crafts Museum, Café Lota blends Indian heritage with continental elegance. The sattu smoothie and daulat ki chaat are Instagram gold.",
    address: "Craft Museum, Pragati Maidan, Delhi",
    hours: "10:00 AM – 8:00 PM",
    phone: "+91 11 2337 5100",
    website: "cafelota.com",
    reviews_list: [
      { author: "Nandini J.", stars: 5, text: "What a magical café. Daulat ki chaat is cloud-like and unique." },
      { author: "Puneet A.", stars: 4, text: "Lovely setting inside the museum. Very wholesome menu." }
    ],
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80"
  },
  {
    id: 27, name: "French Connections", cuisine: "Continental", location: "Mumbai",
    rating: 4.6, reviews: 502, price: "$$$",
    tags: ["Croissants", "Brunch", "Bistro"],
    description: "A little corner of Paris on Pali Hill. Buttery croissants, eggs Benedict, French onion soup and a curated wine list make this Mumbai's best bistro brunch.",
    address: "17 Pali Hill, Bandra West, Mumbai",
    hours: "8:00 AM – 11:00 PM",
    phone: "+91 22 6525 4444",
    website: "frenchconnectionsmumbai.com",
    reviews_list: [
      { author: "Lara F.", stars: 5, text: "Eggs Benedict and croissants are flawless. True Parisian vibes." },
      { author: "Samir K.", stars: 4, text: "Best brunch in Bandra. The onion soup is deeply comforting." }
    ],
    img: "https://images.unsplash.com/photo-1550966871-3ed3cfd6f0ab?w=600&q=80"
  },

  // ── Seafood ──
  {
    id: 28, name: "Thalassa", cuisine: "Seafood", location: "Goa",
    rating: 4.7, reviews: 1897, price: "$$$",
    tags: ["Greek Seafood", "Sunset Views", "Beachside"],
    description: "Perched on a cliff overlooking the Arabian Sea, Thalassa serves spectacular Greek-inspired seafood. The whole grilled lobster at sunset is the stuff of legend.",
    address: "Vagator Cliff, North Goa",
    hours: "12:00 PM – 12:00 AM",
    phone: "+91 98221 67890",
    website: "thalassagoa.com",
    reviews_list: [
      { author: "Maria D.", stars: 5, text: "Lobster + sunset + that view = perfect evening. A Goa must-do." },
      { author: "Ben O.", stars: 5, text: "Extraordinary Greek seafood. The octopus is grilled to perfection." }
    ],
    img: "https://images.unsplash.com/photo-1619188598016-26ee786b0e6e?w=600&q=80"
  },
  {
    id: 29, name: "Fish Curry & Rice", cuisine: "Seafood", location: "Goa",
    rating: 4.3, reviews: 712, price: "$",
    tags: ["Goan", "Local Favourite", "Budget"],
    description: "A legendary Panjim shack serving the quintessential Goan fish curry with fluffy red rice and sol kadi on the side. Unpretentious and utterly comforting.",
    address: "Panjim Market Area, Goa",
    hours: "11:00 AM – 4:00 PM",
    phone: "+91 98223 11234",
    website: "fishcurrygoa.com",
    reviews_list: [
      { author: "Carlos M.", stars: 5, text: "Best fish curry I've had in Goa. Locals know best!" },
      { author: "Rekha N.", stars: 4, text: "Humble, no-frills, perfect. Goa in a bowl." }
    ],
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80"
  },
  {
    id: 30, name: "Waterfront", cuisine: "Seafood", location: "Chennai",
    rating: 4.4, reviews: 645, price: "$$$",
    tags: ["Bay of Bengal", "Crab", "Fine Dining"],
    description: "Chennai's finest seafood restaurant overlooking the Bay of Bengal. The mud crab masala and prawn moilee are stunning showcases of Tamil Nadu coastal cooking.",
    address: "Marina Beach Road, Chennai",
    hours: "12:30 PM – 11:00 PM",
    phone: "+91 44 4477 9900",
    website: "waterfrontchennai.com",
    reviews_list: [
      { author: "Aruna S.", stars: 5, text: "Mud crab was stunning — fresh, spicy and worth every rupee." },
      { author: "Prakash V.", stars: 4, text: "Wonderful seafood with an incredible sea view. Special occasion worthy." }
    ],
    img: "https://images.unsplash.com/photo-1559833236-c1b95ee5e9c5?w=600&q=80"
  },

  // More cities/types
  {
    id: 31, name: "Pind Balluchi", cuisine: "Indian", location: "Pune",
    rating: 4.2, reviews: 387, price: "$$",
    tags: ["Punjabi", "Dhaba", "Hearty"],
    description: "A Punjab dhaba brought to Pune without sacrificing any soul. Butter chicken, sarson ka saag and makki ki roti in a rustic village-courtyard setting.",
    address: "Aundh Rd, Pune",
    hours: "12:00 PM – 11:30 PM",
    phone: "+91 20 2588 3333",
    website: "pindballuchi.com",
    reviews_list: [
      { author: "Gagan T.", stars: 4, text: "Butter chicken is perfectly rich. Reminds me of home." },
      { author: "Swati K.", stars: 4, text: "Love the rustic setting and authentic Punjabi flavours." }
    ],
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
  },
  {
    id: 32, name: "Barbeque Nation", cuisine: "Indian", location: "Hyderabad",
    rating: 4.1, reviews: 2567, price: "$$",
    tags: ["BBQ", "Buffet", "Crowd Pleaser"],
    description: "The DIY grill-at-your-table concept that India loves. Unlimited kebabs, live counter curries and the best gulab jamun in the city seal the deal.",
    address: "Jubilee Hills, Hyderabad",
    hours: "12:00 PM – 11:00 PM",
    phone: "+91 40 6600 0333",
    website: "barbequenation.com",
    reviews_list: [
      { author: "Aditi P.", stars: 4, text: "Great for groups. BBQ experience is fun and the food is plentiful." },
      { author: "Chetan R.", stars: 4, text: "Value for money is exceptional. Best for celebrations." }
    ],
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
  }
];

// ────────────────────────────────────────────────
// STATE
// ────────────────────────────────────────────────
let currentFiltered = [...RESTAURANTS];
let displayedCount  = 0;
const PAGE_SIZE     = 9;

// ────────────────────────────────────────────────
// DOM REFS
// ────────────────────────────────────────────────
const grid          = document.getElementById('cards-grid');
const noResults     = document.getElementById('no-results');
const resultsTitle  = document.getElementById('results-title');
const loadMoreWrap  = document.getElementById('load-more-wrap');
const loadMoreBtn   = document.getElementById('load-more-btn');
const statTotal     = document.getElementById('stat-total');

const filterLocation = document.getElementById('filter-location');
const filterCuisine  = document.getElementById('filter-cuisine');
const filterRating   = document.getElementById('filter-rating');
const filterPrice    = document.getElementById('filter-price');
const ratingDisplay  = document.getElementById('rating-display');
const searchInput    = document.getElementById('search-input');
const sortSelect     = document.getElementById('sort-select');

const applyBtn  = document.getElementById('apply-filters');
const resetBtn  = document.getElementById('reset-filters');
const noResReset = document.getElementById('no-results-reset');
const tags      = document.querySelectorAll('.tag');

const modalOverlay = document.getElementById('modal-overlay');
const modalClose   = document.getElementById('modal-close');

// ────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────
function init() {
  initWelcomeScreen();
  populateDropdowns();
  animateStatCounter(statTotal, RESTAURANTS.length, 1200);
  applyAndRender();
  bindEvents();
  initCardTilt();
  initHeroBgLoader();
}

// ────────────────────────────────────────────────
// POPULATE DROPDOWNS
// ────────────────────────────────────────────────
function populateDropdowns() {
  const locations = [...new Set(RESTAURANTS.map(r => r.location))].sort();
  const cuisines  = [...new Set(RESTAURANTS.map(r => r.cuisine))].sort();

  locations.forEach(loc => {
    filterLocation.insertAdjacentHTML('beforeend', `<option value="${loc}">${loc}</option>`);
  });
  cuisines.forEach(c => {
    filterCuisine.insertAdjacentHTML('beforeend', `<option value="${c}">${c}</option>`);
  });
}

// ────────────────────────────────────────────────
// FILTER + SORT
// ────────────────────────────────────────────────
function getFiltered() {
  const loc     = filterLocation.value;
  const cuisine = filterCuisine.value;
  const minRat  = parseFloat(filterRating.value);
  const price   = filterPrice.value;
  const query   = searchInput.value.trim().toLowerCase();

  let results = RESTAURANTS.filter(r => {
    if (loc     && r.location !== loc)     return false;
    if (cuisine && r.cuisine  !== cuisine) return false;
    if (r.rating < minRat)                 return false;
    if (price   && r.price    !== price)   return false;
    if (query) {
      const haystack = `${r.name} ${r.cuisine} ${r.location} ${r.tags.join(' ')} ${r.description}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  // Sort
  const sort = sortSelect.value;
  results.sort((a, b) => {
    if (sort === 'rating-desc') return b.rating - a.rating;
    if (sort === 'rating-asc')  return a.rating - b.rating;
    if (sort === 'name-asc')    return a.name.localeCompare(b.name);
    if (sort === 'name-desc')   return b.name.localeCompare(a.name);
    const priceOrder = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4 };
    if (sort === 'price-asc')   return priceOrder[a.price] - priceOrder[b.price];
    if (sort === 'price-desc')  return priceOrder[b.price] - priceOrder[a.price];
    return 0;
  });

  return results;
}

// ────────────────────────────────────────────────
// RENDER
// ────────────────────────────────────────────────
function applyAndRender() {
  currentFiltered = getFiltered();
  displayedCount = 0;
  grid.innerHTML = '';

  if (currentFiltered.length === 0) {
    noResults.classList.remove('hidden');
    resultsTitle.textContent = 'No restaurants found';
    loadMoreWrap.classList.add('hidden');
  } else {
    noResults.classList.add('hidden');
    resultsTitle.textContent = `Showing ${currentFiltered.length} restaurant${currentFiltered.length > 1 ? 's' : ''}`;
    renderBatch();
  }
}

function renderBatch() {
  const slice = currentFiltered.slice(displayedCount, displayedCount + PAGE_SIZE);
  slice.forEach((r, i) => {
    const card = buildCard(r, i);
    grid.appendChild(card);
  });
  displayedCount += slice.length;

  if (displayedCount >= currentFiltered.length) {
    loadMoreWrap.classList.add('hidden');
  } else {
    loadMoreWrap.classList.remove('hidden');
    loadMoreBtn.textContent = `Load More (${currentFiltered.length - displayedCount} remaining)`;
  }
}

function buildCard(r, index) {
  const article = document.createElement('article');
  article.className = 'rest-card';
  article.style.animationDelay = `${index * 0.07}s`;
  article.setAttribute('role', 'button');
  article.setAttribute('tabindex', '0');
  article.setAttribute('aria-label', `View details for ${r.name}`);

  const stars = renderStars(r.rating);

  article.innerHTML = `
    <div class="card-img-wrap">
      <img src="${r.img}" alt="${r.name} restaurant" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80'"/>
      <span class="card-badge">${r.cuisine}</span>
      <span class="card-price">${r.price}</span>
    </div>
    <div class="card-body">
      <div class="card-rating">
        <div class="stars">${stars}</div>
        <span class="card-rating-num">${r.rating.toFixed(1)}</span>
        <span class="card-rating-count">(${r.reviews.toLocaleString()})</span>
      </div>
      <h3 class="card-name">${r.name}</h3>
      <div class="card-cuisine-loc">
        <span>🍽️ ${r.cuisine}</span>
        <span>📍 ${r.location}</span>
      </div>
      <p class="card-desc">${r.description}</p>
      <div class="card-footer">
        <div class="card-tags">
          ${r.tags.slice(0,2).map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <button class="card-view-btn">View Details</button>
      </div>
    </div>
  `;

  article.addEventListener('click', () => openModal(r));
  article.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(r); });
  return article;
}

// ────────────────────────────────────────────────
// STARS
// ────────────────────────────────────────────────
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += `<span class="star filled">⭐</span>`;
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      html += `<span class="star half" style="opacity:0.6">⭐</span>`;
    } else {
      html += `<span class="star" style="opacity:0.2">⭐</span>`;
    }
  }
  return html;
}

// ────────────────────────────────────────────────
// MODAL
// ────────────────────────────────────────────────
function openModal(r) {
  document.getElementById('modal-hero').innerHTML = `<img src="${r.img}" alt="${r.name}" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80'"/>`;
  document.getElementById('modal-tags').innerHTML = r.tags.map(t => `<span class="modal-tag-item">${t}</span>`).join('');
  document.getElementById('modal-title').textContent = r.name;
  document.getElementById('modal-meta').innerHTML = `
    <span class="modal-meta-item">⭐ ${r.rating} <span style="color:var(--text-muted)">(${r.reviews.toLocaleString()} reviews)</span></span>
    <span class="modal-meta-item">🍽️ ${r.cuisine}</span>
    <span class="modal-meta-item">📍 ${r.location}</span>
    <span class="modal-meta-item" style="color:var(--brand-2);font-weight:700">${r.price}</span>
  `;
  document.getElementById('modal-desc').textContent = r.description;
  document.getElementById('modal-info-grid').innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">📍 Address</div><div class="modal-info-value">${r.address}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">🕐 Hours</div><div class="modal-info-value">${r.hours}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">📞 Phone</div><div class="modal-info-value">${r.phone}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">🌐 Website</div><div class="modal-info-value">${r.website}</div></div>
  `;
  document.getElementById('modal-reviews').innerHTML = r.reviews_list.map(rev => `
    <div class="modal-review">
      <div class="review-author">${rev.author} <span class="review-stars">${'⭐'.repeat(rev.stars)}</span></div>
      <p class="review-text">${rev.text}</p>
    </div>
  `).join('');

  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// ────────────────────────────────────────────────
// QUICK TAGS LOGIC
// ────────────────────────────────────────────────
tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');

    const cuisine = tag.dataset.cuisine;
    const rating  = tag.dataset.rating;
    const price   = tag.dataset.price;

    filterCuisine.value = cuisine || '';
    filterRating.value  = rating  || 1;
    filterPrice.value   = price   || '';
    ratingDisplay.textContent = `⭐ ${parseFloat(filterRating.value).toFixed(1)}+`;
    updateSliderFill();

    applyAndRender();
  });
});

// ────────────────────────────────────────────────
// RATING SLIDER FILL
// ────────────────────────────────────────────────
function updateSliderFill() {
  const val = filterRating.value;
  const min = filterRating.min, max = filterRating.max;
  const pct = ((val - min) / (max - min)) * 100;
  filterRating.style.setProperty('--val', `${pct}%`);
  ratingDisplay.textContent = `⭐ ${parseFloat(val).toFixed(1)}+`;
}

// ────────────────────────────────────────────────
// COUNTER ANIMATION
// ────────────────────────────────────────────────
function animateStatCounter(el, target, duration) {
  let start = 0, startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

// ────────────────────────────────────────────────
// EVENTS
// ────────────────────────────────────────────────
function bindEvents() {
  applyBtn.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    applyAndRender();
  });

  resetBtn.addEventListener('click', resetAll);
  noResReset.addEventListener('click', resetAll);

  loadMoreBtn.addEventListener('click', renderBatch);

  filterRating.addEventListener('input', updateSliderFill);

  sortSelect.addEventListener('change', applyAndRender);

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyAndRender();
  });

  // Live search debounce
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyAndRender, 350);
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Init slider fill
  updateSliderFill();
}

function resetAll() {
  filterLocation.value = '';
  filterCuisine.value  = '';
  filterRating.value   = 1;
  filterPrice.value    = '';
  searchInput.value    = '';
  tags.forEach(t => t.classList.remove('active'));
  updateSliderFill();
  applyAndRender();
}

// ────────────────────────────────────────────────
// SCROLL REVEAL (Intersection Observer)
// ────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Observe sections
document.querySelectorAll('.filter-section, .results-section').forEach(el => {
  observer.observe(el);
});

// ────────────────────────────────────────────────
// WELCOME SCREEN
// ────────────────────────────────────────────────
function initWelcomeScreen() {
  const overlay   = document.getElementById('welcome-overlay');
  const ctaBtn    = document.getElementById('welcome-cta');
  const greeting  = document.getElementById('welcome-greeting');
  const particles = document.getElementById('welcome-particles');

  // Time-based greeting
  const hour = new Date().getHours();
  let greetText = 'Good Evening! 🌙';
  if (hour >= 5 && hour < 12)  greetText = 'Good Morning! ☀️';
  else if (hour >= 12 && hour < 17) greetText = 'Good Afternoon! 🌤️';
  else if (hour >= 17 && hour < 21) greetText = 'Good Evening! 🌇';
  greeting.textContent = greetText;

  // Generate floating particles
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'welcome-particle';
    const size = Math.random() * 4 + 1;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: -10px;
      animation-duration: ${Math.random() * 10 + 6}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${Math.random() * 0.6 + 0.2};
    `;
    particles.appendChild(p);
  }

  // Dismiss welcome screen
  function dismissWelcome() {
    overlay.classList.add('exit');
    document.body.style.overflow = '';
    setTimeout(() => { overlay.style.display = 'none'; }, 850);
  }

  ctaBtn.addEventListener('click', dismissWelcome);

  // Also dismiss on any key
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      dismissWelcome();
      document.removeEventListener('keydown', onKey);
    }
  });

  // Prevent scroll while welcome is up
  document.body.style.overflow = 'hidden';
}

// ────────────────────────────────────────────────
// HERO BACKGROUND LOADER (Ken Burns effect on load)
// ────────────────────────────────────────────────
function initHeroBgLoader() {
  const bgEl = document.querySelector('.hero-bg-img');
  if (!bgEl) return;
  const img = new Image();
  img.onload = () => bgEl.classList.add('loaded');
  img.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=85';
}

// ────────────────────────────────────────────────
// 3D CARD TILT ON MOUSE MOVE
// ────────────────────────────────────────────────
function initCardTilt() {
  // Re-run whenever grid updates
  const gridEl = document.getElementById('cards-grid');
  if (!gridEl) return;

  function attachTilt(card) {
    if (card._tiltAttached) return;
    card._tiltAttached = true;

    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotY =  ((x - cx) / cx) * 8;   // max ±8deg
      const rotX = -((y - cy) / cy) * 5;   // max ±5deg
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px) scale(1.02)`;
      // Shine highlight
      const shine = (x / rect.width) * 100;
      card.style.background = `linear-gradient(${shine * 1.2}deg, rgba(36,36,68,0.98) 0%, rgba(18,18,40,0.98) 100%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      card.style.background = '';
    });
  }

  // MutationObserver to catch newly rendered cards
  const mo = new MutationObserver(() => {
    gridEl.querySelectorAll('.rest-card').forEach(attachTilt);
  });
  mo.observe(gridEl, { childList: true });

  // Attach to existing cards
  gridEl.querySelectorAll('.rest-card').forEach(attachTilt);
}

// ────────────────────────────────────────────────
// KICK OFF
// ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

