
interface LayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode
}

interface Category {
  name: string;
  active: boolean;
}
interface HeaderProps {
  className?: string;
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
  link:  string;
  body:  string;
  category: 'Professional' | 'Personal' | 'Contribution' | 'Github';
}