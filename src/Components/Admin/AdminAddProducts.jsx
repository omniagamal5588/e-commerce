import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import MultiImageInput from 'react-multiple-image-input';
import add from '../../images/add.png'
import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import addProductHook from '../../Hook/product/add-product-hook';

const AdminAddProducts = () => { 
   const [onChangeDesc, onChangeQty, onChangeColor, onChangePriceBefore, onChangePriceAfter, onChangeProdName,
     showColor, category, brand ,priceAfter, images, setImages, onSelect, onRemove,
      options, handleChangeComplete, removeColor, onSelectCategory,handleSubmit, onSelectBrand, colors, 
      priceBefore, qty, prodDesc, prodName , crop] = addProductHook();
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                   <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        max={5}
                        cropConfig={{ crop, ruleOfThirds: true }}
                        />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                        value={prodName}
                        onChange={onChangeProdName}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        value={prodDesc}
                        onChange={onChangeDesc}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        value={priceBefore}
                        onChange={onChangePriceBefore}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                        value={priceAfter}
                        onChange={onChangePriceAfter}
                    />
                     <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select
                        name="cat"
                        id="cat"
                        onChange={onSelectCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            category.data?(
                                category.data.map((item)=>{
                                    return(<option value={item._id}>{item.name}</option>)
                                })
                            ):null
                        }
                        
                       
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                   
                    <select
                        name="brand"
                        id="brand"
                        onChange={onSelectBrand}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">الماركة</option>
                        {
                            brand.data?(
                                brand.data.map((item)=>{
                                    return(<option value={item._id}>{item.name}</option>)
                                })
                            ):null
                        }
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1? (
                                colors.map((color, index)=>{
                                    return(
                                         <div
                                            key={index}
                                            onClick={()=> removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor:color }}></div>
                                    )

                                })

                            ):null
                        }
                       
                        <img src={add} alt="" width="30px" height="35px" className="" style={{cursor:'pointer'}} 
                        onClick={onChangeColor} />
                        {
                            showColor === true ?  <CompactPicker onChangeComplete={handleChangeComplete} /> :null
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 "  onClick={handleSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminAddProducts