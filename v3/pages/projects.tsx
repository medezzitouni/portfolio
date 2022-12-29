import type { NextPage } from "next";
import styles from '../styles/Project.module.css'
// import Image from 'next/image'
import Layout from "../components/Layout/Layout";
import Crad from "../components/Card";

const projects: Project[] = [
    {   
        title: 'SuperChat' ,
        year: '2019',
        image: process.env.BACKEND_URL + "/assets/superChat.png",
        link:  'https://superchat.onrender.com',
        body:  'SuperChat is a small project made with Express, Socket.io, Firestore, and JQuery. It&apos;s a One-room chat between all users with simple authentication system.'
    },
    {   
        title: 'Easylens' ,
        year: '2019/2022',
        image: process.env.BACKEND_URL + "/assets/easylens.png",
        link:  'https://app.easylens.ma',
        body:  'EasyLens aims to make the optician workflow easier by moving the process of ordering optic products online, providing qualitative and professional features that help the optician automate his daily tasks, manage his inventory, discover new products and suppliers, order, and track orders, and more.'
    },
    {
        title: 'Ametys',
        year: '2019/2020',
        image: process.env.BACKEND_URL + "/assets/ametys.png",
        link:  'https://www.ametys.org/fr/index.html',
        body:  'Ametys solutions allow local authorities as well as public actors to create attractive web sites and portals adapted to the challenges and uses of citizens.Internally, they use Ametys products to create next-generation intranets and extranets: collaborative and connected to their business needs.'
    },
    {
        title: 'Walo',
        year: '2021/2022',
        image: process.env.BACKEND_URL + "/assets/walo.png",
        link:  'https://www.ametys.org/fr/index.html',
        body:  'Walo provides a solution to enhance the financial well-being of future generations through experiential learning. Not everyone has the chance to start their financial journey on the right foot. We created WALO to give every kid an opportunity to learn how to be financially healthy. We brought together a dedicated team with extensive work experience in multiple sectors to create a product that matters.'
    },
    
]


const Project: NextPage = () => {
  return (
    <Layout>
        <div className='min-h-[78vh] pt-6 px-6 grid place-items-center'>
            <div className='grid gap-5 lg:grid-cols-3'>
                {projects.sort(
                    (p1: Project , p2: Project) => {
                        return p1.year == p2.year ? 0 
                                : ( p1.year < p2.year ? -1 : 1)
                    }
                ).map(({ title, year, image, link, body }, index) => (
                    <Crad 
                        key={index}
                        title={title}
                        image={image}
                        link={link}
                        body={body}
                        year={year}
                    />)
                )
                }
            </div>
        </div>
    </Layout>
  );
};
export default Project;
