import { APP, FAQ, GUIDES, type Guide } from "./data";
import { abs, APP_LIVE, APP_STORE_URL, SITE } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image: string;
  jsonld: unknown[];
};

const faqPage = (entries: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: entries.map((e) => ({
    "@type": "Question",
    name: e.q,
    acceptedAnswer: { "@type": "Answer", text: e.a },
  })),
});

const breadcrumbs = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

export const softwareApplication = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP.fullName,
  alternateName: APP.name,
  applicationCategory: "LifestyleApplication",
  operatingSystem: APP.minOS + " or later",
  url: SITE + "/",
  // installUrl is omitted until the app is actually on sale: pointing schema
  // at a URL that 404s is worse than omitting the field.
  ...(APP_LIVE ? { installUrl: APP_STORE_URL } : {}),
  // aggregateRating is deliberately omitted — a brand new app has no ratings
  // worth marking up, and Google discounts thin rating markup anyway.
  author: { "@type": "Person", name: APP.author },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free download. An optional OneStreak Pro subscription adds streak insights, the habit archive and widget styles.",
  },
});

const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP.fullName,
  url: SITE + "/",
});

export const homeMeta = (): PageMeta => ({
  path: "/",
  title: "OneStreak — One Habit Tracker with a Home Screen Widget",
  description:
    "Track a single habit and keep the streak alive by tapping a Home Screen widget once a day. No habit list, no account, works offline. Free on iPhone.",
  image: abs("assets/icon.png"),
  jsonld: [softwareApplication(), website(), faqPage(FAQ)],
});

export const guidesIndexMeta = (): PageMeta => ({
  path: "/guides/",
  title: "Habit Tracking Guides — OneStreak",
  description:
    "Practical guides on tracking a single habit: choosing it, logging it in one tap from a widget, and keeping the streak alive when you slip.",
  image: abs("assets/icon.png"),
  jsonld: [
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides/" },
    ]),
  ],
});

export const guideMeta = (g: Guide): PageMeta => ({
  path: `/guides/${g.slug}/`,
  title: `${g.metaTitle} — OneStreak`,
  description: g.description,
  image: abs("assets/icon.png"),
  jsonld: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      author: { "@type": "Person", name: APP.author },
      mainEntityOfPage: abs(`/guides/${g.slug}/`),
    },
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides/" },
      { name: g.title, path: `/guides/${g.slug}/` },
    ]),
  ],
});
