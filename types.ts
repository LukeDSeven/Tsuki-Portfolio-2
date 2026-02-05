export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'All' | 'Music' | 'Game' | 'Ads' | 'Experimental';
  year: string;
  thumbnail: string;
  videoUrl?: string; // YouTube/Vimeo embed ID or URL
  shortDescription: string;
  fullDescription: string;
  client?: string;
  credits: string[];
  tools: string[];
  duration?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavItem {
  label: string;
  href: string;
}
