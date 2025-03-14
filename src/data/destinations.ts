
import { DestinationDetails } from "@/components/DestinationTemplate";

// Jaipur destination data
export const jaipurData: DestinationDetails = {
  name: "Jaipur",
  nickname: "The Pink City",
  description: "Jaipur, the capital of Rajasthan, is known as the 'Pink City' due to the distinctive terracotta pink color of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, the city is a vibrant blend of royal heritage and modern urban planning. With its magnificent palaces, colorful bazaars, and rich cultural traditions, Jaipur forms an essential part of India's famous Golden Triangle tourist circuit.",
  headerImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80",
  history: "Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, who was the ruler of Amber. The city was planned according to the principles of Vastu Shastra and Shilpa Shastra, ancient Indian architectural texts. In 1876, the city was painted pink to welcome Prince Albert, and the tradition has been maintained since then.",
  bestTimeToVisit: "October to March when the weather is pleasant with temperatures ranging from 8°C to 32°C. Avoid summers (April to June) as temperatures can soar above 45°C.",
  howToReach: {
    byAir: "Jaipur International Airport is well-connected to major Indian cities and some international destinations.",
    byRail: "Jaipur Railway Station is connected to all major cities in India through regular train services.",
    byRoad: "Excellent road connectivity with Delhi (5-6 hours), Agra (4-5 hours), and other major cities in North India."
  },
  localCuisine: [
    {
      name: "Dal Baati Churma",
      description: "A traditional Rajasthani dish consisting of baked wheat balls, lentil curry, and a sweet crumbled wheat mixture."
    },
    {
      name: "Pyaaz Kachori",
      description: "A deep-fried pastry filled with spiced onions, a popular street food and breakfast item in Jaipur."
    },
    {
      name: "Ghewar",
      description: "A disc-shaped sweet cake made with flour and soaked in sugar syrup, especially popular during festivals."
    }
  ],
  accommodation: "Jaipur offers a wide range of accommodation options from luxury heritage hotels (converted palaces) to budget guesthouses. The areas around the Old City and C-Scheme are popular places to stay for tourists.",
  budget: "A mid-range budget of ₹2,500-5,000 per day should be sufficient for comfortable accommodation, meals, and local sightseeing. Heritage hotels and luxury experiences can increase the budget significantly.",
  attractions: [
    {
      name: "Hawa Mahal",
      description: "The iconic 'Palace of Winds' with its unique honeycomb facade of 953 small windows was designed to allow royal ladies to observe street festivities without being seen.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80",
    },
    {
      name: "Amber Fort",
      description: "This magnificent fort-palace complex built from pale yellow and pink sandstone and white marble features stunning artistic elements and offers breathtaking views.",
      image: "https://images.unsplash.com/photo-1587295656906-b5b49f77221f?auto=format&fit=crop&q=80",
    },
    {
      name: "City Palace",
      description: "The royal residence features a series of courtyards, gardens, and buildings showcasing a fusion of Rajasthani and Mughal architectural styles.",
      image: "https://images.unsplash.com/photo-1573979429815-f938a8259de1?auto=format&fit=crop&q=80",
    },
  ],
  festivals: [
    {
      name: "Jaipur Literature Festival",
      month: "January",
      description: "The world's largest free literary festival attracts authors, thinkers, and literature enthusiasts from around the globe.",
    },
    {
      name: "Teej Festival",
      month: "July-August",
      description: "A vibrant celebration honoring Goddess Parvati with colorful processions, traditional songs, and swings decorated with flowers.",
    },
    {
      name: "Elephant Festival",
      month: "March",
      description: "A unique festival featuring elaborately decorated elephants, folk performances, and traditional Rajasthani music.",
    },
  ],
  tips: [
    "The best time to visit Jaipur is from October to March when the weather is pleasant.",
    "Bargaining is expected in most markets, so don't hesitate to negotiate prices.",
    "Hire a local guide to truly appreciate the rich history and architecture of the monuments.",
    "Try the local cuisine, especially Dal Baati Churma and Pyaaz Kachori.",
  ],
};

// Delhi destination data
export const delhiData: DestinationDetails = {
  name: "Delhi",
  nickname: "Heart of India",
  description: "Delhi, India's capital territory, is a massive metropolitan area in the country's north. As the seat of multiple empires throughout history, Delhi showcases an incredible fusion of ancient monuments and modern development. The city is divided into Old Delhi, the historic heart, and New Delhi, the planned capital built during British rule. Delhi serves as a gateway to India's rich cultural heritage and its emerging future.",
  headerImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80",
  history: "Delhi has been continuously inhabited since the 6th century BCE and has served as the capital of various empires. It has been destroyed and rebuilt multiple times, with each ruling dynasty leaving its architectural mark. The city has witnessed the rise and fall of many empires including the Delhi Sultanate, the Mughals, and the British.",
  bestTimeToVisit: "October to March when the weather is pleasant. Winter (December-January) can be quite cold with fog, while summers (April-June) are extremely hot with temperatures exceeding 45°C.",
  howToReach: {
    byAir: "Indira Gandhi International Airport is one of the busiest airports in Asia and is well-connected to destinations worldwide.",
    byRail: "New Delhi Railway Station, Old Delhi Railway Station, and Hazrat Nizamuddin Railway Station connect Delhi to all major cities in India.",
    byRoad: "Delhi is connected to all major cities in North India through a network of national highways."
  },
  localCuisine: [
    {
      name: "Chole Bhature",
      description: "A combination of spicy chickpea curry (chole) and deep-fried bread (bhature), a popular breakfast dish."
    },
    {
      name: "Paranthewali Gali",
      description: "A famous street in Old Delhi known for its stuffed paranthas (Indian flatbread) with various fillings."
    },
    {
      name: "Daulat ki Chaat",
      description: "A unique winter dessert made of milk foam, topped with pistachios and saffron, found in the streets of Old Delhi."
    }
  ],
  accommodation: "Delhi offers accommodation options for all budgets. Connaught Place, Karol Bagh, and Paharganj are popular areas for budget travelers, while Lutyens' Delhi and South Delhi cater to luxury travelers.",
  budget: "A budget of ₹3,000-6,000 per day is recommended for comfortable mid-range accommodation, meals, and local transportation. Delhi Metro is an efficient and economical way to get around the city.",
  attractions: [
    {
      name: "Red Fort",
      description: "This historic fort built by Shah Jahan in the 17th century served as the main residence of the Mughal Emperors for nearly 200 years.",
      image: "https://images.unsplash.com/photo-1590466350190-a400c7877eb2?auto=format&fit=crop&q=80",
    },
    {
      name: "Qutub Minar",
      description: "A UNESCO World Heritage Site, this 73-meter tall minaret was built in 1193 and is a stunning example of Indo-Islamic architecture.",
      image: "https://images.unsplash.com/photo-1586183189334-1abd18bf5ace?auto=format&fit=crop&q=80",
    },
    {
      name: "Humayun's Tomb",
      description: "Built in 1570, this magnificent garden tomb is the first substantial example of Mughal architecture in India.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    },
  ],
  festivals: [
    {
      name: "Diwali",
      month: "October-November",
      description: "The festival of lights is celebrated with illuminated homes, fireworks, and special prayers to Goddess Lakshmi.",
    },
    {
      name: "Republic Day",
      month: "January",
      description: "A patriotic celebration featuring an impressive parade down Rajpath showcasing India's military strength and cultural diversity.",
    },
  ],
  tips: [
    "Use the efficient Delhi Metro system to avoid traffic and easily reach major attractions.",
    "Delhi experiences extreme seasons, so the best time to visit is from October to March.",
    "Be cautious of scams targeting tourists, especially around major transit hubs.",
    "Try street food but from hygienic and popular vendors only - Chandni Chowk is famous for its food scene.",
  ],
};

// Mathura and Vrindavan data
export const mathuraVrindavanData: DestinationDetails = {
  name: "Mathura & Vrindavan",
  nickname: "Land of Krishna",
  description: "Mathura and Vrindavan, located in Uttar Pradesh, are twin sacred cities intimately connected to Lord Krishna. Mathura is revered as the birthplace of Krishna, while Vrindavan is where he spent his childhood. These ancient cities are dotted with hundreds of temples and sacred sites that attract millions of devotees and spiritual seekers annually. The air is filled with spiritual energy, devotional music, and the constant chanting of 'Radhe Radhe' and 'Hare Krishna'.",
  headerImage: "https://images.unsplash.com/photo-1625658374343-10a664d9b68b?auto=format&fit=crop&q=80",
  history: "Mathura has a history dating back to at least 600 BCE and was an important city during the Mauryan and Kushan periods. According to Hindu mythology, it is the birthplace of Lord Krishna. Vrindavan is associated with Krishna's childhood and youth, where he spent time with Radha and the gopis. The town was rediscovered in the 16th century by Chaitanya Mahaprabhu.",
  bestTimeToVisit: "October to March for pleasant weather. Festive periods like Holi (February-March) and Janmashtami (August) are particularly vibrant but extremely crowded.",
  howToReach: {
    byAir: "The nearest airport is at Agra (67 km from Mathura) or Delhi (160 km from Mathura).",
    byRail: "Mathura Junction is well-connected to major cities like Delhi, Mumbai, Kolkata, and Chennai.",
    byRoad: "Regular bus services connect Mathura and Vrindavan to Delhi, Agra, and other cities in Uttar Pradesh."
  },
  localCuisine: [
    {
      name: "Pedas",
      description: "A special milk-based sweet for which Mathura is famous across India."
    },
    {
      name: "Chhappan Bhog",
      description: "A grand offering of 56 different food items prepared for Lord Krishna, especially during festivals."
    },
    {
      name: "Lassi",
      description: "A yogurt-based drink often flavored with fruits or spices, popular throughout the region."
    }
  ],
  accommodation: "Both cities offer a range of accommodation from luxury hotels to budget ashrams and guesthouses. Staying in a traditional ashram can provide a more authentic spiritual experience, though with basic amenities.",
  budget: "A budget of ₹1,500-3,000 per day should be sufficient for comfortable accommodation, meals, and temple visits. Pilgrimage packages are also available from various tour operators.",
  attractions: [
    {
      name: "Krishna Janmabhoomi Temple",
      description: "Located in Mathura, this temple complex marks the birthplace of Lord Krishna and houses the prison cell where he was born to Devaki and Vasudeva.",
      image: "https://images.unsplash.com/photo-1625658374344-c92f57cc8616?auto=format&fit=crop&q=80",
    },
    {
      name: "Banke Bihari Temple",
      description: "One of Vrindavan's most revered temples, known for its enchanting black marble idol of Krishna in his 'tribhanga' pose.",
      image: "https://images.unsplash.com/photo-1604567394466-c9b0dd086185?auto=format&fit=crop&q=80",
    },
    {
      name: "ISKCON Temple",
      description: "A beautiful modern temple complex dedicated to Radha-Krishna, with magnificent architecture and regular kirtans (devotional singing).",
      image: "https://images.unsplash.com/photo-1631273383020-cf75fb5d29e8?auto=format&fit=crop&q=80",
    },
    {
      name: "Govardhan Hill",
      description: "A sacred hill near Vrindavan that Krishna is said to have lifted to protect the villagers from torrential rains sent by Lord Indra.",
      image: "https://images.unsplash.com/photo-1629452055041-6df9caf27813?auto=format&fit=crop&q=80",
    },
  ],
  festivals: [
    {
      name: "Janmashtami",
      month: "August-September",
      description: "The grand celebration of Krishna's birth features midnight ceremonies, bhajans, fasting, and special rituals across both cities.",
    },
    {
      name: "Holi",
      month: "March",
      description: "The festival of colors is celebrated with exceptional fervor in the land of Krishna, with traditional Lathmar Holi being a unique attraction.",
    },
    {
      name: "Radhashtami",
      month: "September",
      description: "Celebrating the appearance day of Radha, Krishna's divine consort, with special abhishekams (ritual bathing of deities) and offerings.",
    },
  ],
  tips: [
    "Remove your shoes before entering temples as a sign of respect.",
    "Dress modestly when visiting temples – shoulders and knees should be covered.",
    "The best time to visit is during festivals like Janmashtami or Holi for a truly immersive experience.",
    "Try the famous Mathura pedas and lassi while exploring the cities.",
    "Consider hiring a local guide who can explain the spiritual significance of various sites.",
  ],
};

// Agra destination data
export const agraData: DestinationDetails = {
  name: "Agra",
  nickname: "City of Taj Mahal",
  description: "Agra, located on the banks of the Yamuna River in Uttar Pradesh, is home to the iconic Taj Mahal. Once the capital of the Mughal Empire, the city is a treasure trove of magnificent Mughal-era architecture and history. Beyond the Taj, Agra boasts several other UNESCO World Heritage sites, showcasing the artistic and cultural brilliance of the Mughal era. The city combines its grand historical legacy with the hustle and bustle of a modern Indian city.",
  headerImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
  history: "Agra rose to prominence during the Mughal era, particularly under Emperor Akbar who made it his capital in 1558. It remained the capital of the Mughal Empire until 1648 when Shah Jahan shifted it to Delhi. The city's golden age was during the reigns of Akbar, Jahangir, and Shah Jahan, who built numerous monuments including the Taj Mahal, a mausoleum for Shah Jahan's beloved wife Mumtaz Mahal.",
  bestTimeToVisit: "October to March when the weather is pleasant and ideal for sightseeing. Summers (April to June) are extremely hot, and the monsoon (July to September) can make touring difficult.",
  howToReach: {
    byAir: "Agra Airport has limited connectivity. The nearest major airport is in Delhi (230 km).",
    byRail: "Agra Cantt and Agra Fort railway stations are well-connected to major cities across India.",
    byRoad: "Excellent road connectivity with Delhi (3-4 hours via Yamuna Expressway), Jaipur (4-5 hours), and other major cities."
  },
  localCuisine: [
    {
      name: "Petha",
      description: "A translucent soft candy made from ash gourd, unique to Agra and available in various flavors."
    },
    {
      name: "Dalmoth",
      description: "A savory snack mix consisting of fried lentils, nuts, and spices, popular as a tea-time snack."
    },
    {
      name: "Mughlai Cuisine",
      description: "Rich, aromatic dishes with roots in Mughal royal kitchens, featuring meat dishes, biryanis, and kebabs."
    }
  ],
  accommodation: "Agra offers a range of accommodation options from luxury hotels with Taj Mahal views to budget guesthouses. The areas of Tajganj (near Taj Mahal) and Sadar Bazaar are popular places to stay.",
  budget: "A mid-range budget of ₹2,500-5,000 per day would cover comfortable accommodation, meals, and entry tickets to monuments. Note that the entry fee for the Taj Mahal is significantly higher for foreign tourists.",
  attractions: [
    {
      name: "Taj Mahal",
      description: "This iconic white marble mausoleum was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal and is considered the greatest architectural achievement in the whole range of Indo-Islamic architecture.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    },
    {
      name: "Agra Fort",
      description: "This UNESCO World Heritage site is a massive red sandstone fort complex that housed the Mughal emperors until they shifted their capital to Delhi.",
      image: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&q=80",
    },
    {
      name: "Fatehpur Sikri",
      description: "A fortified ancient city that served as the capital of the Mughal Empire for a short period, featuring stunning red sandstone buildings.",
      image: "https://images.unsplash.com/photo-1595074474743-751682fd33a9?auto=format&fit=crop&q=80",
    },
  ],
  festivals: [
    {
      name: "Taj Mahotsav",
      month: "February",
      description: "A 10-day cultural festival showcasing India's arts, crafts, cuisine, and cultural heritage against the backdrop of the Taj Mahal.",
    },
    {
      name: "Ram Barat",
      month: "August-September",
      description: "A unique celebration of Lord Rama's marriage to Sita, featuring a grand procession and traditional performances.",
    },
  ],
  tips: [
    "Visit the Taj Mahal at sunrise for the best light and fewer crowds.",
    "Consider buying a composite ticket that covers multiple monuments for better value.",
    "Be aware of persistent touts and guides – only engage with official government-approved guides.",
    "Try Agra's famous 'petha' (a sweet made from ash gourd) and 'dalmoth' (a spicy snack mix).",
    "Plan at least two days to properly explore Agra's major attractions without rushing.",
  ],
};

// Export a combined object for easy access
export const allDestinations: Record<string, DestinationDetails> = {
  jaipur: jaipurData,
  delhi: delhiData,
  "mathura-vrindavan": mathuraVrindavanData,
  agra: agraData
};

// For use in other components where we need a simple list
export const destinationsList = [
  { id: "jaipur", name: "Jaipur", nickname: "Pink City" },
  { id: "delhi", name: "Delhi", nickname: "Heart of India" },
  { id: "mathura-vrindavan", name: "Mathura & Vrindavan", nickname: "Land of Krishna" },
  { id: "agra", name: "Agra", nickname: "City of Taj Mahal" },
];
