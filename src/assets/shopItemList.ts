const foodItems = [
  {
    "id": "1",
    "name": "Beef Noodles",
    "buyInRain": true,
    "cost": 0.70,
    "baseValue": 1.70,
    "hotValue": 1.70,
    "coldValue": 2.00
  },
  {
    "id": "2",
    "name": "Burgers",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.90,
    "hotValue": 1.90,
    "coldValue": 2.20
  },
  {
    "id": "3",
    "name": "Cotton Candy",
    "buyInRain": false,
    "cost": 0.30,
    "baseValue": 0.90,
    "hotValue": 0.90,
    "coldValue": 0.60
  },
  {
    "id": "4",
    "name": "Fried Chicken",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.90,
    "hotValue": 1.90,
    "coldValue": 2.20
  },
  {
    "id": "7",
    "name": "Cookies",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 0.80,
    "hotValue": 0.80,
    "coldValue": 0.80
  },
  {
    "id": "8",
    "name": "Donuts",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 0.80,
    "hotValue": 0.70,
    "coldValue": 1.00
  },
  {
    "id": "10",
    "name": "Fried Rice Noodles",
    "buyInRain": true,
    "cost": 0.60,
    "baseValue": 1.70,
    "hotValue": 1.70,
    "coldValue": 2.00
  },
  {
    "id": "11",
    "name": "Fries / Chips",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.60,
    "hotValue": 1.60,
    "coldValue": 1.80
  },
  {
    "id": "13",
    "name": "Funnel Cakes",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.30,
    "hotValue": 1.10,
    "coldValue": 1.40
  },
  {
    "id": "15",
    "name": "Hot Dogs",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.70,
    "hotValue": 1.70,
    "coldValue": 2.00
  },
  {
    "id": "16",
    "name": "Ice Cream",
    "buyInRain": false,
    "cost": 0.40,
    "baseValue": 1.00,
    "hotValue": 1.50,
    "coldValue": 0.60
  },
  {
    "id": "20",
    "name": "Meatball Soup",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.40,
    "hotValue": 1.40,
    "coldValue": 1.60
  },
  {
    "id": "22",
    "name": "Pizza",
    "buyInRain": true,
    "cost": 0.60,
    "baseValue": 2.10,
    "hotValue": 2.10,
    "coldValue": 2.50
  },
  {
    "id": "23",
    "name": "Popcorn",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.30,
    "hotValue": 1.30,
    "coldValue": 1.10
  },
  {
    "id": "24",
    "name": "Pretzels",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.10,
    "hotValue": 1.10,
    "coldValue": 1.10
  },
  {
    "id": "25",
    "name": "Roast Sausages",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.60,
    "hotValue": 1.60,
    "coldValue": 2.00
  },
  {
    "id": "28",
    "name": "Sub Sandwiches",
    "buyInRain": true,
    "cost": 0.50,
    "baseValue": 1.90,
    "hotValue": 1.90,
    "coldValue": 1.70
  },
  {
    "id": "30",
    "name": "Tentacles",
    "buyInRain": true,
    "cost": 1.10,
    "baseValue": 2.20,
    "hotValue": 2.00,
    "coldValue": 1.80
  },
  {
    "id": "31",
    "name": "Candy Apples",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.00,
    "hotValue": 1.00,
    "coldValue": 1.00
  },
  {
    "id": "35",
    "name": "Wonton Soup",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.30,
    "hotValue": 1.30,
    "coldValue": 1.50
  },
];

const drinkItems = [
  {
    "id": "6",
    "name": "Coffee",
    "buyInRain": true,
    "cost": 0.30,
    "baseValue": 1.10,
    "hotValue": 1.50,
    "coldValue": 2.00
  },
  {
    "id": "9",
    "name": "Drinks",
    "buyInRain": true,
    "cost": 0.30,
    "baseValue": 1.20,
    "hotValue": 2.00,
    "coldValue": 1.00
  },
  {
    "id": "12",
    "name": "Fruit Juice",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.10,
    "hotValue": 1.90,
    "coldValue": 1.10
  },
  {
    "id": "5",
    "name": "Hot Chocolate",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.30,
    "hotValue": 1.30,
    "coldValue": 2.00
  },
  {
    "id": "17",
    "name": "Iced Tea",
    "buyInRain": true,
    "cost": 0.30,
    "baseValue": 1.00,
    "hotValue": 2.00,
    "coldValue": 1.00
  },
  {
    "id": "18",
    "name": "Lemonade",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.10,
    "hotValue": 2.10,
    "coldValue": 1.00
  },
  {
    "id": "26",
    "name": "Soybean Milk",
    "buyInRain": true,
    "cost": 0.40,
    "baseValue": 1.00,
    "hotValue": 1.40,
    "coldValue": 1.00
  },
  {
    "id": "27",
    "name": "Sujeonggwa",
    "buyInRain": true,
    "cost": 0.30,
    "baseValue": 1.10,
    "hotValue": 1.40,
    "coldValue": 1.10
  },
];

const merchItems = [
  {
    "id": "0",
    "name": "Balloons",
    "buyInRain": false,
    "cost": 0.30,
    "baseValue": 1.40,
    "hotValue": 1.40,
    "coldValue": 1.40
  },
  {
    "id": "14",
    "name": "Hats",
    "buyInRain": true,
    "cost": 0.90,
    "baseValue": 2.70,
    "hotValue": 3.20,
    "coldValue": 2.40
  },
  {
    "id": "19",
    "name": "Park Maps",
    "buyInRain": true,
    "cost": 0.10,
    "baseValue": 0.70,
    "hotValue": 0.70,
    "coldValue": 0.80
  },
  // {
  //   "id": "21",
  //   "name": "Photo",
  //   "buyInRain": true,
  //   "cost": 0.20,
  //   "baseValue": 3.00,
  //   "hotValue": 3.00,
  //   "coldValue": 3.00
  // },
  {
    "id": "29",
    "name": "Sunglasses",
    "buyInRain": false,
    "cost": 0.80,
    "baseValue": 1.50,
    "hotValue": 2.00,
    "coldValue": 1.20
  },
  {
    "id": "32",
    "name": "Cuddly Toys",
    "buyInRain": true,
    "cost": 1.50,
    "baseValue": 3.00,
    "hotValue": 3.00,
    "coldValue": 3.00
  },
  {
    "id": "33",
    "name": "T-Shirts",
    "buyInRain": true,
    "cost": 2.00,
    "baseValue": 3.70,
    "hotValue": 3.70,
    "coldValue": 3.70
  },
  {
    "id": "34",
    "name": "Umbrellas",
    "buyInRain": true,
    "cost": 2.00,
    "baseValue": 3.50,
    "hotValue": 2.50,
    "coldValue": 5.00
  },
];

export const shopItems = [
  ...foodItems,
  ...drinkItems,
  ...merchItems
]