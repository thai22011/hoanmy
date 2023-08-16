"use client";
import { useState } from "react";
import { AboutUsSlider } from "./AboutUsSlider";
interface Props {
  dictionary: {
    text1: string;
    title1: string;
    text2: string;
    title2: string;
    text3: string;
    title3: string;
    text4: string;
    title4: string;
  };
}

const AboutUsSection: React.FC<Props> = ({ dictionary }) => {
  const content = [
    { title: dictionary.title1, text: dictionary.text1, id: 0 },
    { title: dictionary.title2, text: dictionary.text2, id: 1 },
    { title: dictionary.title3, text: dictionary.text3, id: 2 },
    { title: dictionary.title4, text: dictionary.text4, id: 3 },
  ];

  const [focusText, setFocusText] = useState(content[0]);
  console.log(focusText);
  return (
    <div>
      <AboutUsSlider>
        {content.map((item) => (
          <p onClick={() => setFocusText(content[item.id])}>{item.title}</p>
        ))}
      </AboutUsSlider>
      <p>{focusText.title}</p>
    </div>
  );
};

export default AboutUsSection;
