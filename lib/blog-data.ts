export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: 'Impact' | 'Community' | 'Tech' | 'Policy' | 'Leadership' | 'Update' | 'Story';
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'vacant-lot-transformation',
    title: 'How One Neighborhood Transformed a Vacant Lot into a Community Hub',
    excerpt: 'When the city council stalled, these neighbors took action. A deep dive into the collaborative process, funding hurdles, and the ultimate triumph of grassroots organization.',
    content: `
# How One Neighborhood Transformed a Vacant Lot into a Community Hub

**By Sarah Jenkins** | *Oct 24, 2025*

It started with a fence. A chain-link eyesore that had surrounded the empty lot on 4th and Elm for as long as anyone could remember. "It was just a magnet for trash," says Maria, a resident of the neighborhood for 15 years. "We walked past it every day, shaking our heads."

But last summer, something changed. Instead of looking away, Maria and her neighbors started looking *at* it—enVisioning what it could be.

## The Spark

The initiative began on the Wihda platform. A simple post in the neighborhood feed: *"What if we cleaned up the lot on 4th?"*

Within hours, the post had 50 comments. Within a week, a committee was formed.

## The Process

Transforming a neglected space isn't as simple as planting a few flowers. The group faced significant hurdles:

1.  **Ownership Rights:** Tracking down the absentee landlord took three months of public records research.
2.  **City Permits:** Getting approval for a community garden required navigating a maze of zoning laws.
3.  **Funding:** They needed tools, soil, seeds, and lumber.

"We almost gave up twice," admits David, who took lead on the legal front. "The paperwork alone was a mountain."

## Crowdsourcing Solutions

This is where the community really shined. Using Wihda's resource sharing feature, the group put out a call for help.

*   **Lumber** was donated by a local construction firm that saw the project trending on the app.
*   **Legal Aid** came from a retired lawyer living just three blocks away.
*   **Labor** was provided by over 100 volunteers over four weekends.

## A New Heart for the Neighborhood

Today, the "4th Street Commons" is thriving. It features raised garden beds, a small playground, and a central gazebo for community meetings.

"It's not just about the garden," says Sarah Jenkins, who documented the entire journey. "It's about proving to ourselves that we have the power to change our environment. We didn't wait for permission to care about our home."

The success of 4th Street has inspired three similar projects in neighboring districts. It serves as a powerful reminder: change doesn't always come from the top down. Sometimes, it grows right up from the grassroots.
    `,
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Oct 24, 2025',
    readTime: '5 min read',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop', // Community planning
    featured: true
  },
  {
    slug: 'digital-tools-analog-problems',
    title: 'Bridging the Gap: Digital Tools for Analog Problems',
    excerpt: "Technology isn't a silver bullet, but it can be a powerful catalyst. How Wihda's latest update simplifies reporting infrastructure issues.",
    content: `
# Bridging the Gap: Digital Tools for Analog Problems

Technological solutions are often criticized for being out of touch with on-the-ground realities. However, when designed with the community in mind, they can bridge significant gaps.

This article explores how digital reporting tools are helping municipalities respond 40% faster to infrastructure issues like potholes and broken streetlights.
    `,
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Oct 20, 2025',
    readTime: '4 min read',
    category: 'Impact',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop' // Technology/Coding
  },
  {
    slug: 'new-civic-engagement-framework',
    title: 'Understanding the New Civic Engagement Framework',
    excerpt: 'A breakdown of the recent legislative changes affecting local NGOs and how community groups can adapt their strategies.',
    content: `# Understanding the New Civic Engagement Framework...`,
     author: {
      name: "David O'Reilly",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Oct 18, 2025',
    readTime: '7 min read',
    category: 'Policy',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop' // Meeting/Policy
  },
  {
    slug: 'meet-amina',
    title: 'Voices of Wihda: Meet Amina',
    excerpt: '"I didn\'t think one person could change the school board policy." An interview with a local mother who proved herself wrong.',
    content: `# Voices of Wihda: Meet Amina...`,
    author: {
      name: 'Wihda Team',
      avatar: 'https://ui-avatars.com/api/?name=Wihda+Team&background=86c536&color=fff' // Fallback or logo
    },
    date: 'Oct 12, 2025',
    readTime: '3 min read',
    category: 'Story',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop' // Portrait
  },
   {
    slug: 'open-source-governance',
    title: 'Open Source for Open Governance',
    excerpt: 'Why we decided to open source our core data modules, and what this means for developers looking to contribute to civic tech.',
    content: `# Open Source for Open Governance...`,
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Sep 28, 2025',
    readTime: '6 min read',
    category: 'Tech',
     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop' // Code
  },
  {
    slug: 'wihda-summit-recap',
    title: 'The Annual Wihda Summit: Recap',
    excerpt: 'Highlights from our biggest event yet. 500+ attendees, 30 workshops, and one shared vision for a better tomorrow.',
    content: `# The Annual Wihda Summit: Recap...`,
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Sep 25, 2025',
    readTime: '5 min read',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop' // Crowd/Event
  },
  {
    slug: 'leading-with-empathy',
    title: 'Leading with Empathy: A Guide for Local Officials',
    excerpt: 'Effective leadership starts with listening. We explore strategies for officials to better connect with the lived experiences of their constituents.',
    content: `# Leading with Empathy...`,
    author: {
      name: "David O'Reilly",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
    },
    date: 'Sep 15, 2025',
    readTime: '8 min read',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop' // Leadership/Handshake
  }
];


export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit: number = 2): BlogPost[] {
  return BLOG_POSTS
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}
