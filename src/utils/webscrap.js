let ul = document.querySelectorAll(".dish-list-grid") || null;

let result = [];

function getTypeFromString(itemName) {
  // List of keywords to search for
  const keywords = [
    "burger meal",
    "burger",
    "whopper",

    "steak",

    "pizza",

    "platter", // fries/potatoes

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

    "sandwitch",
    "sandwich",
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
    "chicken",
    "firni",

    "mayo",
    "soup",
    "shawarama",
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

    "kalojam", //1kg,500g,250g
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
