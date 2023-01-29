import React, { useCallback, useEffect, FunctionComponent } from 'react'
import type { Category as CategoryType, CategoryProps } from '@types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '~store';
import { setActiveCat, setInitialCat } from '~store/sliceProjects';
import { setInitialProjects, filterProjects } from "~store/sliceProjects";

const Category: FunctionComponent<CategoryProps> = ({ data, bg_active='bg-white text-secondary', bg_inactive='bg-secondary text-white', filter, clear=() => {} }: CategoryProps) => {

    const categories: CategoryType[] = data || useSelector((state: AppState) => state.projectState.categories);
    const dispatch = useDispatch();

    const filterData = filter || useCallback((category: string): void => {
        category == 'All' ? dispatch(setInitialProjects(null)) : dispatch(filterProjects(category)) 
    }, []);


    useEffect(() => {
        dispatch(setInitialCat(null));
    }, [])

    const setCatAndFilterData = useCallback((category: string): void => {
        dispatch(setActiveCat(category));
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