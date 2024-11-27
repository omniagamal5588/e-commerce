import React from 'react'
import ProductCard from '../Products/ProductCard'
import { Row } from 'react-bootstrap'
import Pagination from '../utilities/Pagination'
const UserFavoriteProduct = () => {
   return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct
