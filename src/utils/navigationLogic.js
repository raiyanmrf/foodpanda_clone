export const handleSearching = (inputValue, foodItems, setSearchedItems) => {
  const value = inputValue.trim();
  if (!value) {
    setSearchedItems([]); // Clear the search results if input is empty
    return;
  }

  const filter = foodItems.filter((item) =>
    item.name
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(value.replace(/\s+/g, "").toLowerCase())
  );

  setSearchedItems(filter);
};

export const handleScrollIntoView = (str) => {
  const id = str.replace(/\s+/g, "").toLowerCase();
  const el = document.getElementById(id);
  el &&
    el.scrollIntoView({
      behavior: "smooth", // Smooth scrolling animation
      block: "center", // Align vertically to the center
      inline: "nearest", // Align horizontally to the nearest edge
    });
};
