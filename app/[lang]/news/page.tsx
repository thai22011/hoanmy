import Link from "next/link";
import { Locale } from "@/i18n-config";
import Header from "@/components/Header";
import { getDictionary } from "@/get-dictionary";
import "./News.scss";

const NewsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero-news">
          <div className="hero-news__wrapper">
            <h1 className="hero-news__heading">
              {dictionary.ProjectsPage.heading}
            </h1>
            <div className="hero-news__red" />
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsPage;
