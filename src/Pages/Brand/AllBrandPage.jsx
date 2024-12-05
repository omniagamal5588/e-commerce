import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/utilities/Pagination'
import AllBrandHook from '../../Hook/brand/all-brand-page-hook'


const AllBrandPage = () => {
   const [brand, loading, pageCount, getPage] = AllBrandHook();
   
  return (
    <div> 
       <BrandContainer data={brand.data} loading={loading} />
            <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  )
}

export default AllBrandPage
