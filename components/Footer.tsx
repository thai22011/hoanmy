import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import "@/styles/globals/Footer.scss";
import Link from "next/link";
import Image from "next/image";
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

      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__copy-div">
            <div className="footer__logo-div">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src={"/logo-text.svg"}
                alt="logo"
              />
            </div>
            <div>
              <div className="footer__socials">
                <p>F</p>
                <p>T</p>
                <p>L</p>
              </div>
              <p>
                Copyright <span>&copy;</span> 2023 HoanMyCo
              </p>
            </div>
          </div>
          <div className="footer__links-div">
            <div className="footer__links">
              <h4 className="footer__heading">
                {dictionary["Footer"].heading1}
              </h4>
              <ul className="footer__ul">
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/`}>
                    {dictionary["Footer"].qlink1}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/company`}>
                    {dictionary["Footer"].qlink2}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/projects`}>
                    {dictionary["Footer"].qlink3}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/team`}>
                    {dictionary["Footer"].qlink4}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/news`}>
                    {dictionary["Footer"].qlink5}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/careers`}>
                    {dictionary["Footer"].qlink6}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <h4 className="footer__heading">
                {dictionary["Footer"].heading2}
              </h4>
              <ul className="footer__ul">
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/`}>
                    {dictionary["Footer"].rlink1}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/company`}>
                    {dictionary["Footer"].rlink2}
                  </Link>
                </li>
                <li className="footer__li">
                  <Link className="footer__link" href={`/${locale}/projects`}>
                    {dictionary["Footer"].rlink3}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <h4 className="footer__heading">
                {dictionary["Footer"].heading3}
              </h4>
              <ul className="footer__ul">
                <li className="footer__li">
                  <p className="footer__link">99999999999</p>
                </li>
                <li className="footer__li">
                  <a className="footer__link" href="mailto:email@email.com">
                    email@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;