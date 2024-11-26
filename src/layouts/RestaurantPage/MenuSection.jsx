import { foodNavLinks } from "../../assets/data/foodData";
import useSlideRef from "../../hooks/useSlideRef";
import MenuDisplay from "./MenuDisplay";
import MenuNavbar from "./MenuNavbar";
import menuJson from "../../utils/cuisines.json";
import React, { useMemo } from "react";

const MenuSection = ({ cuisine }) => {
  const items = useMemo(
    () =>
      menuJson.filter((item) => item.cuisine.toLocaleLowerCase() === cuisine),
    [cuisine]
  );
  const navlinks = useMemo(
    () => [...new Set(items.map((item) => item.tag))],
    [items]
  );

  const MemoizedMenuNavbar = React.memo(MenuNavbar);
  const MemoizedMenuDisplay = React.memo(MenuDisplay);
  console.log("MenuSetion Render");
  return (
    <section className="dish">
      <MemoizedMenuNavbar items={items} links={navlinks} />

      <MemoizedMenuDisplay links={navlinks} items={items} />
    </section>
  );
};

export default MenuSection;
