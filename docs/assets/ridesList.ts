const transportList = [
  {
    "name": "Chairlift",
    "id": "12",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 70,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Elevator",
    "id": "2b",
    "type": "ride",
    "tracked": true,
    "guestCap": 45,
    "ratings": {
      "e": 80,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Miniature Railway",
    "id": "05",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 70,
      "i": 6,
      "n": -10
    }
  },
  {
    "name": "Monorail",
    "id": "06",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 70,
      "i": 6,
      "n": -10
    }
  },
  {
    "name": "Suspended Monorail",
    "id": "3f",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 70,
      "i": 6,
      "n": -10
    }
  },
];
const gentleList = [
  {
    "name": "Car Ride",
    "id": "0b",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 70,
      "i": 10,
      "n": 10
    }
  },
  {
    "name": "Circus",
    "id": "31",
    "type": "ride",
    "guestCap": 39,
    "ratings": {
      "e": 20,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Crooked House",
    "id": "47",
    "type": "ride",
    "guestCap": 22,
    "ratings": {
      "e": 15,
      "i": 8,
      "n": 0
    }
  },
  {
    "name": "Dodgems",
    "id": "19",
    "type": "ride",
    "guestCap": 35,
    "ratings": {
      "e": 40,
      "i": 20,
      "n": 0
    }
  },
  {
    "name": "Ferris Wheel",
    "id": "25",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 60,
      "i": 20,
      "n": 10
    }
  },
  {
    "name": "Flying Saucers",
    "id": "46",
    "type": "ride",
    "guestCap": 35,
    "ratings": {
      "e": 50,
      "i": 25,
      "n": 0
    }
  },
  {
    "name": "Ghost Train",
    "id": "32",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 70,
      "i": 10,
      "n": 10
    }
  },
  {
    "name": "Haunted House",
    "id": "2f",
    "type": "ride",
    "guestCap": 22,
    "ratings": {
      "e": 20,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Maze",
    "id": "14",
    "type": "ride",
    "guestCap": 40,
    "ratings": {
      "e": 50,
      "i": 0,
      "n": 0
    }
  },
  {
    "name": "Merry Go Round",
    "id": "21",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 50,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Mini Golf",
    "id": "43",
    "type": "ride",
    "guestCap": 23,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Mini Helicopters",
    "id": "3d",
    "type": "ride",
    "tracked": true,
    "guestCap": 45,
    "ratings": {
      "e": 70,
      "i": 10,
      "n": 10
    }
  },
  {
    "name": "Monorail Cycles",
    "id": "48",
    "type": "ride",
    "tracked": true,
    "guestCap": 45,
    "ratings": {
      "e": 50,
      "i": 10,
      "n": 10
    }
  },
  {
    "name": "Monster Trucks",
    "id": "0b",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 70,
      "i": 10,
      "n": 10
    }
  },
  {
    "name": "Observation Tower",
    "id": "0e",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 80,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Space Rings",
    "id": "29",
    "type": "ride",
    "guestCap": 30,
    "ratings": {
      "e": 12,
      "i": 4,
      "n": 4
    }
  },
  {
    "name": "Spiral Slide",
    "id": "15",
    "type": "ride",
    "guestCap": 40,
    "ratings": {
      "e": 50,
      "i": 10,
      "n": 0
    }
  },
];
const coastersList = [
  {
    "name": "Air Powered Vertical Coaster",
    "id": "4b",
    "type": "ride",
    "tracked": true,
    "guestCap": 70,
    "ratings": {
      "e": 44,
      "i": 66,
      "n": 10
    }
  },
  {
    "name": "Bobsled Coaster",
    "id": "0d",
    "type": "ride",
    "tracked": true,
    "guestCap": 75,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Classic Mini Roller Coaster",
    "id": "04",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Compact Inverted Coaster",
    "id": "49",
    "type": "ride",
    "tracked": true,
    "guestCap": 80,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Corkscrew Roller Coaster",
    "id": "13",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Flying Roller Coaster",
    "id": "39",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Giga Coaster",
    "id": "44",
    "type": "ride",
    "tracked": true,
    "guestCap": 120,
    "ratings": {
      "e": 51,
      "i": 32,
      "n": 10
    }
  },
  {
    "name": "Heartline Twister Roller Coaster",
    "id": "42",
    "type": "ride",
    "tracked": true,
    "guestCap": 35,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Hypercoaster",
    "id": "13",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 52,
      "i": 36,
      "n": 10
    }
  },
  {
    "name": "Hyper-Twister Coaster",
    "id": "33",
    "type": "ride",
    "tracked": true,
    "guestCap": 120,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Inverted Hairpin Coaster",
    "id": "4c",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 30
    }
  },
  {
    "name": "Inverted Impulse Coaster",
    "id": "56",
    "type": "ride",
    "tracked": true,
    "guestCap": 75,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Inverted Roller Coaster",
    "id": "03",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Junior Roller Coaster",
    "id": "04",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Lay-down Roller Coaster",
    "id": "3e",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "LIM Launched Roller Coaster",
    "id": "5a",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Looping Roller Coaster",
    "id": "0f",
    "type": "ride",
    "tracked": true,
    "guestCap": 95,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Mine Ride",
    "id": "58",
    "type": "ride",
    "tracked": true,
    "guestCap": 70,
    "ratings": {
      "e": 60,
      "i": 20,
      "n": 10
    }
  },
  {
    "name": "Mine Train Coaster",
    "id": "11",
    "type": "ride",
    "tracked": true,
    "guestCap": 85,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Mini Roller Coaster",
    "id": "57",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Mini Suspended Coaster",
    "id": "07",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Multi-Dimension Coaster",
    "id": "37",
    "type": "ride",
    "tracked": true,
    "guestCap": 100,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Reverse Freefall Coaster",
    "id": "2a",
    "type": "ride",
    "tracked": true,
    "guestCap": 70,
    "ratings": {
      "e": 44,
      "i": 66,
      "n": 10
    }
  },
  {
    "name": "Reverser Roller Coaster",
    "id": "41",
    "type": "ride",
    "tracked": true,
    "guestCap": 65,
    "ratings": {
      "e": 48,
      "i": 28,
      "n": 7
    }
  },
  {
    "name": "Side-Friction Roller Coaster",
    "id": "35",
    "type": "ride",
    "tracked": true,
    "guestCap": 65,
    "ratings": {
      "e": 48,
      "i": 28,
      "n": 7
    }
  },
  {
    "name": "Spinning Wild Mouse",
    "id": "36",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 30
    }
  },
  {
    "name": "Spiral Roller Coaster",
    "id": "00",
    "type": "ride",
    "tracked": true,
    "guestCap": 85,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Stand-up Roller Coaster",
    "id": "01",
    "type": "ride",
    "tracked": true,
    "guestCap": 90,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Steel Twister Coaster",
    "id": "33",
    "type": "ride",
    "tracked": true,
    "guestCap": 120,
    "ratings": {
      "e": 52,
      "i": 36,
      "n": 10
    }
  },
  {
    "name": "Steel Wild Mouse",
    "id": "36",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 30
    }
  },
  {
    "name": "Steeplechase",
    "id": "0a",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Suspended Swinging Coaster",
    "id": "02",
    "type": "ride",
    "tracked": true,
    "guestCap": 90,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Vertical Drop Roller Coaster",
    "id": "2c",
    "type": "ride",
    "tracked": true,
    "guestCap": 95,
    "ratings": {
      "e": 52,
      "i": 38,
      "n": 10
    }
  },
  {
    "name": "Virginia Reel",
    "id": "3b",
    "type": "ride",
    "tracked": true,
    "guestCap": 50,
    "ratings": {
      "e": 30,
      "i": 15,
      "n": 25
    }
  },
  {
    "name": "Water Coaster",
    "id": "4a",
    "type": "ride",
    "tracked": true,
    "guestCap": 60,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Wooden Roller Coaster",
    "id": "34",
    "type": "ride",
    "tracked": true,
    "guestCap": 105,
    "ratings": {
      "e": 52,
      "i": 33,
      "n": 8
    }
  },
  {
    "name": "Wooden Wild Mouse",
    "id": "09",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 30
    }
  },
];
const thrillList = [
  {
    "name": "3D Cinema",
    "id": "27",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 20,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Enterprise",
    "id": "51",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 50,
      "i": 10,
      "n": 0
    }
  },
  {
    "name": "Go Karts",
    "id": "16",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 120,
      "i": 20,
      "n": 0
    }
  },
  {
    "name": "Launched Freefall",
    "id": "0c",
    "type": "ride",
    "guestCap": 65,
    "ratings": {
      "e": 50,
      "i": 50,
      "n": 10
    }
  },
  {
    "name": "Magic Carpet",
    "id": "4d",
    "type": "ride",
    "guestCap": 35,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Motion Simulator",
    "id": "26",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 24,
      "i": 20,
      "n": 10
    }
  },
  {
    "name": "Pirate Ship",
    "id": "1a",
    "type": "ride",
    "guestCap": 35,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Roto-Drop",
    "id": "45",
    "type": "ride",
    "guestCap": 45,
    "ratings": {
      "e": 50,
      "i": 50,
      "n": 10
    }
  },
  {
    "name": "Swinging Inverter Ship",
    "id": "1b",
    "type": "ride",
    "guestCap": 35,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Top Spin",
    "id": "28",
    "type": "ride",
    "guestCap": 55,
    "ratings": {
      "e": 24,
      "i": 20,
      "n": 10
    }
  },
  {
    "name": "Twist",
    "id": "2e",
    "type": "ride",
    "guestCap": 40,
    "ratings": {
      "e": 40,
      "i": 20,
      "n": 10
    }
  },
];
const waterList = [
  {
    "name": "Boat Hire",
    "id": "08",
    "type": "ride",
    "tracked": true,
    "guestCap": 40,
    "ratings": {
      "e": 70,
      "i": 6,
      "n": 0
    }
  },
  {
    "name": "Dinghy Slide",
    "id": "10",
    "type": "ride",
    "tracked": true,
    "guestCap": 55,
    "ratings": {
      "e": 50,
      "i": 30,
      "n": 10
    }
  },
  {
    "name": "Log Flume",
    "id": "17",
    "type": "ride",
    "tracked": true,
    "guestCap": 65,
    "ratings": {
      "e": 80,
      "i": 34,
      "n": 6
    }
  },
  {
    "name": "River Rafts",
    "id": "4f",
    "type": "ride",
    "tracked": true,
    "guestCap": 65,
    "ratings": {
      "e": 80,
      "i": 34,
      "n": 6
    }
  },
  {
    "name": "River Rapids",
    "id": "18",
    "type": "ride",
    "tracked": true,
    "guestCap": 70,
    "ratings": {
      "e": 72,
      "i": 26,
      "n": 6
    }
  },
  {
    "name": "Splash Boats",
    "id": "3c",
    "type": "ride",
    "tracked": true,
    "guestCap": 65,
    "ratings": {
      "e": 80,
      "i": 34,
      "n": 6
    }
  },
  {
    "name": "Submarine Ride",
    "id": "4e",
    "type": "ride",
    "tracked": true,
    "guestCap": 40,
    "ratings": {
      "e": 70,
      "i": 6,
      "n": 0
    }
  },
];
const stallList = [
  {
    "name": "ATM",
    "id": "2d",
    "type": "shop",
    "guestCap": 5
  },
  {
    "name": "Drink Stall",
    "id": "1e",
    "type": "shop",
    "guestCap": 15
  },
  {
    "name": "First Aid Room",
    "id": "30",
    "type": "shop",
    "guestCap": 5
  },
  {
    "name": "Food Stall",
    "id": "1c",
    "type": "shop",
    "guestCap": 15
  },
  {
    "name": "Information Kiosk",
    "id": "23",
    "type": "shop",
    "guestCap": 15
  },
  {
    "name": "Merchandise Shop",
    "id": "20",
    "type": "shop",
    "guestCap": 15
  },
  {
    "name": "Restroom",
    "id": "24",
    "type": "shop",
    "guestCap": 5
  },
];

export const ridesList = [
  ...transportList,
  ...gentleList,
  ...coastersList,
  ...thrillList,
  ...waterList,
  ...stallList
];

export const ridesListObj = {
  "transport": transportList,
  "gentle": gentleList,
  "coasters": coastersList,
  "thrill": thrillList,
  "water": waterList
};