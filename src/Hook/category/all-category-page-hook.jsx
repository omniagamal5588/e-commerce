import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategory,getAllCategoryPage } from '../../redux/actions/categoryAction'

const AllCategoryPageHook = () => {
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllCategory(5));
    }, [])

    //to get state from redux
    const category = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)

    console.log(category)

    //to get page count
    let pageCount = 0;
    if (category.paginationResult)
        pageCount = category.paginationResult.numberOfPages

    //when press pagination
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page));
        console.log(page)
    }

    return [category,loading,pageCount,getPage]
}

export default AllCategoryPageHook
