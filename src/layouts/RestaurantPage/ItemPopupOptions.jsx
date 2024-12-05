import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useContext } from "react";
import { FaCheckSquare } from "react-icons/fa";
import Loading from "../../assets/svg/Loading";
import { cartContext } from "../../hooks/CartContext";
import { checkSelectionLimit, unCheck } from "../../utils/foodItemPopupLogic";

export const ItemPopupOptions = ({ foodItem }) => {
  const { sideItems, setSideItems } = useContext(cartContext);

  const getSideChoices = async () => {
    try {
      const res = await fetch(
        `https://restaurant-server-ni4y.onrender.com/api/choices/${foodItem.type}`
      );
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Items not found.");
        }
        throw new Error("Failed to fetch Side Choice data");
      }

      return data;
    } catch (error) {
      console.error("Error Fetching Side Choices", error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["sideChoices", foodItem.type],
    queryFn: getSideChoices,
  });

  if (isLoading) return <Loading />;

  return (
    <Fragment>
      {data &&
        data.map((content, index) => {
          return (
            <section
              key={index}
              className={`itemPopup-options ${
                content.required && "itemPopup-required"
              }`}
            >
              <article className="itemPopup-options-title">
                <h3>{content.label}</h3>
                {content.limit ? (
                  <p>Select up to {content.limit}</p>
                ) : (
                  <p>Others around you liked this</p>
                )}
                <mark>{content.required ? "Required" : "Optional"}</mark>
              </article>
              <ul>
                {content.items.map((option, index) => {
                  return (
                    <li key={index} className="itemPopup-options-list">
                      <input
                        type="checkbox"
                        id={`${index} ${option.name}`}
                        checked={unCheck(content, option)}
                        value={option.name}
                        required={content.required}
                        onChange={() => {
                          const isSelected = sideItems.some(
                            (item) => item.name === option.name
                          );

                          if (!isSelected) {
                            if (checkSelectionLimit(content)) {
                              // Replace the first item if the limit is exceeded
                              const updatedItems = sideItems.slice(1).concat({
                                name: option.name,
                                price: option.price,
                                required: content.required,
                                label: content.label,
                              });
                              console.log("updatedItems", updatedItems);
                              setSideItems(updatedItems);
                            } else {
                              // Add the new item
                              setSideItems([
                                ...sideItems,
                                {
                                  name: option.name,
                                  price: option.price,
                                  required: content.required,
                                  label: content.label,
                                },
                              ]);
                            }
                          } else {
                            // Remove the item if it's unchecked
                            const updatedItems = sideItems.filter(
                              (item) => item.name !== option.name
                            );
                            setSideItems(updatedItems);
                          }
                        }}
                      />
                      <label
                        className="squareBoxLabel"
                        htmlFor={`${index} ${option.name}`}
                      >
                        <FaCheckSquare />
                      </label>

                      <label
                        className="itemPopup-options-list-name"
                        htmlFor={`${index} ${option.name}`}
                      >
                        {option.name}
                      </label>
                      <label className="itemPopup-options-list-name">
                        <strong className="">
                          {typeof option.price === "number"
                            ? `+Tk ${option.price}`
                            : "free"}
                        </strong>
                        <span>
                          {" "}
                          {typeof option.price === "number"
                            ? `Tk ${Math.ceil(
                                option.price + option.price * 0.1
                              )}`
                            : ""}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
    </Fragment>
  );
};
