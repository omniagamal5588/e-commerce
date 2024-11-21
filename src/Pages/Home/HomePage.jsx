import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeature'


const HomePage = () => {
  return (
    <div>
    
      <Slider/>
      <HomeCategory/>
      <CardProductContainer title="الاكثر مبيعا" btnTitle="المزيد" pathText='/allproducts'/>
      <DiscountSection/>
      <CardProductContainer title="احدث الازياء" btnTitle="المزيد" pathText='/allproducts'/>
      <BrandFeatured title="اشهر الماركات" btnTitle="المزيد"  />
       
    </div>
  )
}

export default HomePage
