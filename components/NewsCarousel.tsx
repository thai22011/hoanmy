import { useSwipeable } from "react-swipeable";
import React, { useState } from "react";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";
import "./carousel.css";

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

export const NewsCarousel: React.FC<Props> = ({
  lang,
  children,
  dictionary,
}) => {
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
    <>
      <div className="news__headers-div">
        <h3 className="news__heading">{dictionary.heading}</h3>
        <div className="news__nav-div">
          <Link className="news__link" href={`/${lang}/news`}>
            {dictionary.view_all}
          </Link>
          <div className="news__arrows-div">
            <button className="news__button" onClick={() => slide(PREV)}>
              <Image src={"/arrow.svg"} height={15} width={15} alt="arrow" />
            </button>
            <button
              className="news__button news__button--next"
              onClick={() => slide(NEXT)}
            >
              <Image src={"/arrow.svg"} height={15} width={15} alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* CAROUSEL START HERE */}
      <div {...handlers} style={{ touchAction: "pan-y" }}>
        <div className="wrapper">
          <div
            className={`carousel-container ${direction} ${
              sliding && "sliding"
            }`}
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
    </>
  );
};
