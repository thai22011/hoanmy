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
      name: "Sally",
      title: "Director",
      image: "/crane.jpg",
      bio: "Really cool",
      category: "bod",
      id: 0,
    },
    {
      name: "Dave",
      title: "Director",
      image: "/crane.jpg",
      bio: "Really goood",
      category: "bod",
      id: 1,
    },
    {
      name: "Alex",
      title: "Director",
      image: "/crane.jpg",
      bio: "Really great",
      category: "bod",
      id: 2,
    },
  ];

  const accountants = [
    {
      name: "Michelle",
      title: "Accountant",
      image: "/crane.jpg",
      bio: "So good",
      category: "accountant",
      id: 0,
    },
    {
      name: "Katie",
      title: "Accountant",
      image: "/crane.jpg",
      bio: "So good",
      category: "accountant",
      id: 1,
    },
  ];
  const engineers = [
    {
      name: "Lisa",
      title: "Engineer",
      image: "/crane.jpg",
      bio: "Cool!",
      category: "engineer",
      id: 0,
    },
    {
      name: "Holly",
      title: "Engineer",
      image: "/crane.jpg",
      bio: "Cool!",
      category: "engineer",
      id: 1,
    },
  ];
  // const people = [
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "engineer",
  //   },
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "bod",
  //   },
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "accountant",
  //   },
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "bod",
  //   },
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "bod",
  //   },
  //   {
  //     name: "Sally",
  //     title: "Lead Manager",
  //     image: "/crane.jpg",
  //     bio: "She is really talented and cool.",
  //     category: "accountant",
  //   },
  // ];

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
              <div className="modal__image">
                <Image
                  height={50}
                  width={50}
                  layout="responsive"
                  alt={activePerson.name}
                  src={activePerson.image}
                />
              </div>

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
      )}
    </section>
  );
};

export default TeamSection;
