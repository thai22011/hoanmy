"use client";
import { useState } from "react";
import { AboutUsSlider } from "./AboutUsSlider";
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
  };
}

const AboutUsSection: React.FC<Props> = ({ lang, dictionary }) => {
  const content = [
    { title: dictionary.title2, text: dictionary.text2, id: 0 },
    { title: dictionary.title1, text: dictionary.text1, id: 1 },
    { title: dictionary.title3, text: dictionary.text3, id: 2 },
    { title: dictionary.title4, text: dictionary.text4, id: 3 },
  ];

  const [focusText, setFocusText] = useState(content[1]);
  console.log(focusText);
  return (
    <div>
      <AboutUsSlider>
        {content.map((item) => (
          <p
            className={
              focusText.id === item.id
                ? "about__heading-mobile--focus"
                : "about__heading-mobile"
            }
            onClick={() => setFocusText(content[item.id])}
          >
            {item.title}
          </p>
        ))}
      </AboutUsSlider>
      <h3>{focusText.title}</h3>
      <p>{focusText.text}</p>
      <Link className="about__button" href={`/about/${lang}`}>
        {dictionary.button}
      </Link>
    </div>
  );
};

export default AboutUsSection;
