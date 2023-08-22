"use client";
import { useState } from "react";

import { Locale } from "@/i18n-config";
import Link from "next/link";
interface Props {
  lang: Locale;
  dictionary: {
    text1: string;
    title1: string;
    text2: string;
    title2: string;
    text3: string;
    title3: string;
    text4: string;
    title4: string;
    button: string;
    heading: string;
  };
}

const AboutUsSection: React.FC<Props> = ({ lang, dictionary }) => {
  const content = [
    { title: dictionary.title1, text: dictionary.text1, id: 0 },
    { title: dictionary.title2, text: dictionary.text2, id: 1 },
    { title: dictionary.title3, text: dictionary.text3, id: 2 },
    { title: dictionary.title4, text: dictionary.text4, id: 3 },
  ];

  const [focusText, setFocusText] = useState(content[0]);
  console.log(focusText);
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2 className="about__heading">{dictionary.heading}</h2>

        <div className="about__content">
          {/* MOBILE MENU */}
          <div className="about__mobile-menu">
            {content.map((item, index) => (
              <p
                key={index}
                className={
                  focusText.id === item.id
                    ? "about__heading-mobile about__heading-mobile--focus"
                    : "about__heading-mobile"
                }
                onClick={() => setFocusText(content[item.id])}
              >
                {item.title}
              </p>
            ))}
          </div>
          {/* DESKTOP MENU */}
          <div className="about__desktop-menu">
            {content.map((item, index) => (
              <p
                key={index}
                className={
                  focusText.id === item.id
                    ? "about__heading-desktop about__heading-desktop--focus"
                    : "about__heading-desktop"
                }
                onClick={() => setFocusText(content[item.id])}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className="about__focus-div">
            <h3 className="about__focus-title">{focusText.title}</h3>
            <p className="about__focus-text">{focusText.text}</p>
            <Link className="about__button" href={`/about/${lang}`}>
              {dictionary.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
