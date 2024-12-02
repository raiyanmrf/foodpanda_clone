import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useContext } from "react";
import { FaCheckSquare } from "react-icons/fa";
import Loading from "../../assets/svg/Loading";
import { cartContext } from "../../hooks/CartContext";

export const ItemPopupOptions = ({ foodItem }) => {
  const { sideItems, setSideItems, toUncheckRef } = useContext(cartContext);

  const handleOptionLimit = (content, option) => {
    const total = sideItems?.filter((item) => item.label === content.label);
    const item = sideItems?.filter((item) => item.name === option.name);
    return content.limit <= total.length && item.length < 1;
  };

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
    } catch (error) {}
  };

  const { isError, error, isLoading, data } = useQuery({
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
              <ul ref={toUncheckRef}>
                {content.items.map((option, index) => {
                  return (
                    <li key={index} className="itemPopup-options-list">
                      <input
                        disabled={handleOptionLimit(content, option)}
                        type="checkbox"
                        value={option.name}
                        onChange={(e) => {
                          const query = sideItems.filter(
                            (item) => item.name === option.name
                          );
                          if (query.length === 0) {
                            setSideItems([
                              ...sideItems,
                              {
                                name: option.name,
                                price: option.price,
                                required: content.required,
                                label: content.label,
                              },
                            ]);
                          } else if (query.length === 1) {
                            const filter = sideItems.filter(
                              (item) => item.name !== option.name
                            );

                            setSideItems(filter);
                          }
                        }}
                        id={`${index} ${option.name}`}
                        required={content.required}
                      />
                      <label htmlFor={`${index} ${option.name}`}>
                        <FaCheckSquare />
                      </label>
                      {option.image && (
                        <img
                          src={option.image}
                          width={"40px"}
                          height={"40px"}
                          alt=""
                        />
                      )}
                      <p>{option.name}</p>
                      <p>
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
                      </p>
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
