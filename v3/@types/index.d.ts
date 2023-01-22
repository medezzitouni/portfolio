import { NextRouter } from "next/router";
interface LayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

interface Category {
  name: string;
  active: boolean;
}
interface ComingSoonProps {
  router: NextRouter;
  pathname?: boolean;
}
interface Page {
  href: string;
  name: string;
  active: boolean;

}
interface CategoryProps {
  data?: Category[];
  filter?: (category: string) => void;
  bg_active?: string;
  bg_inactive?: string;
  clear?: () => void;  
}
interface HeaderProps {
  className?: string;
  router: NextRouter;
}

interface SocialProps {
  children?: React.ReactNode;
  show?: boolean;
  vertical?: boolean;
}

interface CardProps {
  children?: React.ReactNode;
  image: string;
  title: string;
  link?: string;
  body?: string;
  year?: string;
}

interface Project {
  title: string;
  year: string;
  image: string;
  link: string;
  body: string;
  category: "Professional" | "Personal" | "Contribution" | "Github";
}
