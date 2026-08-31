import { Page, StoreCta } from "../components";
import { guideBySlug } from "../data";
import { url } from "../site";

export default function GuidePage({ slug }: { slug: string }) {
  const g = guideBySlug(slug);
  return (
    <Page>
      <article className="prose">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={url("/")}>Home</a> <span aria-hidden="true">/</span>{" "}
          <a href={url("guides/")}>Guides</a>
        </nav>
        <h1>{g.title}</h1>
        <p className="lede">{g.intro}</p>
        {g.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}
        <p className="takeaway">{g.takeaway}</p>
        <div className="end-cta">
          <StoreCta small />
        </div>
      </article>
    </Page>
  );
}
