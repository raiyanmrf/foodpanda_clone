import { backwardIcon, forwardIcon } from "../../assets/svg";

import useSlideRef from "../../hooks/useSlideRef";
import { cardData } from "../../assets/data/cardData";
import Cards from "../../components/Cards";
import useDetectMouse from "../../hooks/useDetectMouse";
import useCheckOverflow from "../../hooks/useCheckOverflow";
import Slider from "../../components/Slider";

const AvailableDeals = () => {
  const [isMouse] = useDetectMouse();
  const [isOverFlowed, cardContainerRef, cardContentRef] = useCheckOverflow();
  const [cardRefs, handleCardToggleNext, handleCardTogglePrev, index] =
    useSlideRef(cardData.length);
  return (
    <section className="available-deals">
      <h3>Available Deals</h3>

      {/* <div ref={cardContainerRef} className="available-deals-cards">
        <div ref={cardContentRef} className="available-deals-content">
          {cardData &&
            cardData.map((item, index) => (
              <Cards
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                key={index}
                item={item}
              />
            ))}
        </div>
      </div> */}

      <Slider title={"Available Deals"}>
        {cardData && cardData.map((item, index) => <Cards item={item} />)}
      </Slider>
      {/* 
      {isOverFlowed && isMouse && (
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
      )} */}
    </section>
  );
};

export default AvailableDeals;
