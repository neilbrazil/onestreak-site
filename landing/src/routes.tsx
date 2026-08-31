import type { ReactElement } from "react";
import { GUIDES } from "./data";
import { guideMeta, guidesIndexMeta, homeMeta, type PageMeta } from "./seo";
import Home from "./pages/Home";
import GuidesIndex from "./pages/GuidesIndex";
import GuidePage from "./pages/GuidePage";

export type Route = { meta: PageMeta; element: ReactElement };

/** privacy.html and terms.html are deliberately NOT routes. They are shipped
 *  verbatim from public/ because App Store Connect has those exact URLs
 *  registered against both subscription products — re-rendering them as
 *  /privacy/ and /terms/ would either move the URLs or duplicate the content. */
export const ROUTES: Route[] = [
  { meta: homeMeta(), element: <Home /> },
  { meta: guidesIndexMeta(), element: <GuidesIndex /> },
  ...GUIDES.map((g) => ({
    meta: guideMeta(g),
    element: <GuidePage slug={g.slug} />,
  })),
];
