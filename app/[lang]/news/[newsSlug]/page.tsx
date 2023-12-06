import Header from "@/components/Header";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { getArticle } from "@/sanity/sanity-functions";
import "./ArticlePage.scss";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export const revalidate = 0;
const NewsPage = async ({
  params,
}: {
  params: { newsSlug: string; lang: Locale };
}) => {
  const dictionary = await getDictionary(params.lang);
  const article = await getArticle(params.newsSlug);
  return (
    <>
      <Header dictionary={dictionary.Header} lang={params.lang} />
      <section className="article">
        <img className="article__image" src={article.image} alt="" />
        <div className="article__content">
          <div className="article__headings">
            <h1 className="article__title">{article.title}</h1>
            <h2 className="article__date">{article.date}</h2>
          </div>

          <div className="article__text">
            <PortableText value={article.content} />
          </div>
          <div className="article__gallery">
            <img
              className="article__gallery-image"
              src={article.gallery1}
              alt=""
            />
            <img
              className="article__gallery-image"
              src={article.gallery2}
              alt=""
            />
            <img
              className="article__gallery-image"
              src={article.gallery3}
              alt=""
            />
            <img
              className="article__gallery-image"
              src={article.gallery4}
              alt=""
            />
            <img
              className="article__gallery-image"
              src={article.gallery5}
              alt=""
            />
          </div>

          <div className="article__button-div">
            <Link className="article__button" href={`/${params.lang}/news`}>
              View all stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
