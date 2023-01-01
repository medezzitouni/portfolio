import type { NextPage } from "next";
import styles from '../styles/Project.module.css'
// import Image from 'next/image'
import Layout from "../components/Layout/Layout";
import Crad from "../components/Card";
import { useEffect } from "react";
import Category from "../components/Category";
import type { Project as ProjectTypes, Category as CategoryType } from '../types'
import { useDispatch, useSelector } from "react-redux";
import { AppState} from '../store/';
import { setInitialProjects } from "../store/sliceProjects";



const initialCategories: CategoryType[] = [
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
    
    const projects: ProjectTypes[] = useSelector((state: AppState) => state.projects.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitialProjects(null));
    }, [])
    return (
    <Layout>
        <div className='min-h-[76vh] px-6 flex flex-col items-center'>
            <div className="mb-6 hidden lg:flex ">
                <Category />
            </div>
            {projects.length ? 
                <div className='grid gap-5 lg:grid-cols-3'>
                    { projects.map(({ title, year, image, link, body }, index) => (
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
