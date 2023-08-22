import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import Header from "@/components/Header";
import "./Company.scss";

const CompanyPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero-company">
          <div className="hero-company__wrapper">
            <h1 className="hero-company__heading">
              {dictionary.CompanyPage.Intro.title}
            </h1>
            <div className="hero-company__red" />
          </div>
        </section>
        <section className="intro">
          <div className="intro__wrapper">
            <h2 className="intro__heading">
              {dictionary.CompanyPage.Intro.heading}
            </h2>
            <p className="intro__text">{dictionary.CompanyPage.Intro.text}</p>
          </div>
        </section>
        <section className="content">
          <div className="content__wrapper">
            <div className="content__image-div">
              <Image
                alt="image 2"
                layout="responsive"
                width={100}
                height={100}
                src={"/company2.png"}
              />
            </div>

            <div className="content__text-div">
              <h3 className="content__heading">
                {dictionary.CompanyPage.Section1.heading}
              </h3>
              <h4 className="content__subheading">
                {dictionary.CompanyPage.Section1.subheading}
              </h4>
              <div className="content__inner-div">
                <p className="content__text">
                  {dictionary.CompanyPage.Section1.text1}
                </p>
                <p className="content__text">
                  {dictionary.CompanyPage.Section1.text2}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="content__wrapper content__wrapper--middle">
            <div className="content__image-div">
              <Image
                alt="image 1"
                layout="responsive"
                width={100}
                height={100}
                src={"/company1.png"}
              />
            </div>
            <div className="content__text-div">
              <h3 className="content__heading">
                {dictionary.CompanyPage.Section2.heading}
              </h3>
              <h4 className="content__subheading">
                {dictionary.CompanyPage.Section2.subheading}
              </h4>
              <p className="content__text">
                {dictionary.CompanyPage.Section2.text}
              </p>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="content__wrapper">
            <div className="content__image-div">
              <Image
                alt="image 1"
                layout="responsive"
                width={100}
                height={100}
                src={"/company3.png"}
              />
            </div>
            <div className="content__text-div">
              <h3 className="content__heading">
                {dictionary.CompanyPage.Section3.heading}
              </h3>
              <h4 className="content__subheading">
                {dictionary.CompanyPage.Section3.subheading}
              </h4>
              <p className="content__text">
                {dictionary.CompanyPage.Section3.text}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CompanyPage;
