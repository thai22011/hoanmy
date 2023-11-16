"use client";
import { ProjectPreview } from "@/types";
import { useState } from "react";
import { Locale } from "@/i18n-config";
import Link from "next/link";
interface Props {
  projects: ProjectPreview[];
  dictionary: any;
  lang: Locale;
}

const ProjectsSection: React.FC<Props> = ({ projects, dictionary, lang }) => {
  const [showedProjects, setShowedProjects] = useState(projects);
  const [selected, setSelected] = useState("all");
  console.log(projects);

  const handleChange = (category: string) => {
    setSelected(category);

    if (category === "all") {
      setShowedProjects(projects);
    } else {
      setShowedProjects(
        projects.filter((project) => project.market === category)
      );
    }
  };
  return (
    <section className="projects">
      <div className="projects__wrapper">
        <div className="projects__select-div">
          {/* MOBILE MENU */}
          <div className="projects__mobile-menu">
            <p
              onClick={() => handleChange("all")}
              className={
                selected === "all"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class1}
            </p>
            <p
              onClick={() => handleChange("education")}
              className={
                selected === "education"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class2}
            </p>
            <p
              onClick={() => handleChange("commercial")}
              className={
                selected === "commercial"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class3}
            </p>
            <p
              onClick={() => handleChange("military")}
              className={
                selected === "military"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class4}
            </p>
            <p
              onClick={() => handleChange("government")}
              className={
                selected === "government"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class6}
            </p>
            <p
              onClick={() => handleChange("waterway")}
              className={
                selected === "waterway"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class5}
            </p>
          </div>
          <div className="projects__container">
            {showedProjects.map((project) => (
              <Link
                href={`/${lang}/projects/${project.slug}`}
                className="projects__link"
              >
                <p>{project.name}</p>
                <img
                  className="projects__image"
                  src={project.image}
                  alt={project.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
