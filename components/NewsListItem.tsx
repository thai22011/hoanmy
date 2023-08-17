import Image from "next/image";
interface Props {
  title: string;
  description: string;
  image: string;
}

const NewsListItem: React.FC<Props> = ({ image, title, description }) => {
  console.log(image);
  return (
    <li className="news__list-item">
      <div className="news__image">
        <Image
          alt={title}
          layout="responsive"
          height={200}
          width={300}
          src={image}
        />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default NewsListItem;
