import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

import Link from "next/link";
import Image from "next/image";
import "./Home.scss";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import { getNewsPreviews, getProjectPreviews } from "@/sanity/sanity-functions";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AboutUsSection from "@/components/AboutUsSection";
import { ProjectPreview, NewsPreview } from "@/types";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const news = await getNewsPreviews(lang);

  const projects = await getProjectPreviews(lang);

  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero">
          <div className="hero__container">
            <h2 className="hero__title">{dictionary["Header"].heading}</h2>
            <p className="hero__text">{dictionary["Header"].subheading}</p>
            <div className="hero__links-div">
              <Link className="hero__link" href={`/${lang}/company`}>
                {dictionary["Header"].button1}
              </Link>
              <Link
                className="hero__link hero__link--modifier"
                href={`/${lang}/careers`}
              >
                {dictionary["Header"].button2}
              </Link>
            </div>
          </div>
        </section>

        {/* ---------FORCE SECTION---------- */}
        <section className="force">
          <div className="force__gradient" />
          <div className="force__container">
            <div className="force__image-div">
              <Image
                src={"/force.png"}
                alt="construction mosaic"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="force__text-div">
              <h2 className="force__heading">
                {dictionary["HomePage"].Force.heading}
              </h2>
              <h3 className="force__subheading">
                {dictionary["HomePage"].Force.subheading}
              </h3>
              <Link className="force__link" href={`/${lang}/company`}>
                {dictionary["HomePage"].Force.button}
              </Link>
            </div>
          </div>
        </section>
        {/* ----------STATS SECTION--------- */}
        <section className="stats">
          <div className="stats__wrapper">
            <div className="stats__content">
              <h3 className="stats__heading">
                {dictionary["HomePage"].Stats.heading1}
              </h3>
              <h4 className="stats__number">1996</h4>
              <p className="stats__text">
                {dictionary["HomePage"].Stats.text1}
              </p>
            </div>
            <div className="stats__content">
              <h3 className="stats__heading">
                {dictionary["HomePage"].Stats.heading2}
              </h3>
              <h4 className="stats__number">100+</h4>
              <p className="stats__text">
                {dictionary["HomePage"].Stats.text2}
              </p>
            </div>
            <div className="stats__content">
              <h3 className="stats__heading">
                {dictionary["HomePage"].Stats.heading3}
              </h3>
              <h4 className="stats__number">100%</h4>
              <p className="stats__text">
                {dictionary["HomePage"].Stats.text3}
              </p>
            </div>
            <div className="stats__content">
              <h3 className="stats__heading">
                {dictionary["HomePage"].Stats.heading4}
              </h3>
              <h4 className="stats__number">150+</h4>
              <p className="stats__text">
                {dictionary["HomePage"].Stats.text4}
              </p>
            </div>
          </div>
        </section>
        {/* -----------WORK SECTION-------------- */}
        <section className="work">
          <div className="work__wrapper">
            <div className="work__text-content">
              <h2 className="work__heading">
                {dictionary["HomePage"].Work.heading}
              </h2>
              <p className="work__text">{dictionary["HomePage"].Work.text}</p>
            </div>
            <div>
              {projects.map((project: ProjectPreview) => (
                <Link
                  className="work__link"
                  href={`/${lang}/projects/${project.slug}`}
                >
                  {project.image && (
                    <Image
                      width={80}
                      height={80}
                      layout="responsive"
                      alt={project.name}
                      src={project.image}
                    />
                  )}
                  <h3 className="work__project-name">{project.name}</h3>
                </Link>
              ))}
            </div>
            <div className="work__button-div">
              <Link className="work__button" href={`/${lang}/company`}>
                {dictionary["HomePage"].Work.button}
              </Link>
            </div>
          </div>
        </section>
        {/* --------ABOUT US SECTION---------- */}

        <AboutUsSection lang={lang} dictionary={dictionary.HomePage.AboutUs} />
        <div className="about-photo">
          <Image
            height={100}
            layout="responsive"
            alt="Construction"
            width={100}
            src={"/about1.jpg"}
          />
        </div>

        {/* -------NEWS SECTION---------- */}
        {/* <NewsSection
          news={news}
          lang={lang}
          dictionary={dictionary.HomePage.News}
        /> */}

        <section className="work">
          <h2 className="work__heading">{dictionary.HomePage.News.heading}</h2>
          {news.map((article: NewsPreview) => (
            <Link className="work__link" href={`/${lang}/news/${article.slug}`}>
              {article.image && (
                <Image
                  width={80}
                  height={80}
                  layout="responsive"
                  alt={article.title}
                  src={article.image}
                />
              )}
              <h3 className="work__project-name">{article.title}</h3>
            </Link>
          ))}
          <div className="work__button-div">
            <Link className="work__button" href={`/${lang}/company`}>
              {dictionary["HomePage"].News.view_all}
            </Link>
          </div>
        </section>
        {/* ------COMMUNITY SECTION----- */}
        <section className="community">
          <div className="community__wrapper">
            <div className="community__image-mobile">
              <Image
                layout="responsive"
                width={600}
                height={600}
                // unoptimized
                alt="image"
                src={"/community2.jpg"}
              />
            </div>
            <div className="community__image-desktop">
              <Image
                layout="responsive"
                width={600}
                height={600}
                alt="image"
                src={"/community3.jpg"}
              />
            </div>

            <div className="community__text-div">
              <h3 className="community__title">
                {dictionary["HomePage"].Community.title}
              </h3>
              <p className="community__text">
                {dictionary["HomePage"].Community.text}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
