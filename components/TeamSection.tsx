"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface Props {
  dictionary: any;
}
interface Employee {
  name: string;
  title: string;
  image: string;
  bio: string;
  category: string;
  id: number;
}

const TeamSection: React.FC<Props> = ({ dictionary }) => {
  const boardOfDirectors = [
    {
      name: dictionary.Members.bod.name1, // Any dictionary value is dynamic and can be translateable. The outer.inner.moreInner style of syntax is finding the values in the json dictionaries. If adding more people to the teams, you need to add them in the dictionaries AND the arrays in this component.
      title: dictionary.Members.bod.title1,
      image: "/crane.jpg", //These photos come from the public folder. To add more photos or update them, just make sure the photo is in the public folder. If your photo is called "photo.jpg", then your image value in the employee objects needs to be "/photo.jpg"
      bio: dictionary.Members.bod.bio1,
      category: "bod", // The category is important for the filter to work that shows different people. To add more board of directors later on, make sure they have the same category value of "bod", and same for the other employees as well. "accountant" for the accountants, and so on.
      id: 0, // The id is important for the slider to work. To add more people later on, make the id increment by 1 for each new person per category.
    },
    {
      name: dictionary.Members.bod.name2,
      title: dictionary.Members.bod.title2,
      image: "/crane.jpg",
      bio: dictionary.Members.bod.bio2,
      category: "bod",
      id: 1,
    },
  ];

  const accountants = [
    {
      name: dictionary.Members.accountants.name1,
      title: dictionary.Members.accountants.title1,
      image: "/crane.jpg",
      bio: dictionary.Members.accountants.bio1,
      category: "accountant",
      id: 0,
    },
    {
      name: dictionary.Members.accountants.name2,
      title: dictionary.Members.accountants.title2,
      image: "/crane.jpg",
      bio: dictionary.Members.accountants.bio2,
      category: "accountant",
      id: 1,
    },
  ];
  const engineers = [
    {
      name: dictionary.Members.engineers.name1,
      title: dictionary.Members.engineers.title1,
      image: "/crane.jpg",
      bio: dictionary.Members.engineers.bio1,
      category: "engineer",
      id: 0,
    },
  ];

  const [focusPeople, setFocusPeople] = useState(boardOfDirectors);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePerson, setActivePerson] = useState<Employee | null>(null);

  const handleLeftClick = (id: number) => {
    setActivePerson(focusPeople[id - 1]);
  };
  const handleRightClick = (id: number) => {
    setActivePerson(focusPeople[id + 1]);
  };
  const handleCloseModal = () => {
    setModalOpen((prev) => !prev);
    document.body.style.overflow = "auto";
  };

  const handleOpenModal = (employee: Employee, index: Number) => {
    setModalOpen(true);
    setActivePerson(employee);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="team">
      {modalOpen && <div className="team__overlay" />}

      <div className="team__wrapper">
        <div className="team__headings-div">
          <h3
            onClick={() => setFocusPeople(boardOfDirectors)}
            className={
              focusPeople[0].category == "bod"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading1}
          </h3>
          <h3
            onClick={() => setFocusPeople(accountants)}
            className={
              focusPeople[0].category === "accountant"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading2}
          </h3>
          <h3
            onClick={() => setFocusPeople(engineers)}
            className={
              focusPeople[0].category === "engineer"
                ? "team__heading--focus team__heading"
                : "team__heading"
            }
          >
            {dictionary.Main.heading3}
          </h3>
        </div>
        {/* GALLERY HERE */}
        <div className="team__people">
          {focusPeople.map((person, index) => (
            <div
              onClick={() => handleOpenModal(person, index)}
              key={index}
              className="team__person"
            >
              <div className="team__person-image-div">
                <Image
                  height={300}
                  width={300}
                  alt="person"
                  layout="responsive"
                  src={person.image}
                />
              </div>
              <p className="team__person-name">{person.name}</p>
              <p className="team__person-title">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL HERE */}
      {modalOpen && activePerson && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__close-div">
              <button
                className="modal__close-button"
                onClick={() => handleCloseModal()}
              >
                <Image
                  width={25}
                  height={25}
                  alt="close menu"
                  src={"/close.svg"}
                />
                <p>Close</p>
              </button>
            </div>
            <div className="modal__content-div">
              <button
                className="modal__button-desktop"
                disabled={activePerson.id + 1 === focusPeople.length}
                onClick={() => handleRightClick(activePerson.id)}
              >
                <Image
                  className="modal__arrow--right"
                  width={20}
                  height={20}
                  alt="arrow"
                  src={"/arrow.svg"}
                />
              </button>
              <div className="modal__image-div">
                <img
                  // layout="responsive"
                  alt={activePerson.name}
                  className="modal__image"
                  src={activePerson.image}
                />

                <div className="modal__image-offset" />
              </div>

              <div className="modal__text-div">
                <h3 className="modal__name">{activePerson.name}</h3>
                <h4 className="modal__title">{activePerson.title}</h4>
                <p className="modal__bio">{activePerson.bio}</p>
              </div>
              <button
                className="modal__button-desktop"
                disabled={activePerson.id === 0}
                onClick={() => handleLeftClick(activePerson.id)}
              >
                <Image width={20} height={20} alt="arrow" src={"/arrow.svg"} />
              </button>
            </div>
            <div className="modal__buttons-div-mobile">
              <button
                className="modal__button-mobile"
                disabled={activePerson.id === 0}
                onClick={() => handleLeftClick(activePerson.id)}
              >
                <Image width={20} height={20} alt="arrow" src={"/arrow.svg"} />
                <p className="modal__button-text">Back</p>
              </button>
              <button
                className="modal__button-mobile"
                disabled={activePerson.id + 1 === focusPeople.length}
                onClick={() => handleRightClick(activePerson.id)}
              >
                <p className="modal__button-text">Next</p>
                <Image
                  className="modal__arrow--right"
                  width={20}
                  height={20}
                  alt="arrow"
                  src={"/arrow.svg"}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
