"use client";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n-config";
import "@/styles/globals/Header.scss";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";

interface Props {
  lang: Locale;
  dictionary: any;
}

const Header: React.FC<Props> = ({ dictionary, lang }) => {
  const path = usePathname();

  return (
    <header
      className={
        path === "/en" || path === "/vn" ? "header header--home" : "header"
      }
    >
      <div className="header__mobile">
        <Link
          href={`/${lang}`}
          className={
            path === "/en" || path === "/vn"
              ? " header__logo--home"
              : "header__logo"
          }
        >
          <Image
            src={"/hoanmy-logo2.png"}
            width={100}
            height={100}
            alt="logo"
            layout="responsive"
          />
        </Link>
        <div className="header__hamburger">HAM</div>
      </div>
      <div className="header__desktop">
        <Link
          href={`/${lang}`}
          className={
            path === "/en" || path === "/vn"
              ? " header__logo--home"
              : "header__logo"
          }
        >
          <Image
            src={"/hoanmy-logo2.png"}
            width={100}
            height={100}
            alt="logo"
            layout="responsive"
          />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/company")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/company`}
              >
                {dictionary.nav1}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/projects")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/projects`}
              >
                {dictionary.nav2}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/team")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/team`}
              >
                {dictionary.nav3}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/news")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/news`}
              >
                {dictionary.nav4}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link className="header__nav-link" href={`/${lang}/careers`}>
                {dictionary.nav5}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__lang-switcher">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
