import bestOfCebuImg   from '../assets/best-of-cebu.jpg'
import dashboardImg    from '../assets/demos/dashboard.png'
import wellnessImg     from '../assets/demos/wellness.png'
import sampleIssueImg  from '../assets/demos/sample-issue.png'

const BASE = import.meta.env.BASE_URL

export const portfolioItems = [
  {
    id: 1,
    src: bestOfCebuImg,
    title: 'Best of Cebu — Editorial Guide',
    category: 'Web · Editorial',
    description:
      'Co-creating Best of Cebu with my partner Brian — a curated, magazine-style guide to the Queen City of the South. Editorial layout, photography-first feature pages, and a hand-picked roster of restaurants, cafés, and venues that actually matter. Currently in development pending trademark approval.',
    link: 'https://dev.bestofcebu.com',
  },
  {
    id: 2,
    src: dashboardImg,
    title: 'Bloom Boutique — Monthly Dashboard',
    category: 'Web Dashboard',
    description:
      'A one-page client performance dashboard for a local boutique — followers, reach, engagement, top posts, and a 14-day reach chart. Designed to be skimmable in under a minute by non-marketing stakeholders. Click to open the live demo.',
    link: `${BASE}demos/dashboard.html`,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&q=80',
    title: 'Bloom Boutique — Spring Launch',
    category: 'Social Media Campaign',
    description:
      'Two-week Instagram & Facebook rollout for a Cebu boutique launching its spring collection. Created a 14-post grid, 9 story takeovers, and a Reels teaser — page reach grew 312% and the campaign drove 180+ DM inquiries in the first month.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80',
    title: 'Café Luna — Brand Identity Kit',
    category: 'Graphic Design',
    description:
      'A full Canva-based brand kit for a small Cebu café: logo lockups, IG story templates, menu cards, and a 12-post launch grid. Built around a warm pastel palette (blush, cream, terracotta) so every touchpoint felt like the same room.',
  },
  {
    id: 5,
    src: wellnessImg,
    title: 'A Little Bloom — Wellness Micro-site',
    category: 'Web · Wellness',
    description:
      'A tiny, calming web companion that surfaces one wellness tip at a time — mind, body, movement, sleep. Soft palette, minimal interface, no signup. Click to flip through the tips yourself.',
    link: `${BASE}demos/wellness.html`,
  },
  {
    id: 6,
    src: sampleIssueImg,
    title: 'The Bloom Letter — Sample Issue',
    category: 'Web · Editorial',
    description:
      'The inaugural sample issue of The Bloom Letter, a student-press newsletter for the University of Cebu. Magazine-style masthead, lead feature, three secondary articles, a pull quote, and an editor\'s note — built to feel like a print issue you happen to be reading on screen.',
    link: `${BASE}demos/sample-issue.html`,
  },
]
