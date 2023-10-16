import Link from "next/link";
import { Locale } from "@/i18n-config";
import Header from "@/components/Header";
import { getDictionary } from "@/get-dictionary";
import "./Projects.scss";
import ProjectsSection from "@/components/ProjectsSection";
import { getProjectPreviews } from "@/sanity/sanity-functions";
const ProjectsPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const projects = await getProjectPreviews(lang);
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero-projects">
          <div className="hero-projects__wrapper">
            <h1 className="hero-projects__heading">
              {dictionary.ProjectsPage.heading}
            </h1>
            <div className="hero-projects__red" />
          </div>
        </section>
        <ProjectsSection
          lang={lang}
          dictionary={dictionary.ProjectsPage}
          projects={projects}
        />
      </main>
    </>
  );
};

export default ProjectsPage;
