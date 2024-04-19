import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.finengine.tech/", 
  author: "wzktravel",
  desc: "wzktravel's blog",
  title: "wzktravel's blog",
  ogImage: "https://images.finengine.tech/favicon.ico",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN", "zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/wzktravel",
    linkTitle: `wzktravel on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/wzktravel_x",
    linkTitle: `wzktravel on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:wzktravel@gmail.com",
    linkTitle: `Send an email to wzktravel@gmail.com`,
    active: true,
  },
];
