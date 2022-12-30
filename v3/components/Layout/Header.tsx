import { NextPage } from "next";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import { withRouter } from "next/router";
import { HeaderProps, Page } from "../../types";
import { MobileMenu } from "./MobileMenu";

const pages: Page[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Articles',
        href: '/articles'
    },
] 
const Header: NextPage<HeaderProps> = ({ router, className="w-full px-6 lg:px-12  h-[12vh] mb-6 bg-secondary lg:shadow-sm lg:shadow-black flex flex-row" }: HeaderProps) => (
    <header className={className}>
        <div className='lg:basis-[20%] hidden lg:flex items-center'>
            <div
                onClick={() => router.back()}
                className={`rounded-full bg-black`}
                
            >
              <BsArrowLeftCircle className="shadow-md shadow-black rounded-full" size={30} />
            </div>      
        </div>
        <div className='grow lg:basis-[60%] flex flex-row items-center justify-end'>
            {/* on small screens  */}
            <div 
                className="flex order-last lg:order-none lg:hidden "
            >
                <MobileMenu />
            </div>
            {/* on large screens  */}
            <div className=" hidden lg:flex gap-6">
                {pages.map((page: Page, index): React.ReactNode => (
                    <Link
                        key={index}
                        className={`
                            bg-primary 
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
                        `} 
                        href={page.href}   
                    >
                        {page.name}
                    </Link>
                ))}
            </div>
             <div className="grow lg:grow-0 lg:ml-20 pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={process.env.BACKEND_URL + "/assets/profile.png"}
                    height={"60rem"}
                    width={"60rem"}
                    alt="profile"
                    className=""
                />
            </div>
        </div>
    </header>
)

export default withRouter(Header);