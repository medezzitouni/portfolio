import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { withRouter } from 'next/router';
import { HeaderProps, Page } from '@types';
import { MobileMenu } from './MobileMenu';
import { FunctionComponent, useEffect, useState } from 'react';
import { cn } from '~lib/utils';
import { BASE_URL } from '~lib/constants';

const initial_pages: Page[] = [
  {
    name: 'Home',
    href: '/',
    active: false,
  },
  {
    name: 'Projects',
    href: '/projects',
    active: false,
  },
  {
    name: 'About',
    href: '/about',
    active: false,
  },
  {
    name: 'Posts',
    href: '/articles',
    active: false,
  },
];

const Header: FunctionComponent<HeaderProps> = ({
  router,
  className = `w-full px-6 lg:px-12  h-[12vh] mb-5 bg-secondary
 lg:shadow-sm lg:shadow-black flex flex-row fixed z-10`,
}) => {
    const [pages, setPages] = useState(initial_pages);
    
    useEffect(() => {
      const handleRouteChange = (url: any, { shallow }: { shallow: any}) => {
        setPages(pages.map(page => {
          page.active = BASE_URL + page.href == url;
          return page;
        }))
      }
  
      router.events.on('routeChangeComplete', handleRouteChange)
      
      // run once at the first component rendering 
      handleRouteChange(BASE_URL + router.pathname, { shallow: null});

      // If the component is unmounted, unsubscribe
      // from the event with the `off` method:
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
      
    }, [])
    return (
        <header className={className}>
          <div className="lg:basis-[20%] hidden lg:flex items-center ">
            <div onClick={() => router.back()} className={`rounded-full`}>
              <ArrowLeftIcon
                className="h-9 w-9 text-black shadow-md shadow-black rounded-full bg-primary p-2 "
              />
            </div>
          </div>
          <div className="grow lg:basis-[60%] flex flex-row items-center justify-end">
            {/* on small screens  */}
            <div className="flex order-last lg:order-none lg:hidden ">
              <MobileMenu pages={pages}  />
            </div>
            {/* on large screens  */}
            <div className=" hidden lg:flex gap-6">
              {pages.map(
                (page: Page, index): React.ReactNode => (
                  <Link
                    key={index}
                    className={cn(`
                        py-1
                        px-8
                        w-fit
                        rounded-full
                        text-black
                        font-amatic 
                        text-3xl
                        grid
                        place-items-center
                        shadow-md
                        shadow-black
                `, page.active ? 'bg-white' : 'bg-primary' )}
                    href={page.href}
                  >
                    {page.name}
                  </Link>
                ),
              )}
            </div>
            <div className="grow lg:grow-0 lg:ml-20 pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BASE_URL + '/assets/profile.png'}
                height={'60rem'}
                width={'60rem'}
                alt="profile"
                className=""
              />
            </div>
          </div>
        </header>
      )
};

export default withRouter(Header);
