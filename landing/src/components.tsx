import type { ReactNode } from "react";
import { APP } from "./data";
import { APP_LIVE, APP_STORE_URL, SUPPORT_EMAIL, url } from "./site";

/** Until the app is approved this renders as a non-link note rather than a
 *  dead App Store URL. See APP_LIVE in site.ts. */
export function StoreCta({ small }: { small?: boolean }) {
  const cls = small ? "cta cta--sm" : "cta";
  if (!APP_LIVE) {
    return (
      <span className={`${cls} cta--pending`} role="note">
        Coming to the App Store
      </span>
    );
  }
  return (
    <a
      className={cls}
      href={APP_STORE_URL}
      aria-label={`Download ${APP.name} on the App Store`}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.6zM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"
        />
      </svg>
      Download on the App Store
    </a>
  );
}

export function Header() {
  return (
    <header className="site-head">
      <a className="brand" href={url("/")}>
        <img
          src={url("assets/icon.png")}
          alt=""
          width={36}
          height={36}
          className="brand-mark"
        />
        <span>{APP.name}</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href={url("/#features")}>Features</a>
        <a href={url("guides/")}>Guides</a>
        <a href={url("/#faq")}>FAQ</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <nav aria-label="Footer">
        <a href={url("/")}>Home</a>
        <a href={url("guides/")}>Guides</a>
        <a href={url("privacy.html")}>Privacy Policy</a>
        <a href={url("terms.html")}>Terms of Use</a>
        <a href={`mailto:${SUPPORT_EMAIL}`}>Support</a>
      </nav>
      <p>
        {APP.fullName} is made by {APP.author}. Not affiliated with Apple Inc.
        App Store is a trademark of Apple Inc.
      </p>
    </footer>
  );
}

/** The flame mark, drawn rather than loaded, so the hero needs no screenshot
 *  asset to look finished. */
export function Flame({ size = 96 }: { size?: number }) {
  return (
    <svg
      className="flame"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M50 6c4 18 22 24 22 44a22 22 0 0 1-44 0c0-9 5-14 8-20 2 6 6 8 9 8-3-10 1-24 5-32z"
      />
    </svg>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="band">
      <h2>Common questions</h2>
      <dl className="faq">
        {items.map((f) => (
          <div key={f.q}>
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
