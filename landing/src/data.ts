/** All site copy lives here. Pages are dumb; this file is the content.
 *
 *  Keyword targeting comes from the Astro research run on 2026-08-30: the
 *  App Store phrase "one habit tracker" had four near-identical competitors,
 *  all on 0-1 ratings, so the niche is real but unclaimed. Web search is the
 *  channel that does not depend on Apple's ranking, and these guides target
 *  the long-tail questions behind that phrase rather than the phrase alone. */

export type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  takeaway: string;
};

export const APP = {
  name: "OneStreak",
  fullName: "OneStreak — One Habit Tracker",
  tagline: "One habit. One streak. Nothing else competing.",
  author: "Neil Brazil",
  minOS: "iOS 18",
  price: "Free",
};

export const HERO = {
  h1: "The habit tracker that only tracks one habit",
  sub:
    "Pick the single habit that actually matters and keep the chain alive by tapping a Home Screen widget once a day. No list to maintain, no second habit competing for your attention.",
};

export const FEATURES: { h: string; p: string }[] = [
  {
    h: "One habit, on purpose",
    p: "Most habit trackers hand you a list and let you add fifteen things you will abandon by Thursday. OneStreak lets you track exactly one. That constraint is the product, not a limitation.",
  },
  {
    h: "Log it from the Home Screen",
    p: "Tap the widget once a day. The streak goes up without the app ever opening — the fastest possible path between deciding to log and having logged.",
  },
  {
    h: "A chain you can see",
    p: "A 35-day heatmap shows the run you have built. Seeing an unbroken block of days is the whole psychological trick, and it is on the first screen.",
  },
  {
    h: "One slip does not wipe the slate",
    p: "A same-day grace period means missing today does not instantly reset months of progress. You have until the day ends to keep the streak alive.",
  },
  {
    h: "Rename without losing anything",
    p: "Made a typo at setup, or want to word the habit differently? Rename it any time and the streak and full history carry over untouched. That is free, not a paid feature.",
  },
  {
    h: "Your data stays on your device",
    p: "No account, no sign-in, no sync, no ads. Everything is stored locally on your iPhone and works with the network off.",
  },
];

export const PRO = {
  h: "OneStreak Pro",
  p: "The free app is the whole core: pick a habit, tap to log, watch the streak, forever. Pro adds three things for people who want more from the history they are building.",
  points: [
    "Streak insights — longest streak and completion rate over time",
    "Habit archive — switch to a different habit while every past streak stays saved with its stats",
    "Widget styles — change the widget's accent colour",
  ],
  pricing: "$2.99 / month, or $14.99 / year with a 3-day free trial.",
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Is OneStreak free?",
    a: "Yes. Picking a habit, logging it from the widget, your streak count and the 35-day heatmap are all free with no time limit and no ads. OneStreak Pro is an optional subscription that adds streak insights, the habit archive and widget styles.",
  },
  {
    q: "Can I track more than one habit?",
    a: "No, and that is deliberate. OneStreak tracks exactly one habit. If you want a list of habits there are excellent apps for that — this one is built on the opposite bet, that a single visible streak beats a long list of good intentions.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up, no login and no server. Your habit and its history are stored locally on your iPhone.",
  },
  {
    q: "Can I change my habit later without losing my streak?",
    a: "You can rename your habit at any time and keep the streak and every logged day — that is free. Switching to a genuinely different habit archives the old one with its full history and starts a new streak from zero; that is part of Pro.",
  },
  {
    q: "What happens if I miss a day?",
    a: "There is a same-day grace period: a streak stays alive until the day fully elapses, so you have until the end of the day to log it. Miss a whole day and the streak resets, which is the point of a streak.",
  },
  {
    q: "Does the widget work without opening the app?",
    a: "Yes. The whole widget face is a button. Tapping it logs today and updates the streak without launching OneStreak at all.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Everything except the optional subscription purchase works with no network connection.",
  },
];

export const GUIDES: Guide[] = [
  {
    slug: "how-to-track-one-habit",
    title: "How to track one habit and actually stick to it",
    metaTitle: "How to Track One Habit (And Actually Stick To It)",
    description:
      "Tracking one habit beats tracking ten. Here is how to choose the habit, make logging frictionless, and keep the streak alive when motivation runs out.",
    intro:
      "Most people who fail at habit tracking do not fail at the habit. They fail at the tracking — because they set up eight of them at once and the whole system collapses the first busy week.",
    sections: [
      {
        h: "Choose the habit you would keep if you could only keep one",
        p: [
          "The test is uncomfortable but useful: if every habit you are considering vanished except one, which would you protect? That is the one to track. Everything else is a candidate for later, once this one has stopped requiring willpower.",
          "Pick something you can complete on your worst day, not your best. \"Read one page\" survives a bad week. \"Read for an hour\" does not, and a streak that dies in week two teaches you nothing.",
        ],
      },
      {
        h: "Make logging take under two seconds",
        p: [
          "Every extra step between doing the habit and recording it is a chance to skip recording it. Opening an app, finding a row, tapping a checkbox and closing the app is four steps too many.",
          "A Home Screen widget you tap once collapses that to a single action you can do without leaving the screen you were already on. OneStreak is built entirely around that one tap.",
        ],
      },
      {
        h: "Let the chain do the motivating",
        p: [
          "Once a streak is a few weeks old, it starts defending itself. The reluctance to break a visible run of days is a stronger daily motivator than any reminder notification, which is why the streak count and the heatmap are the first things OneStreak shows you.",
          "This only works if the run is genuinely visible. A number buried three taps deep does not create the same pull as one on your Home Screen.",
        ],
      },
      {
        h: "Plan for the day you miss",
        p: [
          "You will miss a day eventually. What matters is whether the system treats that as a total reset or a blip. A same-day grace period — where the streak survives until the day fully ends — removes the panic of a late log without pretending the miss did not happen.",
          "If a streak does break, restart it the same day. The people who keep habits are not the ones who never miss; they are the ones who never miss twice.",
        ],
      },
    ],
    takeaway:
      "One habit, chosen so you can do it on a bad day, logged in a single tap, with the streak somewhere you cannot avoid seeing it.",
  },
  {
    slug: "habit-tracker-widget-iphone",
    title: "Using a Home Screen widget to track a habit on iPhone",
    metaTitle: "Habit Tracker Widget for iPhone: Log Without Opening the App",
    description:
      "An interactive iPhone widget lets you log a habit with one tap and never open the app. Here is how it works, how to add one, and why it beats reminders.",
    intro:
      "Since iOS 17, Home Screen widgets can respond to taps directly. For habit tracking that changes the shape of the whole problem: the log action can live on your Home Screen instead of inside an app.",
    sections: [
      {
        h: "Why the widget matters more than the app",
        p: [
          "The hard part of habit tracking is not the interface — it is the friction between finishing the habit and recording it. An app you must open, however well designed, adds that friction every single day.",
          "An interactive widget removes it. You unlock your phone, tap once, and the streak is updated. There is no screen to navigate and nothing to close afterwards.",
        ],
      },
      {
        h: "How to add the OneStreak widget",
        p: [
          "Touch and hold an empty area of your Home Screen until the icons jiggle, tap Edit, then Add Widget. Search for OneStreak and add the small widget.",
          "The whole widget face is the button. Tapping it logs today, turns the flame into a checkmark and increments the streak count — without launching the app.",
        ],
      },
      {
        h: "Why it beats a reminder notification",
        p: [
          "Reminders interrupt you at a time you chose weeks ago, which is rarely the moment you can act. Most get dismissed, and dismissing them repeatedly trains you to ignore the app.",
          "A widget is passive. It sits where you already look, showing the streak you have built, and it is there at whatever moment you actually finish the habit.",
        ],
      },
    ],
    takeaway:
      "If you only change one thing about how you track a habit, move the log action onto your Home Screen.",
  },
  {
    slug: "dont-break-the-chain",
    title: "Don't break the chain: why streaks work",
    metaTitle: "Don't Break the Chain: Why Habit Streaks Actually Work",
    description:
      "The \"don't break the chain\" method turns a habit into a run of days you are reluctant to end. Here is why it works and where it goes wrong.",
    intro:
      "The method is old and almost embarrassingly simple: do the thing, mark the day, and try not to break the run of marks. Its power is that it replaces a vague intention with a visible object you can lose.",
    sections: [
      {
        h: "Loss aversion, pointed at something useful",
        p: [
          "People work harder to avoid losing something than to gain something of equal value. A streak converts an abstract goal into a possession — and once a run is long enough, protecting it becomes its own daily motivation.",
          "That is why the number matters. \"I meditated 12 times this month\" is a statistic. \"I have a 127-day streak\" is something you own and can drop.",
        ],
      },
      {
        h: "Where the method goes wrong",
        p: [
          "Chains break, and a system that treats a single missed day as total failure invites you to abandon the whole thing. The all-or-nothing framing is what makes people quit in month two rather than restart on day 43.",
          "A grace period helps: if the streak survives until the day fully ends, a late log is not a catastrophe. So does keeping the history after a break, so a broken run still shows as weeks of real work rather than vanishing.",
        ],
      },
      {
        h: "Why one chain beats several",
        p: [
          "Running eight chains at once guarantees one breaks most weeks, and a permanently broken chain stops meaning anything. The signal degrades into noise.",
          "A single chain stays legible. There is one number, it is either intact or it is not, and you always know where you stand without reading a dashboard.",
        ],
      },
    ],
    takeaway:
      "Streaks work because they give you something to lose. Keep one chain, keep it visible, and make sure a single slip does not erase the history.",
  },
  {
    slug: "one-habit-vs-habit-list",
    title: "Why one habit beats a list of fifteen",
    metaTitle: "One Habit vs a Habit List: Why Tracking Less Works Better",
    description:
      "Habit apps encourage you to add everything at once. Tracking a single habit is less satisfying to set up and far more likely to survive.",
    intro:
      "Setting up a habit tracker is enjoyable. You add meditation, water, reading, stretching, journalling — and the setup itself feels like progress. That feeling is the problem.",
    sections: [
      {
        h: "Setup is not progress",
        p: [
          "Adding a habit costs nothing and delivers a small hit of accomplishment, so people add far more than they can sustain. The list becomes a monument to intentions rather than a record of behaviour.",
          "Within a fortnight most rows are red. At that point opening the app means looking at evidence of failure, so you stop opening it.",
        ],
      },
      {
        h: "Attention is the scarce resource",
        p: [
          "You do not have a willpower budget spread evenly across fifteen behaviours. In practice one or two get real attention and the rest are noise competing for the same glance.",
          "Removing the others is not a loss. It is a decision about which one actually matters this month, made once, deliberately.",
        ],
      },
      {
        h: "Add the second habit later, if at all",
        p: [
          "The point of tracking is to make a behaviour automatic enough that tracking stops being necessary. When that happens, the slot frees up.",
          "That is a far better sequence than starting eight at once and keeping none — and it is why OneStreak has no way to add a second habit at all.",
        ],
      },
    ],
    takeaway:
      "Tracking one habit is less fun to set up and much more likely to still be running in three months.",
  },
];

export const guideBySlug = (slug: string) =>
  GUIDES.find((g) => g.slug === slug)!;
