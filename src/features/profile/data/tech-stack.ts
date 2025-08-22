import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  {
    key: "html",
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751957808/html5-original.svg",
  },
  {
    key: "css",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958251/css3-original.svg",
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958251/javascript-original.svg",
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958251/typescript-original.svg",
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958651/react-original.svg",
  },
  {
    key: "next-js",
    title: "Next.JS",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751960617/nextjs-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751960617/nextjs-dark-original.svg",
  },
  {
    key: "bootstrap",
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
    categories: ["Framework"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752045132/bootstrapcss-original.svg",
  },
  {
    key: "tailwind-css",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958648/tailwindcss-original.svg",
  },
  {
    key: "ant-design",
    title: "Ant Design",
    href: "https://ant.design/",
    categories: ["Library", "UI Library"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752031037/antdesign-original.svg",
  },
  {
    key: "shadcn-ui",
    title: "Shadcn UI",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752025357/shadcn-ui-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752025358/shadcn-ui-dark-original.svg",
  },
  {
    key: "origin-ui",
    title: "Origin UI",
    href: "https://originui.com/",
    categories: ["Library", "Component Library"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958671/originui-original.svg",
  },
  {
    key: "radix-ui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752025999/radixui-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752026000/radixui-dark-original.svg",
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752026202/redux-original.svg",
  },
  {
    key: "node-js",
    title: "Node.JS",
    href: "https://nodejs.org/en",
    categories: ["Runtime Environment"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752026790/nodejs-original.svg",
  },
  {
    key: "yarn",
    title: "Yarn",
    href: "https://yarnpkg.com/",
    categories: ["Runtime Environment"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752030490/yarn-original.svg",
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh",
    categories: ["Runtime Environment"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752028684/bun-original.svg",
  },
  {
    key: "express-js",
    title: "Experess.JS",
    href: "https://expressjs.com/",
    categories: ["Framework"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027080/express-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027081/express-dark-original.svg",
  },
  {
    key: "loopback",
    title: "LoopBack",
    href: "https://loopback.io/",
    categories: ["Framework"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752031514/loopback-original.svg",
  },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752032003/react-router-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752032004/react-router-dark-original.svg",
  },
  {
    key: "react-navigation",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    categories: ["Framework"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752032004/react-navigation-original.svg",
  },
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027799/rust-original.svg",
  },
  {
    key: "solidity",
    title: "Solidity",
    href: "https://soliditylang.org/",
    categories: ["Language"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027524/solidity-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027524/solidity-dark-original.svg",
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752028556/mysql-original.svg",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752028556/mongodb-original.svg",
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752032003/redis-original.svg",
  },
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Database"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752028555/supabase-original.svg",
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Tools"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029158/git-original.svg",
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Tools"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029479/vercel-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029479/vercel-dark-original.svg",
  },
  {
    key: "chat-gpt",
    title: "ChatGPT",
    href: "hthttps://chatgpt.com/",
    categories: ["Tools"],
    theme: true,
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029833/chatgpt-light-original.svg",
    darkImage:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029834/chatgpt-dark-original.svg",
  },
  {
    key: "wordpress",
    title: "Wordpress",
    href: "https://wordpress.com/",
    categories: ["Builder"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029960/wordpress-original.svg",
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752030636/motion-original.svg",
  },
  {
    key: "canva",
    title: "Canva",
    href: "https://www.canva.com/",
    categories: ["UI/UX Design"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752030293/canva-original.svg",
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["UI/UX Design"],
    image:
      "https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029960/figma-original.svg",
  },
];
