import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/utilities/Pagination'
import AllCategoryPageHook from '../../Hook/category/all-category-page-hook'


const AllCategoryPage = () => {
   const [category, loading, pageCount, getPage] = AllCategoryPageHook();

    return (
        <div style={{ minHeight: '670px' }}>

            <CategoryContainer data={category.data} loading={loading} />
            {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
            }

        </div>
    )
}

export default AllCategoryPage
