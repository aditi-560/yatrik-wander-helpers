
import { DestinationDetails } from "@/components/DestinationTemplate";

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
