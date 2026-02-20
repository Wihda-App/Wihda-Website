// ─── Types ───────────────────────────────────────────────────────────
export interface HelpCategory {
  slug: string;
  label: string;
  icon: string;        // Material Icon name
  description: string;
  href: string;
}

export interface HelpArticle {
  slug: string;
  title: string;
  description: string;
  category: string;    // matches HelpCategory.slug
  tag?: string;
  tagColor?: string;
  body: string;        // markdown-ish content rendered as paragraphs
}

// ─── Categories ──────────────────────────────────────────────────────
export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: 'getting-started',
    label: 'Getting Started',
    icon: 'rocket_launch',
    description:
      'Everything you need to know to join your community and start making an impact.',
    href: '/help/getting-started',
  },
  {
    slug: 'account',
    label: 'Account Management',
    icon: 'person',
    description:
      'Manage your profile, settings, and notification preferences.',
    href: '/help/account',
  },
  {
    slug: 'civic-participation',
    label: 'Civic Participation',
    icon: 'how_to_vote',
    description:
      'Learn how to vote, create proposals, and engage with local governance.',
    href: '/help/civic-participation',
  },
  {
    slug: 'privacy',
    label: 'Privacy & Safety',
    icon: 'security',
    description:
      'Understand how we protect your data and keep the community safe.',
    href: '/help/privacy',
  },
  {
    slug: 'moderation',
    label: 'Moderation Guidelines',
    icon: 'gavel',
    description:
      'Our community standards and how we enforce them.',
    href: '/help/moderation',
  },
];

// ─── Articles ────────────────────────────────────────────────────────
export const HELP_ARTICLES: HelpArticle[] = [
  // ── Getting Started ────────────────────────────────────────────────
  {
    slug: 'verify-residency',
    title: 'How do I verify my residency?',
    description:
      'Learn about the document requirements and step-by-step process to verify your local residency to unlock voting features.',
    category: 'getting-started',
    tag: 'Popular',
    tagColor: 'bg-primary/10 text-primary hover:bg-primary/20',
    body: `To verify your residency on Wihda you will need a government-issued ID and a recent utility bill or lease agreement that shows your current address.\n\n**Step 1 — Open the app** and navigate to Settings → Verify Identity.\n\n**Step 2 — Upload documents.** Take clear photos of both the front of your ID and the supporting address document.\n\n**Step 3 — Wait for review.** Our moderation team reviews submissions within 48 hours. You will receive a push notification once your status is confirmed.\n\nIf your documents are rejected you can re-submit with corrected information at any time.`,
  },
  {
    slug: 'download-and-install',
    title: 'How to download and install Wihda',
    description:
      'Step-by-step instructions for installing the Wihda app on iOS, Android, and desktop.',
    category: 'getting-started',
    body: `Wihda is available on the App Store, Google Play, and as a progressive web app (PWA) for desktop browsers.\n\n**iOS:** Open the App Store, search for "Wihda", and tap Get.\n\n**Android:** Open Google Play, search for "Wihda", and tap Install.\n\n**Desktop:** Visit wihda.app in Chrome or Edge, click the install icon in the address bar, and follow the prompts.\n\nAfter installation, create an account using your email or sign in with Google.`,
  },
  {
    slug: 'create-your-profile',
    title: 'Setting up your community profile',
    description:
      'Personalize your profile so neighbors know who you are and what you care about.',
    category: 'getting-started',
    tag: 'New',
    tagColor: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
    body: `A complete profile builds trust in your community.\n\n**Photo & Display Name:** Add a recognizable photo and choose a display name (real names are encouraged).\n\n**Bio:** Write a short bio describing your neighborhood interests — parks, schools, housing, safety, etc.\n\n**Interests:** Select topic tags so Wihda can surface relevant proposals and discussions.\n\nYou can edit your profile at any time from Settings → My Profile.`,
  },

  // ── Account Management ─────────────────────────────────────────────
  {
    slug: 'change-notification-settings',
    title: 'Changing my notification settings',
    description:
      'Manage how often you receive emails and push notifications about new proposals and community events.',
    category: 'account',
    tag: 'Updated',
    tagColor: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
    body: `Wihda sends notifications for new proposals, votes, replies, and community events. You can customize these in Settings → Notifications.\n\n**Push Notifications:** Toggle individual categories on or off.\n\n**Email Digest:** Choose between real-time, daily, or weekly email summaries.\n\n**Quiet Hours:** Set a time range during which no push notifications are delivered.\n\nChanges take effect immediately.`,
  },
  {
    slug: 'delete-or-deactivate-account',
    title: 'Deleting or deactivating your account',
    description:
      'Understand the difference between deactivation and permanent deletion, and how to proceed.',
    category: 'account',
    body: `**Deactivation** hides your profile and content but lets you reactivate later by simply logging back in.\n\n**Permanent Deletion** removes all your data within 30 days and cannot be undone.\n\nTo deactivate: Settings → Account → Deactivate Account.\n\nTo delete: Settings → Account → Delete Account → confirm by entering your password.\n\nIf you change your mind within the 30-day grace period, log in again to cancel the deletion.`,
  },
  {
    slug: 'update-email-password',
    title: 'How to update your email or password',
    description:
      'Keep your login credentials up to date for security.',
    category: 'account',
    body: `Navigate to Settings → Account → Security.\n\n**Email:** Enter your new email address and confirm it from your inbox.\n\n**Password:** Enter your current password, then type and confirm your new password. We recommend at least 12 characters with a mix of letters, numbers, and symbols.\n\nAfter updating either credential you will be prompted to re-authenticate on all devices.`,
  },

  // ── Civic Participation ────────────────────────────────────────────
  {
    slug: 'create-community-proposal',
    title: 'Creating your first community proposal',
    description:
      'A guide to structuring your civic proposal effectively to get more engagement and feedback from your neighbors.',
    category: 'civic-participation',
    tag: 'New',
    tagColor: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
    body: `A good proposal is clear, actionable, and relevant to your community.\n\n**Title:** Keep it concise — under 80 characters.\n\n**Problem Statement:** Describe the issue you want to address.\n\n**Proposed Solution:** Outline what you think should happen.\n\n**Impact:** Explain who benefits and why it matters.\n\nOnce submitted, your proposal enters a 7-day discussion period. After that, eligible residents can vote during a 3-day voting window.`,
  },
  {
    slug: 'understanding-voting-system',
    title: 'Understanding the voting system',
    description:
      'We use a quadratic voting system for certain issues. Find out how your credits are calculated and applied.',
    category: 'civic-participation',
    body: `Wihda uses **quadratic voting** for community proposals.\n\nEach resident receives 100 voice credits per quarter. The cost of each additional vote on the same proposal increases quadratically:\n\n- 1 vote = 1 credit\n- 2 votes = 4 credits\n- 3 votes = 9 credits\n\nThis prevents a single person from dominating outcomes while still letting you express strong preferences on issues you care about.\n\nCredits reset at the start of each quarter.`,
  },
  {
    slug: 'track-proposal-progress',
    title: 'How to track a proposal\'s progress',
    description:
      'Follow a proposal through discussion, voting, and implementation stages.',
    category: 'civic-participation',
    body: `Every proposal on Wihda goes through four stages:\n\n1. **Draft** — the author is still editing.\n2. **Discussion** — open for community comments (7 days).\n3. **Voting** — eligible residents cast votes (3 days).\n4. **Result** — passed or not passed, with a public tally.\n\nTap the bell icon on any proposal to receive notifications when it moves to the next stage.`,
  },

  // ── Privacy & Safety ───────────────────────────────────────────────
  {
    slug: 'data-privacy-overview',
    title: 'Data Privacy Policy overview',
    description:
      'Detailed overview of how we collect, use, and protect your personal information.',
    category: 'privacy',
    body: `Wihda collects only the data necessary to operate the platform:\n\n- **Profile data** (name, email, photo) — to identify you.\n- **Location data** (neighborhood-level) — to connect you with your local community.\n- **Activity data** (votes, proposals) — to power civic features.\n\nWe never sell your data to third parties. All data is encrypted in transit and at rest. You can download a copy of your data or request deletion at any time from Settings → Privacy.`,
  },
  {
    slug: 'block-and-report-users',
    title: 'Blocking and reporting users',
    description:
      'How to block someone or report abusive behavior to keep your community safe.',
    category: 'privacy',
    body: `If someone is harassing you or posting harmful content:\n\n**Block:** Tap their profile → Block User. They will no longer see your content or be able to contact you.\n\n**Report:** Tap the three-dot menu on any post or comment → Report. Choose a reason and add optional context.\n\nOur moderation team reviews reports within 24 hours. Serious violations result in immediate suspension.`,
  },

  // ── Moderation ─────────────────────────────────────────────────────
  {
    slug: 'report-inappropriate-content',
    title: 'Reporting inappropriate content',
    description:
      'Keep Wihda safe. How to report comments or proposals that violate our community guidelines.',
    category: 'moderation',
    body: `Wihda is committed to maintaining a respectful and productive environment.\n\n**What to report:** Hate speech, harassment, misinformation, spam, or any content that violates our Community Guidelines.\n\n**How to report:** Tap the three-dot menu on any post, comment, or proposal and select "Report". Choose the category that best describes the violation.\n\n**What happens next:** Our moderation team reviews every report. Confirmed violations may result in content removal, a warning, or account suspension depending on severity.`,
  },
  {
    slug: 'community-guidelines',
    title: 'Community guidelines overview',
    description:
      'The rules every Wihda member agrees to follow for a healthy civic space.',
    category: 'moderation',
    tag: 'Important',
    tagColor: 'bg-primary/10 text-primary hover:bg-primary/20',
    body: `Our guidelines are simple:\n\n1. **Be respectful.** Disagree with ideas, not people.\n2. **Be truthful.** Don't share information you know to be false.\n3. **Be relevant.** Keep discussions focused on community issues.\n4. **No spam.** Promotional content unrelated to civic topics will be removed.\n5. **No harassment.** Threats, doxxing, and personal attacks result in immediate suspension.\n\nViolations are handled through a progressive enforcement system: warning → temporary suspension → permanent ban.`,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

/** Get a single category by slug, or undefined */
export function getCategoryBySlug(slug: string): HelpCategory | undefined {
  return HELP_CATEGORIES.find((c) => c.slug === slug);
}

/** Get all articles for a given category slug */
export function getArticlesByCategory(categorySlug: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === categorySlug);
}

/** Get a single article by slug, or undefined */
export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}

/** Find which category an article belongs to */
export function getCategoryForArticle(
  articleSlug: string,
): HelpCategory | undefined {
  const article = getArticleBySlug(articleSlug);
  if (!article) return undefined;
  return getCategoryBySlug(article.category);
}
