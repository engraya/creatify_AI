import { SidebarNavItem, SiteConfig } from "types";

const site_url = "https://twitter.com/egraya";

export const siteConfig: SiteConfig = {
  name: "Creatify_AI",
  description:
    "Creatify_AI helps you generate high-quality content effortlessly, from blog posts to social media captions and everything in between",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    portfolio: "https://engrahmadaya.vercel.app/",
    github: "https://github.com/engraya",
  },
  mailSupport: "engrahmadaya@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "/pricing" },
      { title: "FAQ", href: "#" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Help Center", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },
];
