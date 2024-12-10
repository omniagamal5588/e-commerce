import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeature'
import ViewHomeProductHook from '../../Hook/product/view-home-product-hook'

 
const HomePage = () => {
  const [items] = ViewHomeProductHook();
  return (
    <div>
    
      <Slider/>
      <HomeCategory/>
      <CardProductContainer title="الاكثر مبيعا"  products={items} btnTitle="المزيد" pathText='/allproducts'/>
      <DiscountSection/>
      <CardProductContainer title="احدث الازياء"  products={items}  btnTitle="المزيد" pathText='/allproducts'/>
      <BrandFeatured title="اشهر الماركات"  btnTitle="المزيد"  />
       
    </div>
  )
}

export default HomePage
