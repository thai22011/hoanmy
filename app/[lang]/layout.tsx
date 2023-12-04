import Footer from "@/components/Footer";
import { Locale, i18n } from "../../i18n-config";
import { Kanit } from "next/font/google";
import "../../styles/globals/globals.scss";
import Header from "@/components/Header";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
const kanit = Kanit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "vietnamese"],
});

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={kanit.className}>
        {children}

        <Footer locale={params.lang} />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Hoan My Construction",
  description: "Building for today, for tomorrow, for everyone.",
};
