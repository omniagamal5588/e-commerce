import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/utilities/SearchCountResult'
import SideFilter from '../../Components/utilities/SideFilter'
import { Row,Col,Container } from 'react-bootstrap'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import Pagination from '../../Components/utilities/Pagination'
import ViewSearchProductHook from '../../Hook/product/view-search-product-hook'
const ShopProductPage = () => {

    const [searchProducts,pagination,onPress,getProduct, results] = ViewSearchProductHook();
    if(pagination){
         var pageCount=pagination
    }else{
        pageCount=0
    }
 return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult onClick={getProduct}  title={`هناك ${results} نتجة بحث`}/>
                <Row className='d-flex flex-row'>
                      <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    
                    <Col sm="10" xs="10" md="11">
                        <CardProductContainer products={searchProducts}  title="" btntitle="" />
                    </Col>
                </Row>
                    {
                        pageCount >1 ? ( <Pagination pageCount={pageCount} onPress={onPress} />):null
                    
                    }
                
            </Container>
        </div>
    )
}

export default ShopProductPage
