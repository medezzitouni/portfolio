import Socials from "../Socials";

const Footer = () => (
    <footer className="h-[10vh] grid place-items-center">
        <div className="w-[70%] lg:w-1/3">
            <Socials vertical={false} show={false} />
        </div>
    </footer>
);


export default Footer;