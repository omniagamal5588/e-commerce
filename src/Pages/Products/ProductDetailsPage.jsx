import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../Hook/product/view-product-details-hook'


const ProductDetailsPage = () => {
   const {id} = useParams();
   const [item,images,category,brand,prod] = ViewProductDetailsHook(id );
   if(prod){
    var productItems = prod.slice(0,4)
   }
  return (
    <div style={{minHeight:'670px'}}>
      <CategoryHeader/>
      <Container>
        <ProductDetails/>
          <RateContainer/>
      </Container>
        <CardProductContainer products ={productItems}  title="منتجات قد تعجبك" />    
    </div>
  )
}

export default ProductDetailsPage
