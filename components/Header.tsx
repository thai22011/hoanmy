import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import "@/styles/globals/Header.scss";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";

interface Props {
  lang: Locale;
}

const Header: React.FC<Props> = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__mobile">
          <div className="header__logo">
            <Image
              src={"/hoanmy-logo2.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className="header__hamburger">HAM</div>
        </div>
        <div className="header__desktop">
          <div className="header__logo">
            <Image
              src={"/hoanmy-logo2.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-ul">
              <li className="header__nav-li">
                <Link className="header__nav-link" href={`/${lang}/company`}>
                  {dictionary["Header"].nav1}
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-link" href={`/${lang}/projects`}>
                  {dictionary["Header"].nav2}
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-link" href={`/${lang}/team`}>
                  {dictionary["Header"].nav3}
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-link" href={`/${lang}/news`}>
                  {dictionary["Header"].nav4}
                </Link>
              </li>
              <li className="header__nav-li">
                <Link className="header__nav-link" href={`/${lang}/careers`}>
                  {dictionary["Header"].nav5}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__lang-switcher">
            <LocaleSwitcher />
          </div>
        </div>
      </header>
      <section className="hero">
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
      </section>
    </div>
  );
};

export default Header;
