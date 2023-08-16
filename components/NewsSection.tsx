"use client";
import { Locale } from "@/i18n-config";
import { NewsPreview } from "@/types";
import Link from "next/link";
import NewsList from "./NewsList";
import NewsListItem from "./NewsListItem";
import { useState } from "react";
import Image from "next/image";
import { Carousel } from "./Carousel";
interface Props {
  news: NewsPreview[];
  lang: Locale;
  dictionary: {
    heading: string;
    view_all: string;
  };
}

const NewsSection: React.FC<Props> = ({ news, lang, dictionary }) => {
  // const [position, setPosition] = useState(1);
  // const [initial, setInitial] = useState(0);

  // const goBack = () => {
  //   setInitial(initial - 1);
  //   setPosition(position - 1);
  // };

  // const goForward = () => {
  //   setInitial(initial + 1);
  //   setPosition(position + 1);
  // };
  return (
    <section className="news">
      <div className="news__headers-div">
        <h3 className="news__heading">{dictionary.heading}</h3>
        <div className="news__nav-div">
          <Link className="news__link" href={`/${lang}/news`}>
            {dictionary.view_all}
          </Link>
          <div className="news__arrows-div">
            {/* <button onClick={goBack}>
              <Image src={"/arrow.svg"} height={10} width={10} alt="arrow" />
            </button> */}
            {/* <button onClick={goForward}>forward</button> */}
          </div>
        </div>
      </div>

      <Carousel>
        {news.map((article: NewsPreview) => (
          <NewsListItem
            key={article.title}
            image={article.image}
            description={article.description}
            title={article.title}
          />
        ))}
      </Carousel>
      {/* <ul className="news__list">
        {news.slice(initial, position).map((article: NewsPreview) => (
          <NewsListItem
            key={article.title}
            image={article.image}
            description={article.description}
            title={article.title}
          />
        ))}
      </ul> */}
      {/* <NewsList news={news} /> */}
    </section>
  );
};

export default NewsSection;
