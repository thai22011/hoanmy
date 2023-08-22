import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "@/components/Header";
import "./Team.scss";
import TeamSection from "@/components/TeamSection";
const TeamPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary.Header} />
      <main>
        <section className="hero-team">
          <div className="hero-team__wrapper">
            <h1 className="hero-team__heading">
              {dictionary.TeamPage.Intro.title}
            </h1>
            <div className="hero-team__red" />
          </div>
        </section>
        <section className="intro">
          <div className="intro__wrapper">
            <h2 className="intro__heading">
              {dictionary.TeamPage.Intro.heading}
            </h2>
            <p className="intro__text">{dictionary.TeamPage.Intro.text}</p>
          </div>
        </section>
        <TeamSection dictionary={dictionary.TeamPage} />
      </main>
    </>
  );
};

export default TeamPage;
