import Link from "next/link";
import { Locale } from "@/i18n-config";
import Header from "@/components/Header";
import { getDictionary } from "@/get-dictionary";
import "./News.scss";
import { getNewsPreviews } from "@/sanity/sanity-functions";
import { NewsPreview } from "@/types";
export const revalidate = 0;
const NewsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  const news = await getNewsPreviews(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero-news">
          <div className="hero-news__wrapper">
            <h1 className="hero-news__heading">
              {dictionary.NewsPage.heading}
            </h1>
            <div className="hero-news__red" />
          </div>
        </section>
        <section className="news">
          <div className="news__wrapper">
            {news.map((article: NewsPreview, index: number) => (
              <Link
                className="news__div-link"
                key={index}
                href={`/${lang}/news/${article.slug}`}
              >
                <h2 className="news__title">{article.title}</h2>
                <img
                  className="news__image"
                  src={article.image}
                  alt={article.title}
                />
                {/* <p>{article.description}</p> */}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsPage;
