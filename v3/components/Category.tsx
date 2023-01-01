import { NextPage } from 'next'
import React, { useCallback, useEffect } from 'react'
import type { Category as CategoryType, CategoryProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { setActive, setInitialCat } from '../store/SliceCategory';
import { setInitialProjects, filterProjects } from "../store/sliceProjects";

const Category: NextPage<CategoryProps> = ({ data, bg_active='bg-white text-secondary', bg_inactive='bg-secondary text-white', filter, clear=() => {} }: CategoryProps) => {

    const categories: CategoryType[] = data || useSelector((state: AppState) => state.categories.data);
    const dispatch = useDispatch();

    const filterData = filter || useCallback((category: string): void => {
        category == 'All' ? dispatch(setInitialProjects(null)) : dispatch(filterProjects(category)) 
    }, []);


    useEffect(() => {
        dispatch(setInitialCat(null));
    }, [])

    const setCatAndFilterData = useCallback((category: string): void => {
        dispatch(setActive(category));
        filterData(category);
        clear();
    }, [])
  return (
    <>
        {
            categories.map((category: CategoryType, index: number) => (
                <div
                    onClick={() => setCatAndFilterData(category.name)}
                    key={index}
                    className={`
                        mr-5 py-2 px-3 
                        cursor-pointer 
                        font-mono text-sm 
                        shadow-sm shadow-black  
                        ${category.active ? bg_active : bg_inactive}
                        rounded-full
                    `}
                >{category.name}</div>
            ))
        }
    </>
  )
}

export default Category;
