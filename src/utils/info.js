const ratingsGenerator = (cuisine) => {
  const deshi = ["Bangladeshi", "Indian", "Middle Eastern"];

  const western = ["Western", "Italian", "Biryani", "Steaks"];

  const sea = ["Korean", "Chinese", "Thai", "Asian"];

  const cafe = ["Cafe", "Beverage", "Snacks", "Dessert", "Bakery", "Sweets"];

  if (deshi.includes(cuisine)) {
    return "4.5";
  }

  if (western.includes(cuisine)) {
    return "4.8";
  }

  if (sea.includes(cuisine)) {
    return "4.6";
  }

  if (cafe.includes(cuisine)) {
    return "4.7";
  }

  return "4.4";
};

const reviewsGenerator = (cuisine) => {
  const deshi = ["Bangladeshi", "Indian", "Middle Eastern"];

  const western = ["Western", "Italian", "Biryani", "Steaks"];

  const sea = ["Korean", "Chinese", "Thai", "Asian"];

  const cafe = ["Cafe", "Beverage", "Snacks", "Dessert", "Bakery", "Sweets"];

  if (deshi.includes(cuisine)) {
    return "(500+)";
  }

  if (western.includes(cuisine)) {
    return "(1000+)";
  }

  if (sea.includes(cuisine)) {
    return "(900+)";
  }

  if (cafe.includes(cuisine)) {
    return "(900+)";
  }

  return "(200+)";
};

const imageGenerator = (cuisine) => {
  const fastfood = ["Fast Food", "Western", "Italian"];
  const burgers = ["Burgers"];
  const pizza = ["Pizza"];
  const snacks = ["Snacks"];

  const Biryani = ["Biryani"];
  const Steak = ["Steak"];
  const Sweets = ["Sweets"];
  const Dessert = ["Dessert"];
  const Cakes = ["Cakes", "Bakery"];
  const Bangladeshi = ["Bangladeshi"];
  const Curry = ["Curry"];
  const chotpoti = ["Chotpoti & Fuchka"];
  const chinese = ["Korean", , "Asian", "Chinese", "Thai"];
  const rice = ["Rice Dishes"];
  const cafe = ["Cafe", "Beverage"];
  const juice = ["Juice"];
  const Shawarma = ["Shawarma"];
  const Middle = ["Middle Eastern"];

  if (fastfood.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/eosq-listing.jpg?width=400&height=225";
  }

  if (burgers.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/oime-listing.jpg?width=400&height=225";
  }

  if (pizza.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/hpuz-listing.jpg?width=400&height=225";
  }

  if (snacks.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/s8kx-listing.jpg?width=400&height=225";
  }
  if (Biryani.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/mciq-listing.jpg?width=400&height=225";
  }
  if (Steak.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/s0gi-listing.jpg?width=400&height=225";
  }
  if (Sweets.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/tjo8-listing.jpg?width=400&height=225";
  }
  if (Dessert.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/biq9-listing.jpg?width=400&height=225";
  }
  if (Cakes.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/g68o-listing.jpg?width=400&height=225";
  }
  if (chotpoti.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/jh26-listing.jpg?width=400&height=225";
  }
  if (Curry.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/lh/wk32-listing.jpg?width=400&height=225";
  }
  if (Bangladeshi.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/nvbo-listing.jpg?width=400&height=225";
  }
  if (chinese.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/h69y-listing.jpg?width=400&height=225";
  }
  if (rice.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/nz09-listing.jpg?width=400&height=225";
  }
  if (cafe.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/uhno-listing.jpg?width=400&height=225";
  }
  if (juice.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/bxzw-listing.jpg?width=400&height=225";
  }
  if (Shawarma.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/krv8-listing.jpg?width=400&height=225";
  }
  if (Middle.includes(cuisine)) {
    return "https://images.deliveryhero.io/image/fd-bd/LH/pshi-listing.jpg?width=400&height=225";
  }

  return "https://images.deliveryhero.io/image/fd-bd/LH/u5ji-listing.jpg?width=400&height=225";
};

const offerGenerator = (cuisine) => {
  const pandadeal1 = ["Indian", "Middle Eastern"];
  const pandadeal2 = ["Cafe", "Noddles"];
  const pandadeal3 = ["Dessert", "Wraps"];
  const pandapro1 = ["Asian", "Middle Eastern", "Korean", "Chinese", "Thai"];
  const pandapro2 = ["Fast Food", "Steak"];
  const pandapro3 = ["Western", "Italian"];
  const homechef1 = ["Bangladeshi", "Shawarma"];
  const homechef2 = ["Curry", "Kebab"];
  const homechef3 = ["Bakery", "Sweets"];
  const crazy1 = ["Burgers", "Shawarma"];
  const crazy2 = ["Pizza", "Chicken", "Biryani", "Rice Dishes"];
  const crazy3 = ["Chotpoti & Fuchka"];

  if (pandadeal1.includes(cuisine)) {
    return "30% off: pandadeal";
  }

  if (pandadeal2.includes(cuisine)) {
    return "25% off: pandadeal";
  }

  if (pandadeal3.includes(cuisine)) {
    return "20% off: pandadeal";
  }

  if (pandapro1.includes(cuisine)) {
    return "30% off: pandapro";
  }

  if (pandapro2.includes(cuisine)) {
    return "25% off: pandapro";
  }

  if (pandapro3.includes(cuisine)) {
    return "20% off: pandapro";
  }
  if (homechef1.includes(cuisine)) {
    return "30% off: homechef";
  }

  if (homechef2.includes(cuisine)) {
    return "25% off: homechef";
  }

  if (homechef3.includes(cuisine)) {
    return "20% off: homechef";
  }
  if (crazy1.includes(cuisine)) {
    return "30% off: crazy";
  }

  if (crazy2.includes(cuisine)) {
    return "25% off: crazy";
  }

  if (crazy3.includes(cuisine)) {
    return "20% off: crazy";
  }

  return "Welcome gift: free de...";
};
