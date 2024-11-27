import React from 'react'
import ImageGallery from "react-image-gallery"
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
const ProductGallery = () => {
    const images = [
  {
    original:`${mobile}`,

  },
  {
    original:`${mobile}`,
  },
  {
    original:`${mobile}`,
  },
];
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
   <ImageGallery items={images}
    defultImage={mobile}
    showFullscreenButton={false}
    isRTL={false}
    showPlayButton={false}
    showThumbnails={false}
    renderRightNav={RightButton}
    renderLeftNav={LeftButton}
   />
   </div>
  )
}

export default ProductGallery
