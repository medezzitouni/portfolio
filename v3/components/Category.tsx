import { NextPage } from 'next'
import React, { useCallback, useState } from 'react'
import type { Category as CategoryType, CategoryProps } from '../types';

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

const Category: NextPage<CategoryProps> = ({ data=initialCategories, filter}: CategoryProps) => {

    const [categories, setCategories] = useState(initialCategories);
    
    const filterProjects = useCallback((category: string): void => {
        setCategories(data.map((cat): CategoryType => {
            cat.active = cat.name == category ? true : false;
            return cat;
        }))
        filter(category)
    }, [])
  return (
    <>
        {
            data.map((category: CategoryType, index: number) => (
                <div
                    onClick={() => filterProjects(category.name)}
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
            ))
        }
    </>
  )
}

export default Category;
