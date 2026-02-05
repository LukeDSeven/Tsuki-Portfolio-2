import { Project, Service, Testimonial } from './types';
import { Music } from 'lucide-react';

export const SITE_CONFIG = {
  name: "Tsuki Studio",
  tagline: "Indie motion & 2D animation for music.",
  email: "", // Removed email
  socials: {
    instagram: "https://www.instagram.com/studiotsuki.co/",
    twitter: "https://x.com/studiotsuki",
    // Vimeo removed
  },
  ctaLink: "/contact"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "watch-me-burn",
    title: "Watch Me Burn",
    category: "Music",
    year: "2026",
    // Using the high-res YouTube thumbnail
    thumbnail: "https://img.youtube.com/vi/nRrlBdv7HaA/maxresdefault.jpg",
    videoUrl: "nRrlBdv7HaA", // YouTube ID
    shortDescription: "Official Music Video for Brandon Yates.",
    fullDescription: "Official music video for Brandon Yates. A high-octane animated experience focusing on intensity and action.",
    client: "Brandon Yates",
    credits: ["Dir: Luke", "Prod: Akage", "Katsu", "Luck", "Luke", "Redzz", "Sppuma"],
    tools: ["After Effects"],
    duration: "3:45"
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Animated Music Clips",
    description: "We create animated music clips for artists who want cinematic visuals to bring their songs to life.",
    bullets: [], 
    icon: "Music"
  }
];

export const PROCESS_STEPS = []; 

export const TESTIMONIALS: Testimonial[] = []; 

// Empty list as requested (programs removed from general list)
export const TOOLS_LIST = [];