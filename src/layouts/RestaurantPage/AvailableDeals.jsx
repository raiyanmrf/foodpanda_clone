import { backwardIcon, forwardIcon } from "../../../public/svg";

import useSlideRef from "../../hooks/useSlideRef";
import { cardData } from "../../../public/data/cardData";
import Cards from "../../components/Cards";
import useDetectMouse from "../../hooks/useDetectMouse";
import useCheckOverflow from "../../hooks/useCheckOverflow";

const AvailableDeals = () => {
  const [isMouse, isTouch] = useDetectMouse();
  const [isOverFlowed, cardContainerRef, cardContentRef] = useCheckOverflow();
  const [cardRefs, handleCardToggleNext, handleCardTogglePrev, index] =
    useSlideRef(cardData.length);
  return (
    <section className="available-deals">
      <h3>Available Deals</h3>

      <div ref={cardContainerRef} className="available-deals-cards">
        <div ref={cardContentRef} className="available-deals-content">
          {cardData &&
            cardData.map((item, index) => (
              <Cards
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                key={index}
                w
                item={item}
              />
            ))}
        </div>
      </div>

      {isMouse && !isTouch && isOverFlowed && (
        <>
          {index > 0 && (
            <div className="prev-button" onClick={handleCardTogglePrev}>
              <img src={backwardIcon} alt="<" />
            </div>
          )}
          <div className="next-button" onClick={handleCardToggleNext}>
            <img height={`32px`} width={`32px`} src={forwardIcon} alt=">" />
          </div>
        </>
      )}
    </section>
  );
};

export default AvailableDeals;
