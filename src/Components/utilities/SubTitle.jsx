import React from 'react'
import { Link } from 'react-router-dom'
const SubTitle = ({title,btnTitle,pathText}) => {
  return (
    <div className='d-flex justify-content-between pt-4'>
       
        {
            btnTitle?(
              <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                <div className='shopping-now'>
                    {btnTitle}
                </div>
                </Link>
            ):null
        }
        
         <div className='sub-title'>{title}</div>
    
      
    </div>
  )
}

export default SubTitle
