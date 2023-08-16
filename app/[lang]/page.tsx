import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "@/components/counter";
import LocaleSwitcher from "@/components/locale-switcher";
import Link from "next/link";
import Image from "next/image";
import "./Home.scss";
import NewsSection from "@/components/NewsSection";
import { getNewsPreviews } from "@/sanity/sanity-functions";
import AboutUsSection from "@/components/AboutUsSection";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const news = await getNewsPreviews(lang);

  return (
    <>
      <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
        <Link href={`/${lang}/about`}>About</Link>
        <Link href={`/${lang}/contact`}>Contact</Link>
        <Counter dictionary={dictionary.counter} />
      </div>
      <main>
        Home page
        {/* --------ABOUT US SECTION---------- */}
        <section>
          <AboutUsSection dictionary={dictionary.HomePage.AboutUs} />
          <Image
            height={100}
            layout="responsive"
            alt="Construction"
            width={100}
            src={"/about1.jpg"}
          />
        </section>
        {/* -------NEWS SECTION---------- */}
        <NewsSection
          news={news}
          lang={lang}
          dictionary={dictionary.HomePage.News}
        />
        {/* ------COMMUNITY SECTION----- */}
        <section className="community">
          <Image
            className="community__image-mobile"
            layout="responsive"
            width={600}
            height={600}
            // unoptimized
            alt="image"
            src={"/community2.jpg"}
          />
          <Image
            className="community__image-desktop"
            layout="responsive"
            width={600}
            height={600}
            alt="image"
            src={"/community3.jpg"}
          />

          <div className="community__text-div">
            <h3 className="community__title">
              {dictionary["HomePage"].Community.title}
            </h3>
            <p className="community__text">
              {dictionary["HomePage"].Community.text}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
