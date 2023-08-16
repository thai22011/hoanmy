import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import "@/styles/globals/Footer.scss";
import Link from "next/link";

interface Props {
  locale: Locale;
}

const Footer: React.FC<Props> = async ({ locale }) => {
  const dictionary = await getDictionary(locale);

  return (
    <>
      <section className="ready">
        <h2 className="ready__title">{dictionary["Footer"].title}</h2>
        <p className="ready__text">{dictionary["Footer"].text}</p>
        <div className="ready__links-div">
          <Link className="ready__link" href="/about">
            {dictionary["Footer"].button1}
          </Link>
          <Link className="ready__link ready__link--modifier" href="/careers">
            {dictionary["Footer"].button2}
          </Link>
        </div>
      </section>

      <footer className="footer"></footer>
    </>
  );
};

export default Footer;
