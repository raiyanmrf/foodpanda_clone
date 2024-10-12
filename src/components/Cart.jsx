import { orderedItem, suggestItems } from "../../public/data/foodData";
import { FaBackward, FaForward } from "react-icons/fa6";
import { LiaPlusSolid } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import { CiCircleRemove, CiForkAndKnife } from "react-icons/ci";
import { useEffect, useState } from "react";
import useSlideRef from "../hooks/useSlideRef";
import { AiFillShopping, AiOutlineShop } from "react-icons/ai";
import { RiCrossFill, RiShoppingBag4Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  const [isActive, setIsActive] = useState(true);
  const [isCutlery, setIsCutlery] = useState(true);
  const [itemsRefs, handleToggleNext, handleTogglePrev, index] = useSlideRef(
    suggestItems.length
  );

  return (
    <>
      <section className="cart">
        <header>
          <h3>Momo Miah</h3>
          <figure>
            <RxCross1 />
          </figure>
        </header>
        <section className="cart-content">
          {/* <div className="cart-empty">
      <img src={pandaCart} width={`120px`} alt="cart" />
      <h3>Hungry?</h3>
      <p>You haven't added anything to your cart!</p>
      </div> */}
          <div className="cart-tabs">
            <button
              onClick={() => setIsActive(true)}
              className={`${isActive && "btn-active"}`}
            >
              Delivery
              {isActive && <p>Standard (25-30min)</p>}
            </button>
            <button
              onClick={() => setIsActive(false)}
              className={`${!isActive && "btn-active"}`}
            >
              Pick Up
              {!isActive && <p>Standard (25-30min)</p>}
            </button>
          </div>
          <article className="cart-items">
            <h4>Your Items</h4>
            {orderedItem.map((item, index) => (
              <article key={index} className="cart-singleItem">
                <figure className="cart-order-info">
                  <img
                    src={item.image}
                    alt="item"
                    height={`46px`}
                    width={`56px`}
                  />

                  <summary className="cart-order-text">
                    <p className="title-ellipsis">{item.name}</p>
                    <p className="title-ellipsis">Extra Cheese..</p>
                    <div className="cart-order-update">
                      <p>{item.price}</p>

                      <div className="cart-order-update-btn">
                        <figure>
                          <MdOutlineDelete />{" "}
                        </figure>
                        <span>1</span>
                        <figure>
                          <LiaPlusSolid />{" "}
                        </figure>
                      </div>
                    </div>
                  </summary>
                </figure>
              </article>
            ))}
          </article>

          <div className="cart-suggestItems">
            <article className=" cart-suggestItems-info">
              <div className=" cart-order-text">
                <h3>Popular with your order</h3>
                <p>Based on what other customers bought together</p>
              </div>
              <div className="cart-toogleBtns">
                <button
                  // disabled={index === 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePrev();
                  }}
                  className=" signin-cancel"
                >
                  <FaBackward />
                </button>
                <button
                  // disabled={''}
                  className=" signin-cancel"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleNext();
                  }}
                >
                  <FaForward />
                </button>
              </div>
            </article>

            <div className=" cart-slide-container">
              <ul>
                {suggestItems.map((item, i) => (
                  <li ref={(el) => (itemsRefs.current[i] = el)} key={i}>
                    <div>
                      <img
                        src={item.image}
                        width={`150px`}
                        height={`140px`}
                        alt={item.name}
                      />
                      <button>
                        <LiaPlusSolid />
                      </button>
                    </div>

                    <article>
                      <p>{item.price}</p>
                      <p>{item.name}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" cart-summary" id="summary">
            <p>
              <span>Subtotal</span>
              <span>Tk 1433</span>
            </p>
            <p>
              <span>Standard delivery</span>
              <span className="pink-text">free</span>
              <span>Welcome gift:free delivery</span>
            </p>
            <p>
              <span>Service fee</span>
              <span>Tk 9</span>
            </p>
            <p>
              <span>VAT</span>
              <span>Tk 73</span>
            </p>
          </div>

          <div className=" cart-cutlery">
            <CiForkAndKnife />

            <div>
              <p>Cutlery</p>
              {!isCutlery ? (
                <p>If available, your order will come with cutlery</p>
              ) : (
                <p>No cutlery provided. Thanks for reducing waste!</p>
              )}
            </div>

            <div className="switch-div">
              <input
                id="switch"
                type="checkbox"
                onChange={() => setIsCutlery(!isCutlery)}
              />
              <label htmlFor="switch"></label>
            </div>
          </div>
        </section>

        <footer>
          <summary>
            <p>
              Total <span>(incl. fees and tax)</span>
            </p>
            <p>Tk 500</p>
          </summary>

          <a href="#summary">See Summary</a>

          <button className="btn btn-pink btn-lg btn-moderate">
            review payment and address
          </button>
        </footer>
      </section>
      {/* <section className="cart-goto">
        <button className="btn btn-flex btn-pink btn-lg btn-moderate">
          <figure>
            <RiShoppingBag4Line /> <p>1</p>
          </figure>

          <p>View Cart</p>

          <p>Tk 648</p>
        </button>
      </section> */}
    </>
  );
};

export default Cart;
