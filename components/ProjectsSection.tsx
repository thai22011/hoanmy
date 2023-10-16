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
  return (
    <section className="projects">
      <div className="projects__wrapper">
        <div className="projects__select-div">
          {/* MOBILE MENU */}
          <div className="projects__mobile-menu">
            <p
              className={
                selected === "all"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class1}
            </p>
            <p
              className={
                selected === "education"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class2}
            </p>
            <p
              className={
                selected === "commercial"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class3}
            </p>
            <p
              className={
                selected === "military"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class4}
            </p>
            <p
              className={
                selected === "government"
                  ? "projects__type--selected projects__type"
                  : "projects__type"
              }
            >
              {dictionary.class6}
            </p>
            <p
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
            {projects.map((project) => (
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
