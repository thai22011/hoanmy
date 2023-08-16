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
      <Image
        alt={title}
        height={100}
        layout="responsive"
        width={100}
        src={image}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default NewsListItem;
