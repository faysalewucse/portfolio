import type { ReactNode } from "react";

export type PostType = "tech" | "islam";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readMinutes: number;
  type: PostType;
  category: string;
  subcategory?: string;
};

export type SubcategoryDef = { slug: string; label: string };
export type CategoryDef = {
  slug: string;
  label: string;
  description?: string;
  subcategories?: SubcategoryDef[];
};
export type TypeDef = {
  slug: PostType;
  label: string;
  description: string;
  categories: CategoryDef[];
};

export const TAXONOMY: TypeDef[] = [
  {
    slug: "tech",
    label: "Tech",
    description: "Building, shipping, and deploying.",
    categories: [
      {
        slug: "app",
        label: "App",
        description: "Native and cross-platform mobile.",
        subcategories: [
          { slug: "android", label: "Android" },
          { slug: "ios", label: "iOS" },
        ],
      },
      {
        slug: "web",
        label: "Web",
        description: "Frontend and backend on the web.",
      },
    ],
  },
  {
    slug: "islam",
    label: "Islam",
    description: "Faith, knowledge, and reflection.",
    categories: [],
  },
];

export const TYPE_META: Record<PostType, { label: string; description: string }> =
  Object.fromEntries(
    TAXONOMY.map((t) => [t.slug, { label: t.label, description: t.description }]),
  ) as Record<PostType, { label: string; description: string }>;

export const TYPE_ORDER: PostType[] = TAXONOMY.map((t) => t.slug);

export function getTypeDef(type: PostType): TypeDef | undefined {
  return TAXONOMY.find((t) => t.slug === type);
}

export function getCategoryDef(
  type: PostType,
  categorySlug: string,
): CategoryDef | undefined {
  return getTypeDef(type)?.categories.find((c) => c.slug === categorySlug);
}

export function getSubcategoryDef(
  type: PostType,
  categorySlug: string,
  subSlug?: string,
): SubcategoryDef | undefined {
  if (!subSlug) return undefined;
  return getCategoryDef(type, categorySlug)?.subcategories?.find(
    (s) => s.slug === subSlug,
  );
}

export function categoryLabel(type: PostType, categorySlug: string): string {
  return getCategoryDef(type, categorySlug)?.label ?? categorySlug;
}

export function subcategoryLabel(
  type: PostType,
  categorySlug: string,
  subSlug?: string,
): string | null {
  if (!subSlug) return null;
  return getSubcategoryDef(type, categorySlug, subSlug)?.label ?? subSlug;
}

export const POSTS: PostMeta[] = [
  {
    slug: "create-play-console-account",
    title: "Setting up a Google Play Console account — personal vs. organization",
    summary:
      "What you need, what each account type is good for, and where the verification surprises hide.",
    date: "2026-04-15",
    readMinutes: 6,
    type: "tech",
    category: "app",
    subcategory: "android",
  },
  {
    slug: "publish-android-app",
    title: "Publishing an Android app to the Play Store, end to end",
    summary:
      "From a signed release bundle to a live listing — the steps that always show up, in the order they show up.",
    date: "2026-04-22",
    readMinutes: 9,
    type: "tech",
    category: "app",
    subcategory: "android",
  },
  {
    slug: "create-apple-developer-account",
    title: "Setting up an Apple Developer account — personal vs. organization",
    summary:
      "$99/year, two-factor everything, D-U-N-S for orgs, and the human-review call you should plan for.",
    date: "2026-04-29",
    readMinutes: 6,
    type: "tech",
    category: "app",
    subcategory: "ios",
  },
  {
    slug: "publish-ios-app",
    title: "Publishing an iOS app to the App Store, step by step",
    summary:
      "Bundle IDs, archives, App Store Connect metadata, privacy labels, and what gets rejected the most.",
    date: "2026-05-04",
    readMinutes: 10,
    type: "tech",
    category: "app",
    subcategory: "ios",
  },
];

export function postsByType(type: PostType): PostMeta[] {
  return POSTS.filter((p) => p.type === type);
}

export function postsByCategory(
  type: PostType,
  categorySlug: string,
): PostMeta[] {
  return POSTS.filter((p) => p.type === type && p.category === categorySlug);
}

/** Display label for a post — most-specific label available. */
export function postChipLabel(post: PostMeta): string {
  const sub = subcategoryLabel(post.type, post.category, post.subcategory);
  return sub ?? categoryLabel(post.type, post.category);
}

export function postBySlug(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function PostBody({ slug }: { slug: string }): ReactNode {
  const Body = BODIES[slug];
  if (!Body) return <p>Post not found.</p>;
  return <Body />;
}

const BODIES: Record<string, () => ReactNode> = {
  "create-play-console-account": PlayConsolePost,
  "publish-android-app": PublishAndroidPost,
  "create-apple-developer-account": AppleDevPost,
  "publish-ios-app": PublishIosPost,
};

function PlayConsolePost() {
  return (
    <>
      <p>
        A Google Play Console account is the gate between your APK / AAB and a
        public install. There are two flavours — <strong>Personal</strong> and{" "}
        <strong>Organization</strong> — and they look almost the same on the
        signup screen but behave very differently downstream.
      </p>

      <h2>Before you start</h2>
      <p>
        For both account types you need a Google account with{" "}
        <strong>two-factor authentication</strong> enabled, a payment method
        that can clear the one-time <strong>$25 USD</strong> registration fee,
        and a government-issued ID for identity verification.
      </p>
      <p>
        Verification is no longer optional. Google will ask for ID and proof of
        address within 12 months of signup, and your apps can be removed if
        you ignore it. Do it on day one.
      </p>

      <h2>Personal account</h2>
      <ol>
        <li>
          Sign in to{" "}
          <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer">
            play.google.com/console
          </a>{" "}
          with the Google account you want associated with the listing — once
          you choose, this is hard to migrate.
        </li>
        <li>Pick <strong>Yourself</strong> as the account type.</li>
        <li>
          Enter your legal name, address, and contact email. The contact email
          is shown on every Play Store listing — most people use a dedicated
          alias rather than their personal Gmail.
        </li>
        <li>
          Pay the $25 fee. Approval usually lands in <strong>24–48 hours</strong>,
          sometimes minutes.
        </li>
        <li>
          Complete identity verification. Upload an ID and a selfie. Google
          processes this asynchronously over the next 1–2 weeks.
        </li>
      </ol>
      <p>
        Personal accounts can publish apps and run in-app purchases.
        Limitations show up on the legal side: you cannot accept payments under
        a business name, and any team access happens through Google account
        invitations rather than a real org structure.
      </p>

      <h2>Organization account</h2>
      <p>
        Choose this if a company owns the app or if you want a real team
        structure. The headline difference is a{" "}
        <strong>D-U-N-S number</strong> — a free, globally-unique business
        identifier from Dun &amp; Bradstreet.
      </p>
      <ol>
        <li>
          Apply for a D-U-N-S at{" "}
          <a href="https://www.dnb.com/duns-number/get-a-duns.html" target="_blank" rel="noopener noreferrer">
            dnb.com/duns-number/get-a-duns
          </a>
          . The free path takes <strong>~30 days</strong>; expedited (paid)
          shrinks it to a few business days.
        </li>
        <li>
          Have business registration documents and a tax ID ready. Some
          markets accept a trade license; others want articles of incorporation.
        </li>
        <li>
          On{" "}
          <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer">
            play.google.com/console
          </a>{" "}
          choose <strong>An organization</strong> as the account type.
        </li>
        <li>
          Enter the legal business name <em>exactly</em> as it appears on the
          D-U-N-S record. A typo will bounce verification.
        </li>
        <li>Pay the $25 fee.</li>
        <li>
          Wait for Google to cross-check D-U-N-S. This is the slow part — plan
          for 1–4 weeks total, longer if your D-U-N-S record is brand new.
        </li>
      </ol>

      <h2>Picking between them</h2>
      <p>
        If the app is yours and you may sell it later — go organization from
        the start. Migrating an app from a personal to an org account is a
        manual transfer that breaks reviews, ratings continuity, and store
        analytics history. It is rarely worth saving the D-U-N-S step.
      </p>
      <p>
        For a side project or prototype where the goal is just to ship,
        personal is fine and gets you live faster.
      </p>
    </>
  );
}

function PublishAndroidPost() {
  return (
    <>
      <p>
        Once your console is live, the actual publishing flow is mostly
        paperwork. The build and signing happen on your machine; everything
        else is forms.
      </p>

      <h2>1 — Build a release bundle</h2>
      <p>
        The Play Store requires <strong>Android App Bundle</strong>{" "}
        (<code>.aab</code>) — APKs are deprecated for new uploads. From Flutter:
      </p>
      <ol>
        <li>
          <code>flutter build appbundle --release</code> outputs to{" "}
          <code>build/app/outputs/bundle/release/</code>.
        </li>
        <li>
          From native Android Studio, <strong>Build → Generate Signed Bundle
          / APK → Android App Bundle</strong>.
        </li>
      </ol>

      <h2>2 — Sign it with a release keystore</h2>
      <p>
        Generate the keystore once, store it somewhere that will outlive your
        laptop. If you lose it you can never push an update under the same
        package name.
      </p>
      <ol>
        <li>
          <code>keytool -genkey -v -keystore release.keystore -alias upload
          -keyalg RSA -keysize 2048 -validity 10000</code>
        </li>
        <li>
          Reference the keystore in <code>android/key.properties</code> and
          your Gradle build, or in Flutter via the standard signing config.
        </li>
        <li>
          Rebuild the bundle so it&apos;s signed with the release key, not
          debug.
        </li>
      </ol>
      <p>
        Optional but worth it: enable <strong>Play App Signing</strong> when
        you create the app in the console. Google holds the signing key,
        you hold the upload key, and lost keystores stop being terminal.
      </p>

      <h2>3 — Create the app entry</h2>
      <p>
        In Play Console click <strong>Create app</strong>. Pick app vs. game,
        free vs. paid (paid pricing can&apos;t be reverted to free for a given
        package name, ever), default language, and confirm policy declarations.
      </p>

      <h2>4 — Fill in the store listing</h2>
      <ul>
        <li><strong>App name</strong> (≤ 30 chars)</li>
        <li><strong>Short description</strong> (≤ 80 chars) — this is the hook on the listing</li>
        <li><strong>Full description</strong> (≤ 4000 chars)</li>
        <li>
          <strong>App icon</strong> — 512 × 512 PNG, transparent background not
          allowed
        </li>
        <li>
          <strong>Feature graphic</strong> — 1024 × 500, no text bleeding off
          edges
        </li>
        <li>
          <strong>Screenshots</strong> — at least 2, ideally 4–8 across phone
          and tablet
        </li>
      </ul>

      <h2>5 — The compliance forms</h2>
      <p>
        These are the steps that block first-time publishers. None are
        difficult; all are mandatory.
      </p>
      <ol>
        <li>
          <strong>Privacy policy URL.</strong> Must be public. Hosted at a
          stable URL — Notion / Google Sites are fine for v1.
        </li>
        <li>
          <strong>Content rating questionnaire.</strong> Answer honestly.
          Lying here gets caught at review and resets the timeline.
        </li>
        <li>
          <strong>Target audience &amp; content.</strong> If your app might be
          used by anyone under 13, you need to declare it and adjust ad SDKs.
        </li>
        <li>
          <strong>Data safety form.</strong> List every category of personal
          data your app collects, why, and whether it&apos;s shared. Cross-check
          against your SDKs (analytics, crash reporting, ads).
        </li>
        <li>
          <strong>App access.</strong> If parts of the app need a login,
          provide test credentials so the reviewer can actually run it.
        </li>
      </ol>

      <h2>6 — Pricing and countries</h2>
      <p>
        Set the price (or confirm free) and pick countries. You can stage a
        rollout to one country first to catch issues before it goes worldwide.
      </p>

      <h2>7 — Upload to a release track</h2>
      <p>
        Don&apos;t ship straight to <strong>Production</strong> the first
        time. Use the tracks in this order:
      </p>
      <ol>
        <li>
          <strong>Internal testing</strong> — up to 100 testers, available in
          minutes, no review needed.
        </li>
        <li>
          <strong>Closed testing</strong> — invited testers, reviewed by Google
          (faster than production review).
        </li>
        <li>
          <strong>Open testing</strong> — public beta with a join link.
        </li>
        <li>
          <strong>Production</strong> — full review, then rollout.
        </li>
      </ol>
      <p>
        Upload your <code>.aab</code> to the chosen track, write release notes
        per language, and submit.
      </p>

      <h2>8 — Review and rollout</h2>
      <p>
        Production review takes <strong>1–7 days</strong> for new apps; updates
        are usually faster. If something fails — like a missing data-safety
        category — Google sends an email with the specific issue and you can
        resubmit without re-uploading the bundle.
      </p>
      <p>
        Once approved, set a <strong>staged rollout</strong>: 1% → 10% → 100%
        over a few days. If your crash-free rate dips you can halt the rollout
        from the console without pulling the build.
      </p>
    </>
  );
}

function AppleDevPost() {
  return (
    <>
      <p>
        Apple&apos;s developer program is{" "}
        <strong>$99/year</strong>, recurring, and you cannot ship to the App
        Store without it. Like Google, individual and organization accounts
        share the signup screen but diverge sharply after.
      </p>

      <h2>Prerequisites — both account types</h2>
      <ul>
        <li>
          An <strong>Apple ID</strong> with two-factor authentication enabled.
          Use one tied to a permanent email; this is the account that owns
          every certificate, app, and provisioning profile you create.
        </li>
        <li>
          A <strong>credit/debit card</strong> matching the account country.
          Apple does not accept the same card on multiple developer accounts
          easily.
        </li>
        <li>
          A device with the <strong>Apple Developer app</strong> for iOS or
          access to{" "}
          <a href="https://developer.apple.com/programs" target="_blank" rel="noopener noreferrer">
            developer.apple.com/programs
          </a>{" "}
          on the web.
        </li>
      </ul>

      <h2>Individual (Personal) enrollment</h2>
      <ol>
        <li>
          Go to{" "}
          <a href="https://developer.apple.com/programs/enroll/" target="_blank" rel="noopener noreferrer">
            developer.apple.com/programs/enroll
          </a>{" "}
          and sign in.
        </li>
        <li>
          Select <strong>Individual / Sole Proprietor</strong>. Your apps will
          be listed on the App Store under your <strong>legal name</strong> —
          there is no way to display a brand name on Individual accounts.
        </li>
        <li>Confirm contact info and accept the agreements.</li>
        <li>
          Pay $99. The page warns about non-refundable, which is true the
          moment Apple approves you.
        </li>
        <li>
          Wait for approval — typically <strong>24–48 hours</strong>, sometimes
          minutes if your Apple ID has a clean history.
        </li>
      </ol>
      <p>
        Individual is the right choice for a side project, a freelance app
        you maintain, or your own brand. The catch is the legal-name display
        requirement; if that&apos;s a non-starter, go Organization.
      </p>

      <h2>Organization enrollment</h2>
      <p>
        Organization is the more involved path. Plan for{" "}
        <strong>1–2 weeks</strong>, sometimes longer for first-time
        applications.
      </p>
      <ol>
        <li>
          <strong>Get a D-U-N-S number.</strong> Apple has a free lookup +
          request form at{" "}
          <a href="https://developer.apple.com/enroll/duns-lookup/" target="_blank" rel="noopener noreferrer">
            developer.apple.com/enroll/duns-lookup
          </a>
          . If your business already has one — e.g. registered with a
          government supplier portal — search first; you don&apos;t want a
          duplicate.
        </li>
        <li>
          <strong>Confirm legal authority.</strong> The applicant must be a
          binding signatory of the company. If you&apos;re not the founder
          or a senior employee with that authority, gather proof —
          authorization letter, board resolution, etc.
        </li>
        <li>
          On the enrollment page choose <strong>Company / Organization</strong>.
        </li>
        <li>
          Enter the <strong>legal entity name exactly</strong> as registered
          in D-U-N-S. Whitespace, &amp; vs. &quot;and&quot;, &quot;Inc&quot; vs.
          &quot;Inc.&quot; — Apple checks character-by-character.
        </li>
        <li>
          Pay $99 — but Apple holds the charge until verification finishes,
          so you won&apos;t get billed for a rejected application.
        </li>
        <li>
          <strong>Expect a phone call.</strong> Apple does a human verification
          call on most organization applications. They will ask if you have
          authority to sign agreements and confirm basic facts about the
          business. Answer in business hours, on a number you actually use.
        </li>
      </ol>

      <h2>Common rejections</h2>
      <ul>
        <li>
          <strong>Trade name vs. legal name mismatch.</strong> Your D-U-N-S
          must list the legal entity. If you operate as &quot;Acme Studio&quot;
          but the LLC is &quot;Acme Software LLC&quot;, you have to enroll as
          the LLC.
        </li>
        <li>
          <strong>Contactability.</strong> If Apple can&apos;t reach you on
          the phone within a couple of attempts, the application stalls.
        </li>
        <li>
          <strong>Sole-proprietor in jurisdictions Apple treats as Individual.</strong>{" "}
          In some countries a registered sole proprietorship is still treated
          as Individual — you cannot enroll as Organization without a real
          legal entity.
        </li>
      </ul>
      <p>
        Once you&apos;re approved, you get access to App Store Connect,
        TestFlight, certificates, provisioning profiles, and the ability to
        create app records — which is the next post.
      </p>
    </>
  );
}

function PublishIosPost() {
  return (
    <>
      <p>
        Publishing on iOS is more deterministic than Android — fewer optional
        steps, more required ones. The flow is: identifiers → signing → archive
        → upload → metadata → review.
      </p>

      <h2>1 — Pick a Bundle ID</h2>
      <p>
        Bundle IDs are global and immutable per app. Use reverse-DNS:{" "}
        <code>com.yourcompany.appname</code>. In Apple Developer →{" "}
        <a
          href="https://developer.apple.com/account/resources/identifiers/list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Identifiers
        </a>
        , register the ID and enable any capabilities you&apos;ll need (Push
        Notifications, Sign in with Apple, In-App Purchase, App Groups, etc.).
      </p>

      <h2>2 — Set up signing</h2>
      <p>
        You need three artefacts in this order:
      </p>
      <ol>
        <li>
          <strong>Distribution certificate</strong> (one per developer / team).
          Apple Developer → Certificates → +.
        </li>
        <li>
          <strong>App ID</strong> matching your Bundle ID — created in step 1.
        </li>
        <li>
          <strong>Provisioning profile</strong> for App Store distribution —
          ties the cert to the App ID.
        </li>
      </ol>
      <p>
        If you can avoid all of this and use{" "}
        <strong>Xcode Automatic Signing</strong>, do — it handles cert and
        profile generation for you. Manual signing is for CI and edge cases.
      </p>

      <h2>3 — Create the app in App Store Connect</h2>
      <p>
        Go to{" "}
        <a href="https://appstoreconnect.apple.com" target="_blank" rel="noopener noreferrer">
          appstoreconnect.apple.com
        </a>{" "}
        → My Apps → +. Provide:
      </p>
      <ul>
        <li>Platform: iOS (or iOS + iPadOS, etc.)</li>
        <li>Name (≤ 30 chars, must be unique on the App Store)</li>
        <li>Primary language</li>
        <li>Bundle ID (the dropdown shows IDs registered in step 1)</li>
        <li>SKU (your internal identifier — never shown publicly)</li>
      </ul>

      <h2>4 — Archive and upload the build</h2>
      <p>
        From Xcode: select <strong>Any iOS Device</strong> as the build target →{" "}
        <strong>Product → Archive</strong>. The Organizer opens with the
        archive; click <strong>Distribute App</strong> →{" "}
        <strong>App Store Connect</strong> → <strong>Upload</strong>.
      </p>
      <p>
        From Flutter: <code>flutter build ipa --release</code>, then upload
        the resulting <code>.ipa</code> with{" "}
        <code>xcrun altool --upload-app</code> or via Transporter.app.
      </p>
      <p>
        After upload, App Store Connect runs <strong>processing</strong> —
        usually 5–30 minutes. The build won&apos;t be selectable for review
        until processing completes.
      </p>

      <h2>5 — Fill in version metadata</h2>
      <ul>
        <li><strong>App name</strong> (≤ 30 chars)</li>
        <li><strong>Subtitle</strong> (≤ 30 chars) — under-the-name hook</li>
        <li>
          <strong>Promotional text</strong> (≤ 170 chars) — editable without
          a new version, good for sales and event timing
        </li>
        <li>
          <strong>Description</strong> (≤ 4000 chars) — only updatable on a
          new version submission
        </li>
        <li>
          <strong>Keywords</strong> (≤ 100 chars total, comma-separated) — the
          single biggest ASO lever you have
        </li>
        <li>
          <strong>Screenshots</strong> — required for every device size you
          support. iPhone 6.7&quot; and iPad 12.9&quot; are usually mandatory
        </li>
        <li>
          <strong>App preview video</strong> — optional but boosts conversion
          materially
        </li>
        <li>App icon (1024 × 1024, no transparency, no rounded corners)</li>
      </ul>

      <h2>6 — Privacy and content forms</h2>
      <ol>
        <li>
          <strong>Privacy policy URL.</strong> Required for every app.
        </li>
        <li>
          <strong>App Privacy / Nutrition Labels.</strong> Declare every kind
          of data your app or any SDK collects — analytics, ads, crash
          reporting, identifiers. Be exhaustive; this is the most common
          rejection cause.
        </li>
        <li>
          <strong>Age rating questionnaire.</strong>
        </li>
        <li>
          <strong>Export compliance.</strong> If you use HTTPS only and no
          custom encryption, you can usually self-declare exempt.
        </li>
      </ol>

      <h2>7 — Pricing, availability, and review notes</h2>
      <ol>
        <li>
          Set price tier and countries. iCloud / IAP availability is bound to
          country selection.
        </li>
        <li>
          <strong>App Review Information</strong> — provide test credentials
          if your app needs login. Reviewers will reject otherwise. Add a
          contact email and phone.
        </li>
        <li>
          Pick the build you uploaded in step 4 and assign it to this version.
        </li>
      </ol>

      <h2>8 — Submit and survive review</h2>
      <p>
        Reviews land in <strong>24–72 hours</strong> on average. Common
        rejection reasons, in order:
      </p>
      <ol>
        <li>
          <strong>Privacy nutrition labels missing or wrong.</strong> Apple
          checks against the actual binary &amp; SDKs.
        </li>
        <li>
          <strong>Login required without test credentials.</strong>
        </li>
        <li>
          <strong>Crashes on first launch on the reviewer&apos;s device.</strong>{" "}
          Test on a wider range of iOS versions before submitting.
        </li>
        <li>
          <strong>IAP for digital goods routed outside Apple.</strong> Even a
          link to your website&apos;s pricing page is risky.
        </li>
        <li>
          <strong>Placeholder / lorem ipsum content.</strong> Reviewers spot
          this immediately.
        </li>
      </ol>
      <p>
        Once approved, choose <strong>release manually</strong> if you want to
        coordinate marketing, or <strong>release automatically</strong> if
        you&apos;re comfortable shipping the moment review clears.
      </p>
      <p>
        That&apos;s the full lap. After your first one, the second app takes
        about a third of the time — most of the work is one-time setup of
        certs, profiles, and the privacy pattern that fits your stack.
      </p>
    </>
  );
}
