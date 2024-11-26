let ul = document.querySelectorAll(".dish-list-grid") || null;

let result = [];

function getTypeFromString(itemName) {
  // List of keywords to search for
  const keywords = [
    "burger meal",
    "rice deal",
    "burger",
    "whopper",

    "steak",

    "pizza",

    "platter",
    "poutine",
    "ramen",
    "shawrma",
    "khichuri",
    "french",

    "wings",
    "nugget",
    "fried chicken",
    "kebab",
    "chaap",
    "sandwitch",
    "sandwich",
    "chicken",

    "rice bowl",

    "spaghetti",
    "chowmein",
    "noodles",

    "fried rice",

    "nachos",
    "pasta",

    "biryani",
    "kacchi",

    "smoothie",
    "sprite",
    "coke",
    "fanta",
    "lassi",

    "salad",

    "giver box",

    "freddo",
    "mocha",
    "latte",
    "americano",
    "espresso",
    "coffee",
    "iced tea",
    "tea",
    "cappuccino",

    "halim",
    "faluda",

    "doi",
    "borhani",

    "shingara",
    "dopiaza",
    "bhaji",
    "naan",
    "paya",
    "bhuna",
    "pudding",
    "paratha",
    "dal",
    "fish",
    "polao",
    "firni",

    "lobster",
    "crab",
    "squid",
    "snapper",
    "seafood",

    "mayo",
    "soup",

    "shawarama",

    "milk",
    "mojito",
    "d'light",
    "shakes",
    "cake",
    "roti",
    "jhal fry",
    "roll",
    "piyaju",
    "samosa",
    "lemonade",
    "vegetable",
    "luchi",

    "rice",
    "wonton",

    "kalojam",
    "chomchom",
    "cream jam",
    "laddu",
    "balushai",
    "shor roll",
    "roshogolla",
    "chana",
  ];

  // Convert the itemName to lowercase for case-insensitive matching
  let lowerCaseName = itemName.toLowerCase();

  // Loop through the keywords and check if any is included in the itemName
  for (let keyword of keywords) {
    if (lowerCaseName.includes(keyword)) {
      return keyword; // Return the matched keyword as type
    }
  }

  // If no keyword matches, return null or some default value
  return null;
}

for (const li of ul) {
  // Get each list item (li) inside the ul
  let listItems = li.children;

  for (const item of listItems) {
    const priceText =
      item?.children[2]?.children[0]?.children[1]?.textContent || null;
    const itemName =
      item?.children[2]?.children[0]?.children[0]?.textContent || null;

    const obj = {
      tag:
        li?.previousElementSibling?.previousElementSibling?.textContent ||
        li?.previousElementSibling?.textContent ||
        null, // Adjust this selector based on your structure
      name: itemName,
      type: (itemName && getTypeFromString(itemName)) || null,
      cuisine: null,
      price_desc: priceText, // Keeping the original price description
      price: priceText ? parseFloat(priceText.match(/\d+/)[0]) : null, // Convert the price to a number

      detail: item?.children[2]?.children[0]?.children[2]?.textContent || null,
      image:
        item?.children[3]?.children[0]?.children[0]?.style.backgroundImage
          .replace(/^url\(["']?/, "")
          .replace(/["']?\)$/, "") || null,
    };

    result.push(obj);
  }
}

console.log(result);

copy(result);
