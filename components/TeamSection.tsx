"use client";
import { useState } from "react";
import Image from "next/image";
interface Props {
  dictionary: any;
}

const TeamSection: React.FC<Props> = ({ dictionary }) => {
  const [focusPeople, setFocusPeople] = useState("bod");
  const [modalVisible, setModalVisible] = useState(false);
  const people = [
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "architect",
    },
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "bod",
    },
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "engineer",
    },
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "architect",
    },
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "bod",
    },
    {
      name: "Sally",
      title: "Lead Manager",
      image: "/crane.jpg",
      bio: "She is really talented and cool.",
      category: "architect",
    },
  ];
  return (
    <section className="team">
      <div className="team__wrapper">
        <div className="team__headings-div">
          <h3
            onClick={() => setFocusPeople("bod")}
            className={
              focusPeople === "bod"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading1}
          </h3>
          <h3
            onClick={() => setFocusPeople("architect")}
            className={
              focusPeople === "architect"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading2}
          </h3>
          <h3
            onClick={() => setFocusPeople("engineer")}
            className={
              focusPeople === "engineer"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading3}
          </h3>
        </div>
        {/* GALLERY HERE */}
        <div className="team__people">
          {people
            .filter((person) => person.category === focusPeople)
            .map((person, index) => (
              <div key={index} className="person">
                <div className="person__image-div">
                  <Image
                    height={300}
                    width={300}
                    alt="person"
                    src={person.image}
                  />
                </div>
                <p className="person__name">{person.name}</p>
                <p className="person__title">{person.title}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
