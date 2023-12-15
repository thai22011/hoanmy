import { getProject } from "@/sanity/sanity-functions";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "@/components/Header";
import { PortableText } from "@portabletext/react";
import "./ProjectPage.scss";
import Link from "next/link";
export const revalidate = 0;
export default async function ProjectPage({
  params,
}: {
  params: { projectSlug: string; lang: Locale };
}) {
  const { projectSlug } = params;
  console.log(projectSlug);
  const dictionary = await getDictionary(params.lang);
  const project = await getProject(projectSlug);
  // console.log(project);

  return (
    <>
      <Header lang={params.lang} dictionary={dictionary.Header} />

      <section className="project">
        <img className="project__image" src={project.image} alt="" />
        <div className="project__content">
          <div className="project__headings">
            <h1 className="project__title">{project.name}</h1>
            <h2 className="project__location">{project.location}</h2>
          </div>
          <div className="project__categories">
            <div className="project__category">
              <h4 className="project__category-type">
                {dictionary.ProjectsPage.client}
              </h4>
              <h4 className="project__category-value">{project.client}</h4>
            </div>
            <div className="project__category">
              <h4 className="project__category-type">
                {dictionary.ProjectsPage.market}
              </h4>
              <h4 className="project__category-value">
                {project.market === "government"
                  ? dictionary.ProjectsPage.class6
                  : project.market === "commercial"
                  ? dictionary.ProjectsPage.class3
                  : project.market === "education"
                  ? dictionary.ProjectsPage.class2
                  : project.market === "military"
                  ? dictionary.ProjectsPage.class4
                  : dictionary.ProjectsPage.class5}
              </h4>
            </div>
            <div className="project__category">
              <h4 className="project__category-type">
                {dictionary.ProjectsPage.completion}
              </h4>
              <h4 className="project__category-value">{project.completed}</h4>
            </div>
            <div className="project__category">
              <h4 className="project__category-type">
                {dictionary.ProjectsPage.budget}
              </h4>
              <h4 className="project__category-value">{project.budget}</h4>
            </div>
          </div>
          <div className="project__text">
            <PortableText value={project.content} />
          </div>
          <div className="project__gallery">
            <img
              className="project__gallery-image"
              src={project.gallery1}
              alt=""
            />
            <img
              className="project__gallery-image"
              src={project.gallery2}
              alt=""
            />
            <img
              className="project__gallery-image"
              src={project.gallery3}
              alt=""
            />
            <img
              className="project__gallery-image"
              src={project.gallery4}
              alt=""
            />
            <img
              className="project__gallery-image"
              src={project.gallery5}
              alt=""
            />
          </div>

          <div className="project__button-div">
            <Link className="project__button" href={`/${params.lang}/projects`}>
              {dictionary.ProjectsPage.view_all}
            </Link>
          </div>
        </div>
      </section>
    </>
  );

  //   return project[0] && <div>{project[0].name}</div>;
}
