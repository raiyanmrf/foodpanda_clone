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
    "fried rice",
    "shawrma",
    "khichuri",
    "french",
    "wings",
    "spaghetti",
    "nugget",
    "fried chicken",
    "chowmein",
    "noodles",

    "biryani",
    "kacchi",

    "kebab",
    "chaap",

    "smoothie",
    "sprite",
    "coke",
    "fanta",
    "lassi",
    "pasta",

    "salad",

    "giver box",

    "freddo",
    "mocha",
    "latte",
    "americano",
    "espresso",
    "cappuccino",

    "nachos",

    "coffee",
    "iced tea",
    "tea",
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
    "sandwitch",
    "sandwich",
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
    "wonton",
    "rice bowl",
    "rice",
    "chicken",

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
