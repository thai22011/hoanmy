"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import Link from "next/link";
import "../styles/globals/Header.scss";
import { i18n } from "@/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <div>
      <ul className="lang-list">
        {i18n.locales.map((locale) => {
          return (
            <li className="lang-list__li" key={locale}>
              <Link
                className="lang-list__link"
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
