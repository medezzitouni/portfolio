import type { NextPage } from "next";
import styles from '../styles/Project.module.css'
// import Image from 'next/image'
import Layout from "../components/Layout/Layout";
import Crad from "../components/Card";
import { useCallback, useState } from "react";

const initialProjects: Project[] = [
    {   
        title: 'SuperChat' ,
        year: '2019',
        image: process.env.BACKEND_URL + "/assets/superChat.png",
        link:  'https://superchat.onrender.com',
        body:  'SuperChat is a small project made with Express, Socket.io, Firestore, and JQuery. It&apos;s a One-room chat between all users with simple authentication system.',
        category: 'Personal'
    },
    {   
        title: 'Easylens' ,
        year: '2021/2022',
        image: process.env.BACKEND_URL + "/assets/easylens.png",
        link:  'https://app.easylens.ma',
        body:  'EasyLens aims to make the optician workflow easier by moving the process of ordering optic products online, providing qualitative and professional features that help the optician automate his daily tasks, manage his inventory, discover new products and suppliers, order, and track orders, and more.',
        category: 'Professional'
    },
    {
        title: 'Ametys',
        year: '2019/2020',
        image: process.env.BACKEND_URL + "/assets/ametys.png",
        link:  'https://www.ametys.org/fr/index.html',
        body:  'Ametys solutions allow local authorities as well as public actors to create attractive web sites and portals adapted to the challenges and uses of citizens.Internally, they use Ametys products to create next-generation intranets and extranets: collaborative and connected to their business needs.',
        category: 'Professional'
    },
    {
        title: 'Walo',
        year: '2021/2022',
        image: process.env.BACKEND_URL + "/assets/walo.png",
        link:  'https://walo.app',
        body:  'Walo provides a solution to enhance the financial well-being of future generations through experiential learning. Not everyone has the chance to start their financial journey on the right foot. We created WALO to give every kid an opportunity to learn how to be financially healthy. We brought together a dedicated team with extensive work experience in multiple sectors to create a product that matters.',
        category: 'Professional'
    },
    
]

const initialCategories: Category[] = [
    {
        name: 'All',
        active: true
    },
    {
        name: 'Professional',
        active: false
    },
    {
        name: 'Personal',
        active: false
    },
    {
        name: 'Contribution',
        active: false
    },
    {
        name: 'Github',
        active: false
    },
]

const Project: NextPage = () => {
    
    const [categories, setCategories] = useState(initialCategories);
    const [projects, setProjects] = useState(initialProjects);
    
    const filterCategory = useCallback((category: string): void => {
        setCategories(categories.map((cat): Category => {
            cat.active = cat.name == category ? true : false;
            return cat;
        }))
        category == 'All' ? setProjects(initialProjects) : setProjects(projects.filter((pj) => pj.category == category))
    }, [])
    return (
    <Layout>
        <div className='min-h-[78vh] pt-6 px-6 flex flex-col items-center'>
            <div className="mb-6 hidden lg:flex">
                {categories.map((category: Category, index: number) => (
                    <div
                        onClick={() => filterCategory(category.name)}
                        key={index}
                        className={`
                            mr-5 py-2 px-3 
                            cursor-pointer 
                            font-mono text-sm 
                            shadow-sm shadow-black  
                            ${category.active ? 'bg-white text-black' : 'bg-black text-white'}
                            rounded-full
                        `}
                    >{category.name}</div>
                ))}
            </div>
            {projects.length ? 
                <div className='grid gap-5 lg:grid-cols-3 '>
                    { projects.sort(
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
                    )}
                </div> 
            : 
                <div className="grid place-items-center w-full min-h-[50vh]">
                    <div
                        className="bg-white text-black p-5 rounded-xl"
                    >
                        Still Not Listed
                    </div>
                </div>
            }
        </div>
    </Layout>
  );
};
export default Project;
