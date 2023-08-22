"use client";
import { useSwipeable } from "react-swipeable";
import React, { useState } from "react";
import { Locale } from "@/i18n-config";

const NEXT = "next";
const PREV = "prev";

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
interface Props {
  children: any;
  lang: Locale;
  dictionary: any;
}

const ProjectsCarousel: React.FC<Props> = ({ children }) => {
  const numItems = React.Children.count(children);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState("");
  const [pos, setPos] = useState(0);

  const slideNext = () => {
    setSliding(true);
    setDirection(NEXT);
    setPos(pos === numItems - 1 ? 0 : pos + 1);

    setTimeout(stopSliding, 50);
  };

  const slidePrev = () => {
    setSliding(true);
    setDirection(PREV);
    setPos(pos === 0 ? numItems - 1 : pos - 1);

    setTimeout(stopSliding, 50);
  };

  const stopSliding = () => setSliding(false);

  const slide = (direction: string) => {
    if (direction === NEXT) {
      slideNext();
    } else {
      slidePrev();
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwiping: () => console.log("swiping"),
    onSwipedUp: () => console.log("up"),
    touchEventOptions: { passive: true },
  });

  console.log("handler: ", handlers);
  return (
    <div {...handlers} style={{ touchAction: "pan-y" }}>
      <div className="wrapper">
        <div
          className={`carousel-container ${direction} ${sliding && "sliding"}`}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="carousel-slot"
              style={{ order: getOrder(index, pos, numItems) }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
