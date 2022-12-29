import { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = ({ className="w-full h-[12vh] mb-2 bg-secondary shadow-sm shadow-black flex flex-row" }: HeaderProps) => (
    <header className={className}>
        <div className='basis-[50%] pl-6 lg:pl-12 flex items-center justify-start'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={process.env.BACKEND_URL + "/assets/profile.png"}
                height={"60rem"}
                width={"60rem"}
                alt="profile"
            />
        </div>
        <div className='basis-[50%] lg:basis-[45%] flex flex-col justify-center lg:items-end'>
            <Link
                className={`
                bg-primary 
                w-[80%]
                h-[50%]
                lg:w-[40%]
                lg:h-[50%]
                
                rounded-full
                
                text-black
                font-amatic 
                text-3xl

                grid
                place-items-center
                
                shadow-md
                shadow-black
            `} 
            href='/'   
            >
            Home
            </Link>
        </div>
    </header>
)

export default Header;