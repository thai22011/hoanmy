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
        <div className="ready__container">
          <h2 className="ready__title">{dictionary["Footer"].title}</h2>
          <p className="ready__text">{dictionary["Footer"].text}</p>
          <div className="ready__links-div">
            <a
              target="_blank"
              className="ready__link"
              href="https://forms.gle/7ZQ3CcVAtpmLPr6U8"
            >
              {dictionary["Footer"].button1}
            </a>
            <a
              target="_blank"
              className="ready__link ready__link--modifier"
              href="https://forms.gle/Y5wGyGLHjHvNh6ax8"
            >
              {dictionary["Footer"].button2}
            </a>
          </div>
        </div>
      </section>

      <footer className={` footer`}>
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
                <a target="_blank" href="https://www.facebook.com/hoanmyco.vn">
                  <Image
                    alt="facebook"
                    height={40}
                    width={40}
                    src={"/facebook.svg"}
                  />
                </a>

                <a target="_blank" href="https://www.tiktok.com/@hoanmyco.vn">
                  <Image
                    alt="tiktok"
                    height={40}
                    width={40}
                    src={"/tiktok.svg"}
                  />
                </a>
                <a target="_blank" href="https://instagram.com/hoanmyco.vn">
                  <Image
                    alt="instagram"
                    height={40}
                    width={40}
                    src={"/instagram.svg"}
                  />
                </a>

                {/* <Image
                  alt="linkedin"
                  height={40}
                  width={40}
                  src={"/linkedin.svg"}
                /> */}
              </div>
              <p className="footer__copy-text">
                Copyright <span>&copy;</span> 2025 Hoan My Construction Ltd.
              </p>
              <p className="footer__copy-text">All rights reserved</p>
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
                  <a
                    target="_blank"
                    className="footer__link"
                    href="https://drive.google.com/drive/folders/161j6dcrHBGhm31zk4xT8vQkda3iyUbB1?usp=sharing"
                  >
                    {dictionary["Footer"].qlink6}
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="footer__links"> */}
            {/* <h4 className="footer__heading">
                {dictionary["Footer"].heading2}
              </h4> */}
            {/* <ul className="footer__ul">
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
              </ul> */}
            {/* </div> */}
            <div className="footer__links">
              <h4 className="footer__heading">
                {dictionary["Footer"].heading3}
              </h4>
              <ul className="footer__ul">
                <li className="footer__li">
                  <p className="footer__link">+84 703.823.831</p>
                </li>
                <li className="footer__li">
                  <a className="footer__link" href="mailto:hoanmycovn@gmail.com">
                                                          hoanmycovn@gmail.com
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
