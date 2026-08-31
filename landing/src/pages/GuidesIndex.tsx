import { Page } from "../components";
import { GUIDES } from "../data";
import { url } from "../site";

export default function GuidesIndex() {
  return (
    <Page>
      <section className="hero hero--sm">
        <h1>Habit tracking guides</h1>
        <p className="lede">
          Short, practical pieces on tracking a single habit well — no filler,
          no listicles.
        </p>
      </section>
      <section className="band">
        <ul className="links">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <a href={url(`guides/${g.slug}/`)}>{g.title}</a>
              <span>{g.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
