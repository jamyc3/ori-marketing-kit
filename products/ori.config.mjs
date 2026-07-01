// Ori — marketing config. Single source of truth for the generated package.
// Reproduces the live ori-app.ideaflow.page homepage, plus the new /oura/ and
// /journal-prompts/ surfaces, ASO copy, launch drafts, and the SEO checklist.

const APP = "https://apps.apple.com/app/id6774742321";
const DOMAIN = "ori-app.ideaflow.page";
const HOME = `https://${DOMAIN}/`;

// single-leaf mark, placed over the 'r' of Ori
const LEAF = ["M59 16 C 40 44, 36 78, 50 106 C 74 82, 82 46, 59 16 Z", "M50 106 C 54 74, 56 44, 59 16"];

export default {
  name: "Ori",
  domain: DOMAIN,
  appStoreUrl: APP,
  appStoreId: "6774742321",
  operatingSystem: "iOS",
  category: "journal",
  oneLiner: "The journal that writes back.",
  schemaDescription:
    "A reflective journal that writes back. Talk or write a few lines about your day and Ori reads them back to you each evening as a short, honest letter — gently, and only from what you share. Works with Oura and Apple Health, or with just your words. Free and private; your journal stays on your device.",

  brand: {
    serif: "ui-serif,'New York','Iowan Old Style',Georgia,serif",
    meta: "-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
    night: "#0E120D", night2: "#10160E", panel: "#161C13", ink: "#F1ECDF", soft: "#CFC9B8", faint: "#7C8070",
    sage: "#A8C58B", amber: "#CBA85B", clay: "#C76C42", line: "rgba(168,197,139,.16)",
    screen: "#ECE4D4", paper: "#F3ECDD", paperHi: "#F8F2E6", pink: "#1A1A1A", pmuted: "#6F695E", phair: "rgba(26,26,26,.10)",
    forest: "#1B2417", sageDk: "#5F7F5F",
    ctaInk: "#16210F", bezel: "#050605",
    glowTriple: "168,197,139", glow2Triple: "157,190,130", amberGlowTriple: "203,168,91",
    heroTop: "#0C0F0A", heroMid: "#10160E", heroBot: "#0A0D08",
    showTop: "#0E120D", showMid: "#141A11", friendMid: "#12180F",
    lockup: { pre: "O", mark: "r", post: "i", markPaths: LEAF, strokeWidth: 8 }
  },

  verification: {
    gscTag: "w-xTfY9uJpZWyI4G8axNmXxz4Bdj-BzxsVmJhg3oZog",
    bingTag: "", // TODO: add msvalidate.01 from Bing Webmaster Tools (Import from GSC), then redeploy
    goatcounter: "orioura" // GoatCounter site code → emits the count.js snippet in <head>; live on ori-app since 2026-06-30
  },

  meta: {
    title: "Ori — the friend who writes back",
    description:
      "At the end of the day, Ori listens — to your words and how your body's really doing — and writes you a letter back. The friend you never had. Free, private, for everyone.",
    ogTitle: "Ori — the friend who writes back",
    ogDesc:
      "Tell Ori about your day. Each evening it writes you a letter back — gently, only from what you share. Free, private, and it never leaves your phone.",
    twitterDesc: "The journal that writes back. Free, private, and it never leaves your phone."
  },

  og: { tag: "The friend who writes back.", sub: "body and mind, read back to you · free", bgTop: "#161D12", bgBot: "#0A0D08", markStroke: "#A8C58B" },

  assets: { shotsDir: "../website/brand/shots", logo: "icon-512.png" },

  nav: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Why Ori", href: "#friend" },
      { label: "Privacy", href: "#honest" }
    ],
    github: "https://github.com/jamyc3/ori-marketing-kit",
    cta: { label: "Get Ori", href: APP }
  },

  hero: {
    kicker: "Free · private · for everyone",
    h1: "The friend you never had at the end of the day.",
    sub: "Tell Ori about your day — out loud or in a few words. It listens, notices what you'd miss, and writes you back every evening. For anyone who's never had someone to tell it to.",
    ctaPrimary: { label: "Meet Ori — free", href: APP },
    ctaGhost: { label: "See how it works", href: "#how" },
    fine: "Free, always — and it never leaves your phone.",
    letter: {
      date: "Some evening, soon",
      salutation: "Dear you,",
      lines: [
        { t: "You wrote tonight the way someone writes when the day has finally let go — short sentences, no performance." },
        { t: "\n\nThe morning belonged to " }, { t: "the planner", ref: 1 }, { t: ": three lists before nine, the calendar already argued with." },
        { t: "\n\nMid-afternoon, something softer. The walk home shows up in your words again." },
        { t: "\n\nNone of this is a verdict. It's just today — set down, and read back." }
      ]
    }
  },

  story: {
    h2: 'Most days end the way they began — <span class="accent">unheard.</span>',
    p: "You meant to write it down. You meant to call someone. The day just closed. Ori is the friend who was paying attention anyway — it remembers what you said, notices what your body carried, and every evening it writes you back. Not advice. Not a score. Just you, understood."
  },

  showcase: {
    kicker: "what it feels like",
    h2: "Somewhere quiet that's only yours.",
    lede: "Your evening letter, the patterns in your days, and your own words — kept gently, in one calm place.",
    shots: [
      { cls: "left", src: "shots/patterns.png", alt: "Patterns" },
      { cls: "right", src: "shots/journal.png", alt: "Journal" },
      { cls: "center", src: "shots/letter.png", alt: "Your evening letter" }
    ]
  },

  friend: {
    kicker: "why Ori",
    h2: "Everything a friend would. Nothing an app usually does.",
    lede: "A blank page can't do these. Ori can.",
    cards: [
      { h3: "It listens to your body, not just your words.", p: "Ori sets what you wrote beside how you slept and how much you had to give — so the day you <em>felt</em> and the day you actually <em>had</em> finally meet on the same page." },
      { h3: "It writes the entry — you don't.", p: "Instead of a blank page waiting on you, a letter waits <em>for</em> you each night, composed from your own day, in plain and gentle words." },
      { h3: "It helps you find your own north star.", p: "Over time it reflects the patterns in your days back to you — from your real life, nothing invented — so you can see where you're heading, by your own light." },
      { h3: "It's always there — and always free.", p: "No cost, no account, no one watching. Ori is for everyone — especially anyone who's never had a journal, a quiet hour, or a friend to tell it to." }
    ]
  },

  how: {
    kicker: "how it works",
    h2: "Three quiet steps, once a day.",
    beats: [
      { when: "First", h3: "Set the day down", p: "Talk or type a few lines — whatever's on your mind. A minute is enough." },
      { when: "Then", h3: "Ori listens", p: "It reads your words alongside your sleep and energy, if you connect a wearable. Nothing guessed; every number shown." },
      { when: "Each night", h3: "A letter arrives", p: "After the evening settles, Ori writes back — honest, gentle, and only from what you shared." }
    ],
    pillars: [
      { h3: "Reflection, not treatment", p: "Ori is not a medical tool and never makes a clinical claim. It mirrors your own words and data back — nothing diagnosed, nothing prescribed." },
      { h3: "It never leaves your phone", p: "Your journal lives on your device — not on a server somewhere. Nothing is sold, nothing is shared, no one is reading over your shoulder. You choose what Ori sees, and you can turn any of it off." }
    ]
  },

  faq: {
    kicker: "ask Ori anything",
    h2: "Questions, answered — honestly.",
    faqs: [
      { q: "Is Ori really free?", a: "Yes — completely. No subscription, no account, no ads. Ori is free because being understood at the end of the day shouldn't be a luxury." },
      { q: "Is it private? Does my journal leave my phone?", a: "It stays on your phone. Your journal lives on your own device, not on a server. Nothing is sold, nothing is shared, and no one is reading over your shoulder. You choose what Ori sees, and you can turn any of it off." },
      { q: "What does Ori actually do?", a: "You talk or write a few lines about your day. Each evening, Ori reads them back to you as a short, honest letter — gently, and only from what you shared." },
      { q: "Do I need an Apple Watch or a wearable?", a: "No. Ori works with just your words. If you connect a wearable, it can also reflect your sleep and energy back to you — but it never guesses, and every number is shown." },
      { q: "Does Ori work with my Oura ring?", a: "Yes. Ori can read your Oura sleep and readiness — and Apple Health — and reflect them back to you in plain words, so the numbers finally mean something. No Oura ring? Ori works with just your words, free." },
      { q: "Is Ori therapy or a medical app?", a: "No. Ori is for reflection, not treatment. It is not a medical tool and never makes a clinical claim or a diagnosis — it simply mirrors your own words and patterns back to you." },
      { q: "Do I have to write every day?", a: "No. There are no streaks, no scores, and no guilt for a missed day. Ori isn't a habit to keep up — it's simply there whenever you come back." },
      { q: "Can I speak instead of type?", a: "Yes. You can talk your day out loud or write it down — whichever feels easier in the moment." },
      { q: "Who is Ori for?", a: "Anyone who wants to understand their days — especially people who've never had a journal, a quiet hour, or someone to tell it to." },
      { q: "Does Ori tell me what to do?", a: "No. It reflects your own words and patterns back so you can find your own direction — your north star. It never prescribes, ranks, or scores you." }
    ]
  },

  closing: {
    h2: "Everyone deserves a friend like this.",
    p: "Free, always. No account, no one watching. Make space to set the day down.",
    cta: { label: "Meet Ori — free", href: APP }
  },

  // Rendered on the home page between the FAQ and the closing — a real person,
  // in the product's own voice. Trust without testimonials-we-don't-have-yet.
  founder: {
    kicker: "a note from the maker",
    text: "I built Ori because the nights I most needed to set the day down were exactly the nights I had nothing left for a blank page. So I made the friend I kept wishing for — one that listens first, writes back, and keeps it between us. It's free because I don't think being understood should be a luxury.",
    signature: "— Vineet, who still tells Ori about most of his evenings"
  },

  // Opt-in email capture rendered on every generated page → posts to the feedback
  // endpoint (version=waitlist); signups show at ori-feedback.ideaflow.page.
  signup: {
    endpoint: "https://talk-to-me.ideaflow.page/proxy/feedback",
    heading: "Stay in the loop",
    sub: "An occasional, quiet note about Ori — new features, gently. No spam, and you can leave anytime.",
    placeholder: "you@email.com",
    button: "Notify me"
  },

  footer: {
    // Cross-links every content surface from every page (kills orphan pages).
    explore: [
      { label: "Ori for Oura", href: `${HOME}oura/` },
      { label: "Ori for Apple Health", href: `${HOME}apple-health/` },
      { label: "Voice journal", href: `${HOME}voice-journal/` },
      { label: "Private journal", href: `${HOME}private-journal/` },
      { label: "Journaling prompts", href: `${HOME}journal-prompts/` },
      { label: "Ori vs Day One", href: `${HOME}vs-day-one/` },
      { label: "Ori vs Stoic", href: `${HOME}vs-stoic/` }
    ],
    links: [
      { label: "Privacy", href: `${HOME}privacy.html` },
      { label: "Support", href: `${HOME}support.html` },
      { label: "Open source", href: "https://github.com/jamyc3/ori-marketing-kit" }
    ],
    crisis: { text: "In crisis?", linkLabel: "Get help now", href: "https://988lifeline.org" }
  },

  aso: {
    schemaCategory: "LifestyleApplication",
    title: "Ori: Journal That Writes Back",
    subtitle: "A letter back, every evening",
    keywords: ["journal", "diary", "voice journal", "reflection", "gratitude", "mood", "wellbeing", "private", "mindfulness", "self care", "oura", "no ai", "free journal"],
    promo: "Tell Ori about your day. Each evening it writes you a short, honest letter back — free, private, and it never leaves your phone.",
    description:
      "Ori is a journal that writes back.\n\nTalk or write a few lines about your day. Each evening, Ori reads them back to you as a short, honest letter — gently, and only from what you shared. No blank page, no streaks, no scores.\n\n• Writes the entry for you — a letter, not an empty page\n• Works with just your words, or with Oura and Apple Health\n• Reflection, not treatment — never a clinical claim, every number shown\n• Free, with no account and no ads\n• Private by design — your journal stays on your device\n\nFor anyone who's never had a journal, a quiet hour, or someone to tell it to.",
    screenshots: ["Your evening letter", "The patterns in your days", "Speak or type — a minute is enough", "It never leaves your phone", "Free, always"],
    categories: ["Health & Fitness", "Lifestyle"]
  },

  launch: {
    why: "I wanted the journal that writes back — something that listens at the end of the day and hands you a letter, free, without taking your data.",
    differentiators: [
      "Writes the entry for you — a letter, not a blank page",
      "Reads your body (Oura / Apple Health), not just your words — or just your words",
      "Reflection, not treatment — every number shown, nothing invented",
      "Free, private, and it never leaves your phone"
    ],
    hnBody: "Ori is a journal that writes back. You talk or type a few lines about your day; each evening it composes a short letter from your own words (and, optionally, your Oura/Apple Health signals). It's free and the journal stays on-device.",
    hnTech: ["On-device storage — the journal never leaves the phone", "How the evening letter is composed from your own entries only", "Why it's free and what the privacy model is"],
    targetSubreddits: [
      { sub: "Journaling", title: "I built a free journal that writes you a letter back each evening", body: "The hardest part of journaling for me was the blank page, so I made something that writes the entry from a few lines I speak or type. It's free and stays on my phone. Genuinely after feedback from people who journal regularly — what would make it stick?" },
      { sub: "ouraring", title: "Free app that turns your Oura sleep/readiness into a plain-words letter each evening", body: "Made a free, on-device app that reads your Oura sleep and readiness and writes back what it meant for your day in plain words — not another dashboard. Works without a ring too. Would love feedback from ring owners." },
      { sub: "AppleWatch", title: "Free app that turns your Apple Health sleep/activity into a plain-words letter each evening", body: "Your watch collects all this sleep and activity data you never really read. I made a free, on-device app that sets those signals beside a few lines about your day and writes you back a short letter in plain words — not another dashboard. Works without a watch too. Curious what watch owners think." },
      { sub: "selfimprovement", title: "I kept failing at journaling, so I made one that writes the entry for me", body: "Every journaling streak I started died on the blank page. So I built something where you just speak or type a few lines and it writes you back a short, honest letter each evening — no streaks, no scores, no guilt for a missed day. Free and on-device. Would love feedback on whether the no-pressure approach actually helps you stick with it." },
      { sub: "privacy", title: "A journaling app that keeps your entries on-device — no account, no cloud", body: "Most journal apps quietly store your entries on their servers behind an account. I built one that keeps everything on your phone — no account, nothing sold, nothing shared — and it still writes you a reflective letter each evening from your own words. Free. Happy to talk through the on-device model and what it does/doesn't touch." }
    ],
    // Editors of \"best journaling apps\" roundups — outreach for backlinks (see GO-LIVE doc).
    roundupTargets: [
      "Zapier — \"best journaling apps\" listicle",
      "Tom's Guide / TechRadar — best journal & wellbeing apps",
      "Lifehacker — journaling app roundups",
      "The Sweet Setup — best iOS journaling app",
      "MacStories / 9to5Mac — notable new iOS apps",
      "r/ouraring + r/AppleWatch wiki/app lists (mod-curated)"
    ]
  },

  // ---- sub-pages -----------------------------------------------------------
  pages: [
    {
      slug: "oura",
      title: "Ori for Oura — your ring, finally in plain words",
      description: "Ori reads your Oura sleep and readiness and writes them back to you each evening in plain words — free, private, on your phone. No Oura ring? Ori works with just your words.",
      ogTitle: "Ori for Oura — your ring, in plain words",
      ogDesc: "Oura gives you the numbers. Ori tells you what they meant for your day — a short, honest letter each evening. Free and on-device.",
      schema: ["software", "faq"],
      hero: {
        kicker: "works with Oura · free",
        h1: "Your Oura ring, finally in plain words.",
        sub: "Oura gives you the numbers. Ori tells you what they meant for your day — a short, honest letter each evening that sets your sleep and readiness beside what you actually lived. Free, and it never leaves your phone.",
        ctaPrimary: { label: "Get Ori — free", href: APP },
        ctaGhost: { label: "How it works", href: HOME + "#how" },
        fine: "No Oura ring? Ori still works with just your words — free."
      },
      sections: [
        { type: "prose", html: `<h3>The ring measures. Ori means.</h3>
<p>You already know your readiness was 64. What you don't always know is what to <em>do</em> with that — or why today felt the way it did. Ori reads your Oura sleep and readiness, sets them beside the few lines you wrote, and writes you back in plain language: not a score, not advice, just your day understood.</p>
<h3>What Ori adds to your ring</h3>
<ul>
<li><strong>Plain words, not another dashboard.</strong> Your sleep and readiness, translated into a sentence you'd actually say to a friend.</li>
<li><strong>Your body next to your day.</strong> The night you slept badly, beside the day you called hard — finally on the same page.</li>
<li><strong>Every number shown, nothing invented.</strong> Ori never guesses past your data, and never makes a clinical claim.</li>
<li><strong>Free and on-device.</strong> No subscription, and your journal — and your Oura data — stay on your phone.</li>
</ul>` },
        { type: "why", kicker: "ori + oura", h2: "A meaning-layer on top of the ring.", cards: [
          { h3: "Reads your Oura sleep & readiness", p: "Ori pulls the same signals you check each morning and reflects them back in words — what the night gave you, and what it didn't." },
          { h3: "Writes the evening letter for you", p: "No blank page. A short, honest note composed from your day and your ring, waiting each night." },
          { h3: "Works without a ring too", p: "Don't have an Oura? Ori still works with just your words — and with Apple Health if you'd rather. Always free." }
        ] },
        { type: "faq", kicker: "oura + ori", h2: "Oura questions, answered.", faqs: [
          { q: "Does Ori work with my Oura ring?", a: "Yes. Ori reads your Oura sleep and readiness and reflects them back to you in plain words each evening, so the numbers finally mean something for your day." },
          { q: "Do I need an Oura ring to use Ori?", a: "No. Ori works with just your words, and with Apple Health if you connect it. The Oura ring simply adds your sleep and readiness to the picture." },
          { q: "Is Ori free if I have an Oura subscription?", a: "Yes. Ori is completely free and separate from Oura — no extra subscription, no account, no ads." },
          { q: "Does my Oura data leave my phone?", a: "No. Your Oura data and your journal stay on your device. Nothing is sold or shared, and you can turn any data source off." },
          { q: "Does Ori replace Oura?", a: "No — it completes it. Oura measures; Ori tells you, gently and honestly, what it meant for the day you actually lived." }
        ] }
      ],
      closing: {
        h2: "Your ring already knows. Let Ori tell you.",
        p: "Free, private, and it never leaves your phone. Works with Oura, Apple Health, or just your words.",
        cta: { label: "Get Ori — free", href: APP }
      }
    },
    {
      slug: "journal-prompts",
      title: "What to write when you don't know what to journal — 30 honest prompts",
      description: "Stuck on the blank page? 30 simple journaling prompts for when you don't know what to write — plus an easier way: let Ori start the entry for you. Free.",
      ogTitle: "What to write when you don't know what to journal",
      ogDesc: "30 simple prompts for the blank page — and a gentler option that writes the first draft for you. Free.",
      schema: ["faq"],
      hero: {
        kicker: "free journaling prompts",
        h1: "What to write when you don't know what to write.",
        sub: "The hardest part of journaling is the blank page. Here are simple prompts that actually get you started — and a gentler option: Ori writes the first draft from your day, so you're never staring at nothing.",
        ctaPrimary: { label: "Try Ori — free", href: APP }
      },
      sections: [
        { type: "prose", html: `<h3>When the day was a lot</h3>
<ul>
<li>What took the most out of me today, and did anyone notice?</li>
<li>If I could re-do one ten-minute stretch of today, which one?</li>
<li>What am I carrying tonight that isn't actually mine to carry?</li>
<li>Where did I push through something I didn't have to?</li>
</ul>
<h3>When nothing happened</h3>
<ul>
<li>What's one small thing I'd have missed if I hadn't stopped to write?</li>
<li>What did my body want today that I didn't give it?</li>
<li>What's quietly different about this week versus last?</li>
<li>Who crossed my mind today, and why them?</li>
</ul>
<h3>When you're overwhelmed</h3>
<ul>
<li>What is actually due tomorrow — and what only feels due?</li>
<li>If a friend had my exact day, what would I tell them tonight?</li>
<li>What's the smallest next step that would make tomorrow 5% lighter?</li>
<li>What can I take off the list entirely, with no real cost?</li>
</ul>
<h3>Gratitude without the cliché</h3>
<ul>
<li>What worked today that I usually take for granted?</li>
<li>Who made something easier for me, even slightly?</li>
<li>What's one thing my past self would be glad I did?</li>
</ul>
<h3>Finding your direction (your north star)</h3>
<ul>
<li>When did I feel most like myself this week?</li>
<li>What keeps showing up in these entries that I keep ignoring?</li>
<li>If this month had a title, what would it be?</li>
<li>What would I do more of if no one were keeping score?</li>
</ul>
<h3>An easier way than a blank page</h3>
<p>If prompts still feel like homework, that's the whole reason Ori exists. You talk or type a few lines — even just "today was a lot" — and each evening Ori writes the entry back to you as a short, honest letter, drawn only from what you shared. No streaks, no scores, and it never leaves your phone. It's free.</p>` },
        { type: "faq", kicker: "journaling, simply", h2: "How to actually start journaling.", faqs: [
          { q: "What should I write in a journal?", a: "Start with one honest line about how the day actually felt — not what you did, but how it landed. A single sentence counts. The prompts above give you a starting point when even that feels hard." },
          { q: "How do I start journaling when I don't know what to say?", a: "Lower the bar: one line, out loud or typed. You don't need a theme or a streak. If the blank page is the blocker, an app like Ori can write the first draft from a few words so you're reacting, not starting cold." },
          { q: "How often should I journal?", a: "As often as it helps and no more. There's no right number and no benefit to guilt. Many people find once at the end of the day is plenty; a missed day costs nothing." },
          { q: "What if nothing happened today?", a: "\"Nothing happened\" is still a real entry — quiet days carry their own information. Try a prompt about your body, your mood, or who crossed your mind. Often the smallest day holds the line you needed to write." }
        ] }
      ],
      closing: {
        h2: "Never stare at a blank page again.",
        p: "Say a few words about your day; Ori writes the rest. Free, private, and it never leaves your phone.",
        cta: { label: "Try Ori — free", href: APP }
      }
    },
    {
      slug: "apple-health",
      title: "Ori for Apple Health & Apple Watch — your day, in plain words",
      description: "Ori reads your Apple Health sleep and activity and writes them back to you each evening in plain words — a short, honest letter. Free, private, on your iPhone. No Apple Watch? Ori works with just your words.",
      ogTitle: "Ori for Apple Health — your day, in plain words",
      ogDesc: "Your Apple Watch counts the steps and the sleep. Ori tells you what they meant for your day — a short, honest letter each evening. Free and on-device.",
      schema: ["software", "faq"],
      hero: {
        kicker: "works with Apple Health · free",
        h1: "Your Apple Watch knows the numbers. Ori knows the day.",
        sub: "Apple Health quietly records your sleep, steps, and heart. Ori reads those signals beside the few lines you wrote and writes you back each evening — not another ring of charts, just your day understood. Free, and it never leaves your iPhone.",
        ctaPrimary: { label: "Get Ori — free", href: APP },
        ctaGhost: { label: "How it works", href: HOME + "#how" },
        fine: "No Apple Watch? Ori still works with just your words — free."
      },
      sections: [
        { type: "prose", html: `<h3>Apple Health measures. Ori means.</h3>
<p>Your iPhone and Apple Watch already gather more about your days than you ever look at — sleep stages, activity, resting heart rate. Ori reads that quietly, sets it beside the few words you wrote, and writes you back in plain language each evening: not a dashboard, not a score, just the day you actually lived, read back to you.</p>
<h3>What Ori adds to Apple Health</h3>
<ul>
<li><strong>Plain words, not more charts.</strong> Your sleep and activity, turned into a sentence you'd actually say out loud — what the night gave you, and what it didn't.</li>
<li><strong>Your body next to your day.</strong> The night you barely slept, beside the day you called hard — finally on the same page.</li>
<li><strong>Every number shown, nothing invented.</strong> Ori never guesses past your data, and it is not a medical tool — it makes no clinical claim.</li>
<li><strong>Free and on-device.</strong> No subscription, and your journal — and your Health data — stay on your iPhone.</li>
</ul>` },
        { type: "why", kicker: "ori + apple health", h2: "A meaning-layer on top of your iPhone.", cards: [
          { h3: "Reads your sleep & activity", p: "With your permission, Ori reads the Apple Health signals you already collect and reflects them back in words — gently, and only what's there." },
          { h3: "Writes the evening letter for you", p: "No blank page. A short, honest note composed from your day and your body, waiting each night." },
          { h3: "Works without a watch too", p: "No Apple Watch? Ori still works with just your words — and with an Oura ring if you'd rather. Always free." }
        ] },
        { type: "faq", kicker: "apple health + ori", h2: "Apple Health questions, answered.", faqs: [
          { q: "Does Ori work with Apple Health and the Apple Watch?", a: "Yes. With your permission, Ori reads your Apple Health sleep and activity and reflects them back to you in plain words each evening, so the numbers your watch collects finally mean something for your day." },
          { q: "Do I need an Apple Watch to use Ori?", a: "No. Ori works with just your words. An Apple Watch or iPhone simply adds your sleep and activity to the picture — but it is never required, and Ori is always free." },
          { q: "Does my Apple Health data leave my iPhone?", a: "No. Your Health data and your journal stay on your device. Nothing is sold or shared, and you can turn any data source off at any time." },
          { q: "Is Ori a medical or fitness-coaching app?", a: "No. Ori is for reflection, not treatment — it never makes a clinical claim and never tells you to hit a target. It simply mirrors what your day held back to you, in plain words." },
          { q: "Is Ori free with Apple Health?", a: "Yes. Ori is completely free — no subscription, no account, no ads — whether or not you connect Apple Health." }
        ] }
      ],
      closing: {
        h2: "Your iPhone already knows. Let Ori tell you.",
        p: "Free, private, and it never leaves your phone. Works with Apple Health, Oura, or just your words.",
        cta: { label: "Get Ori — free", href: APP }
      }
    },
    {
      slug: "voice-journal",
      title: "A voice journal that writes back — just say your day out loud",
      description: "Ori is a voice journaling app: say a few lines about your day out loud and each evening it writes you back a short, honest letter. No typing, no blank page. Free, private, on your phone.",
      ogTitle: "A voice journal that writes back",
      ogDesc: "Speak a few lines about your day; each evening Ori writes you a short letter back from your own words. No typing required. Free and on-device.",
      schema: ["software", "faq"],
      hero: {
        kicker: "speak your journal · free",
        h1: "Just say your day out loud.",
        sub: "Typing is the reason most journals die in week one. With Ori you simply speak — a sentence, a ramble, whatever's there — and each evening it writes you back a short, honest letter from your own words. No keyboard, no blank page. Free, and it never leaves your phone.",
        ctaPrimary: { label: "Try Ori — free", href: APP },
        ctaGhost: { label: "How it works", href: HOME + "#how" }
      },
      sections: [
        { type: "prose", html: `<h3>Talking is easier than writing</h3>
<p>You can say in twenty seconds what you'd never sit down to type. That's the whole idea. Speak your day to Ori the way you'd tell a friend on the walk home — unedited, out of order, half a thought is fine — and it listens, keeps your own words, and writes the entry back to you each evening. The hardest part of journaling, the blank page, simply isn't there.</p>
<h3>Why speaking works when typing doesn't</h3>
<ul>
<li><strong>No keyboard, no friction.</strong> The fewer steps between the thought and the journal, the more days you actually show up.</li>
<li><strong>Your own voice, your own words.</strong> Ori writes back only from what you said — nothing invented, nothing put in your mouth.</li>
<li><strong>A letter, not a transcript.</strong> You don't get a wall of dictated text — you get a short, honest letter each evening, drawn from your day.</li>
<li><strong>Private by design.</strong> Your words and your journal stay on your phone. Nothing is sold, nothing is shared.</li>
</ul>
<h3>Prefer to type? Still yours.</h3>
<p>Some evenings you won't want to talk — and that's fine. You can type a few lines instead, whichever feels easier in the moment. Ori meets you either way, and it's free.</p>` },
        { type: "why", kicker: "ori, out loud", h2: "The journal you can talk to.", cards: [
          { h3: "Speak instead of type", p: "Say a few lines about your day out loud. A minute is enough — even half a thought counts." },
          { h3: "It writes the entry back", p: "Each evening Ori composes a short, honest letter from your own words, so you never face a blank page." },
          { h3: "Free and on your phone", p: "No account, no subscription, no one listening in. Your voice and your journal stay on your device." }
        ] },
        { type: "faq", kicker: "voice journaling, answered", h2: "Talking-to-your-journal questions.", faqs: [
          { q: "What is a voice journal?", a: "A voice journal lets you speak your entries out loud instead of typing them. With Ori, you say a few lines about your day and it keeps your own words — then writes you back a short letter each evening, so speaking is all you have to do." },
          { q: "Can I journal by talking instead of typing?", a: "Yes. Ori is built for exactly that — say whatever's on your mind, in any order, and it listens. If you'd rather type some evenings, you can; whichever feels easier in the moment." },
          { q: "Do my voice recordings leave my phone?", a: "No. Your words and your journal stay on your device. Nothing is sold or shared, and you stay in control of what Ori keeps." },
          { q: "Is the voice journal free?", a: "Yes. Ori is completely free to speak or type your journal — no subscription, no account, no ads." },
          { q: "What if I don't know what to say out loud?", a: "Start with one honest line about how the day landed — \"today was a lot\" is a real entry. Ori takes it from there and writes the rest back to you; you never have to perform or have it figured out." }
        ] }
      ],
      closing: {
        h2: "Say it out loud. Ori writes the rest.",
        p: "A voice journal that listens and writes back. Free, private, and it never leaves your phone.",
        cta: { label: "Try Ori — free", href: APP }
      }
    },
    {
      slug: "private-journal",
      title: "A private journal app that stays on your phone — no account, no cloud",
      description: "Ori is a private journaling app: your entries stay on your device, never on a server. No account, nothing sold, nothing shared. Write or speak your day and Ori writes back. Free.",
      ogTitle: "A private journal that never leaves your phone",
      ogDesc: "No account, no cloud, nothing sold. Your journal stays on your device — and Ori still writes you a letter back each evening. Free and private by design.",
      schema: ["software", "faq"],
      hero: {
        kicker: "private by design · free",
        h1: "A journal that's nobody's business but yours.",
        sub: "Most journaling apps ask you to make an account and quietly keep your entries on their servers. Ori doesn't. Your journal lives on your phone — no account, nothing sold, nothing shared, no one reading over your shoulder. And it still writes you back each evening. Free.",
        ctaPrimary: { label: "Get Ori — free", href: APP },
        ctaGhost: { label: "How it works", href: HOME + "#how" }
      },
      sections: [
        { type: "prose", html: `<h3>Private isn't a setting. It's the design.</h3>
<p>You should be able to write the truest version of your day without wondering who else can read it. With Ori, there's no account to create and no copy of your journal sitting in someone's cloud. Your entries stay on your device. Nothing is sold to advertisers, nothing is shared, and you choose what Ori is allowed to see — and can turn any of it off.</p>
<h3>What "private" actually means here</h3>
<ul>
<li><strong>On-device, not on a server.</strong> Your journal lives on your phone — not in a database somewhere you can't see.</li>
<li><strong>No account, no email wall.</strong> You don't hand over your identity to start. There's nothing to sign up for.</li>
<li><strong>Nothing sold, nothing shared.</strong> You are not the product. There are no ads and no data brokers in the loop.</li>
<li><strong>You hold the switches.</strong> You decide what Ori sees — your words, your sleep, your activity — and you can turn any source off.</li>
</ul>
<h3>Still writes you back</h3>
<p>Private usually means you're on your own with a blank page. Not here. Even though your journal never leaves your phone, Ori still reads your day back to you each evening as a short, honest letter — drawn only from what you shared. Quiet, yours, and free.</p>` },
        { type: "why", kicker: "yours only", h2: "The privacy other journals talk about, by default.", cards: [
          { h3: "Stays on your device", p: "Your journal lives on your phone, not on a server. There's no cloud copy to leak, sell, or subpoena." },
          { h3: "No account, no ads", p: "Nothing to sign up for, nothing sold. You are not the product — Ori is simply free." },
          { h3: "You choose what it sees", p: "Your words, and only the body signals you allow. Turn any source off whenever you like." }
        ] },
        { type: "faq", kicker: "privacy, answered", h2: "Privacy questions, answered plainly.", faqs: [
          { q: "Is Ori a private journal? Where are my entries stored?", a: "Yes. Your entries are stored on your own device, not on a server. Your journal does not leave your phone, nothing is sold or shared, and no one is reading over your shoulder." },
          { q: "Do I need an account to use Ori?", a: "No. There's no sign-up and no email required. You can start journaling without handing over your identity." },
          { q: "Does Ori sell or share my data?", a: "No. Nothing is sold to advertisers and nothing is shared. There are no ads and no data brokers — you are not the product." },
          { q: "Can I use Ori without connecting any health data?", a: "Yes. Ori works with just your words. Any wearable or Health data is optional, only what you allow, and can be turned off at any time." },
          { q: "Is a private journal app still free?", a: "Yes. Ori is completely free — private by design and free at the same time, with no subscription and no account." }
        ] }
      ],
      closing: {
        h2: "Write the true version. It stays yours.",
        p: "No account, no cloud, nothing sold — and a letter back each evening anyway. Free, and it never leaves your phone.",
        cta: { label: "Get Ori — free", href: APP }
      }
    },
    {
      slug: "vs-day-one",
      title: "Ori vs Day One — an archive you write, or a letter you receive",
      description: "An honest comparison. Day One is a rich, multi-device journal you write yourself. Ori writes the entry back to you — free, no account, and it never leaves your phone. Which fits how you actually end your days?",
      ogTitle: "Ori vs Day One — which journal fits you?",
      ogDesc: "One is a beautiful archive you build across devices. The other writes you a letter back each evening, on one phone, free. An honest comparison — including who should pick Day One.",
      schema: ["software", "faq"],
      hero: {
        kicker: "an honest comparison",
        h1: "An archive you write, or a letter you receive.",
        sub: "Day One is the most established journal app there is, and for some people it's the right choice. Here's how Ori actually differs — honestly, including where Day One is stronger — so you can pick the one that matches how your days really end.",
        ctaPrimary: { label: "Try Ori — free", href: APP },
        ctaGhost: { label: "How Ori works", href: HOME + "#how" }
      },
      sections: [
        { type: "prose", html: `<h3>The short version</h3>
<p>Day One is a rich, polished archive you build yourself: you write the entries, attach photos and audio, and sync everything across your devices with a Day One account. Ori starts from the opposite end: you say a few lines — out loud or typed — and each evening it writes the entry back to you as a short, honest letter. No account, and the journal never leaves your phone.</p>
<h3>Where Day One is genuinely stronger</h3>
<ul>
<li><strong>A lifetime, multi-device archive.</strong> iPhone, iPad, Mac, Android, and web, all in sync. If you want your journal everywhere, Day One does that and Ori — one phone, by design — does not.</li>
<li><strong>Rich media.</strong> Photos, videos, audio, scanned PDFs inside entries. Ori keeps to words and your body's signals.</li>
<li><strong>Maturity.</strong> Years of refinement, printed-book exports, a large community.</li>
</ul>
<h3>Where Ori is different by design</h3>
<ul>
<li><strong>It writes the entry — you don't.</strong> Day One gives you a beautiful blank page; Ori assumes the blank page is the problem. You speak a few lines, and a letter comes back each evening.</li>
<li><strong>No account at all.</strong> Day One syncs through an account (with end-to-end encryption on its plans). Ori has nothing to sign up for and nothing in any cloud — the journal exists only on your phone.</li>
<li><strong>Your body is part of the story.</strong> Ori can set your sleep and energy (Oura or Apple Health, optional) beside your words. Day One is words and media.</li>
<li><strong>Price.</strong> As of mid-2026, Day One's Silver plan is $49.99/year and Gold is $74.99/year, with a capable free Basic tier. Ori is simply free — no tiers, no subscription.</li>
</ul>
<h3>The honest bottom line</h3>
<p>If you already journal happily and want a rich archive across every device, Day One is excellent — keep it. If the blank page is why you don't journal, or you want something that stays on one phone and is nobody's business, that's exactly what Ori was built for. Some people use both: Day One as the archive, Ori as the evening letter.</p>` },
        { type: "why", kicker: "the real difference", h2: "Not a better Day One. A different idea.", cards: [
          { h3: "A letter back, not a blank page", p: "You say a few lines; each evening Ori writes the entry back to you. The work of journaling is the part Ori removes." },
          { h3: "No account, no cloud copy", p: "Nothing to sign up for. Your journal lives on your phone and nowhere else — not synced, not stored on a server, not sold." },
          { h3: "Free means free", p: "No tiers, no premium unlock, no subscription. Every part of Ori is free for everyone." }
        ] },
        { type: "faq", kicker: "ori vs day one", h2: "The questions people actually ask.", faqs: [
          { q: "Is Ori better than Day One?", a: "Not universally — they solve different problems. Day One is a rich archive you write and sync across devices. Ori writes the entry back to you and keeps everything on one phone. If you love writing and want your journal everywhere, pick Day One. If the blank page is the barrier, pick Ori." },
          { q: "Does Ori sync across devices like Day One?", a: "No — by design. Your Ori journal lives on your phone and never leaves it, which is the privacy model: no account, no cloud copy, nothing to breach. Day One is the better choice if multi-device sync matters more to you than on-device privacy." },
          { q: "How much does Ori cost compared to Day One?", a: "Ori is completely free — no subscription and no premium tier. Day One has a free Basic plan, with Silver at $49.99/year and Gold at $74.99/year as of mid-2026 for sync, media, and its advanced features." },
          { q: "Can I import my Day One journal into Ori?", a: "No. Ori isn't an archive to migrate into — it starts fresh from the days you share with it, and writes back from those. Your Day One journal stays valuable where it is; some people keep both." },
          { q: "Does Day One write entries for you like Ori does?", a: "Day One is built around you writing, with prompts to help you start (and its own set of premium writing aids on the Gold plan). Ori inverts that: you speak or type a few lines, and the evening letter is composed for you from your own words." }
        ] }
      ],
      closing: {
        h2: "If the blank page is the problem, start here.",
        p: "Say a few words about your day; a letter comes back in the evening. Free, private, and it never leaves your phone.",
        cta: { label: "Try Ori — free", href: APP }
      }
    },
    {
      slug: "vs-stoic",
      title: "Ori vs Stoic — prompts you answer, or a letter that answers you",
      description: "An honest comparison. Stoic gives you guided prompts, routines, and mood tracking to fill in. Ori asks for nothing but a few lines about your day — then writes you back. Free, private, on your phone.",
      ogTitle: "Ori vs Stoic — guided prompts, or a letter back?",
      ogDesc: "Stoic structures your reflection with prompts and routines. Ori listens to a few lines and writes the entry back to you each evening. An honest comparison.",
      schema: ["software", "faq"],
      hero: {
        kicker: "an honest comparison",
        h1: "Prompts you answer, or a letter that answers you.",
        sub: "Stoic is a well-made guided journal: prompts, morning and evening routines, mood tracking. Ori takes the opposite bet — that on your hardest evenings you won't fill in a form, but you might say a few honest words. Here's the real difference.",
        ctaPrimary: { label: "Try Ori — free", href: APP },
        ctaGhost: { label: "How Ori works", href: HOME + "#how" }
      },
      sections: [
        { type: "prose", html: `<h3>The short version</h3>
<p>Stoic structures your reflection for you: thought-provoking prompts, a morning preparation and an evening reflection, mood tracking, breathing exercises. You answer its questions. Ori doesn't ask questions — you say whatever's there, even one line, and each evening it writes you back a short letter drawn only from what you shared.</p>
<h3>Where Stoic is genuinely strong</h3>
<ul>
<li><strong>Structure, if you want it.</strong> Guided journals and routines give you somewhere to start every single day, morning and night.</li>
<li><strong>Practices beyond writing.</strong> Breathing exercises, mood check-ins, and reflection exercises inspired by Stoic philosophy.</li>
<li><strong>A free tier to try.</strong> Daily prompts and a selection of exercises are free, with a premium subscription unlocking the deeper features.</li>
</ul>
<h3>Where Ori is different by design</h3>
<ul>
<li><strong>No prompts, no form to fill.</strong> Prompts still ask you to do the writing. Ori assumes the writing is the barrier — you talk, it writes the entry back.</li>
<li><strong>No routine to keep.</strong> Stoic is built around a daily practice. Ori has no streaks and no morning/evening checklist — miss a week and nothing scolds you.</li>
<li><strong>Your body in the picture.</strong> Ori can read your sleep and energy (Oura or Apple Health, optional) beside your words — the day you felt and the day you had, on one page.</li>
<li><strong>Everything is free.</strong> No premium tier. The letter, the patterns, the voice input — all of it, for everyone.</li>
</ul>
<h3>The honest bottom line</h3>
<p>If a structured daily practice with prompts and exercises keeps you grounded, Stoic does that well. If what you need is to be heard at the end of the day without homework — and to have the entry written for you — that's Ori. The philosophies genuinely differ: one guides you, the other witnesses you.</p>` },
        { type: "why", kicker: "the real difference", h2: "Guided practice, or quiet witness.", cards: [
          { h3: "You talk, it writes", p: "No prompt to answer, no form to complete. A few honest lines — even \"today was a lot\" — and the evening letter takes it from there." },
          { h3: "No practice to maintain", p: "No streaks, no daily checklist, no guilt mechanics. Ori is simply there whenever you come back." },
          { h3: "Free, with nothing behind a tier", p: "Stoic reserves its deeper features for premium. Ori has no premium — everything it does is free." }
        ] },
        { type: "faq", kicker: "ori vs stoic", h2: "The questions people actually ask.", faqs: [
          { q: "Is Ori better than Stoic?", a: "Not universally — they take opposite approaches. Stoic guides you with prompts, routines, and exercises you complete. Ori asks for nothing but a few lines and writes the entry back to you. Pick Stoic if structure keeps you going; pick Ori if the structure itself is what you keep abandoning." },
          { q: "Does Ori have journaling prompts like Stoic?", a: "Not inside the app — Ori's whole idea is that you shouldn't need them: you say whatever's there and it writes back. If you like starting from a question, we do keep a free page of honest journaling prompts you can use anywhere." },
          { q: "Is Ori free like Stoic's free tier?", a: "Ori is entirely free — there is no premium tier at all. Stoic offers daily prompts and some exercises free, with its deeper features behind a premium subscription." },
          { q: "Does Ori do mood tracking?", a: "Not as a score you log. Ori reflects how your days actually read — your own words, and optionally your sleep and energy from a wearable — back to you in plain language. Nothing is rated and nothing is invented." },
          { q: "Can I use both Ori and Stoic?", a: "Yes, and it's not a strange pairing: Stoic for a structured morning practice, Ori for the unstructured end of the day when you just need to say it to someone and be written back to." }
        ] }
      ],
      closing: {
        h2: "No homework. Just say the day out loud.",
        p: "A few words is enough — the letter comes back in the evening. Free, private, and it never leaves your phone.",
        cta: { label: "Try Ori — free", href: APP }
      }
    }
  ]
};
