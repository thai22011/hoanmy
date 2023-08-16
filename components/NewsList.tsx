import NewsListItem from "./NewsListItem";
import { Locale } from "@/i18n-config";
import { NewsPreview } from "@/types";

interface Props {
  news: NewsPreview[];
}

const NewsList: React.FC<Props> = async ({ news }) => {
  return (
    <ul>
      {news.map((article: NewsPreview) => (
        <NewsListItem
          key={article.title}
          image={article.image}
          description={article.description}
          title={article.title}
        />
      ))}
    </ul>
  );
};

export default NewsList;
