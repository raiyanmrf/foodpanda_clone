export const isTheRestaurantOpen = (cuisine) => {
  const today = new Date();

  const weekDay = today.toLocaleDateString("en-BD", { weekday: "short" });

  const bangladeshdHour = new Intl.DateTimeFormat("en-BD", {
    hour: "numeric",
    hourCycle: "h23",
    timeZone: "Asia/Dhaka",
  }).format(today);

  const hour = parseInt(bangladeshdHour, 10);

  const deshi = ["Bangladeshi", "Indian", "Middle"];

  const western = ["Western", "Italian"];

  const sea = ["Korean", "Chinese", "Thai", "Asian"];

  const cafe = ["Cafe", "Beverage", "Snacks"];

  if (deshi.includes(cuisine)) {
    if (weekDay === "Wed") return "Closed until Thurs 10:00 am";
  }

  if (western.includes(cuisine)) {
    if (weekDay === "Sat") return "Closed until Sun 10:00 am";
  }

  if (sea.includes(cuisine)) {
    if (weekDay === "Sun") return "Closed until Mon 10:00 am";
  }

  if (cafe.includes(cuisine)) {
    if (hour < 15) return "Opens at 3:00 pm";
  }

  if (hour < 9 || hour > 21) {
    return "Opens at 9:00 am";
  }

  return "open";
};
