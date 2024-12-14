import React, { useEffect } from 'react'
import {getOneProduct, getProductsLike} from '../../redux/actions/productAction'
import { useDispatch , useSelector } from 'react-redux'
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../redux/actions/categoryAction'
import { getOneBrand } from '../../redux/actions/brandAction'

const ViewProductDetailsHook = (id) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneProduct(id))
       
    }, [id])

    const oneProduct = useSelector((state) => state.allproducts.oneProduct)
    //to show products item
    let item = [];
    if (oneProduct.data)
        item = oneProduct.data;
    else
        item = []

     let images = []
    if (item.images)
        images = item.images.map((img) => { return { original: img } })
    else {
        images = [{ original: `${mobile}` }]
    }
// to render category
 useEffect(()=>{
    if(item.category){
        dispatch(getOneCategory(item.category))
        dispatch(getProductsLike(item.category))
    }
 },[item])

const oneCategory = useSelector((state)=> state.AllCategory.oneCategory)
const productLike = useSelector((state) => state.allproducts.productLike)
// to show category item
let category = []
if (oneCategory.data)
    category = oneCategory.data
    else{
        category = []
    }

    const oneBrand = useSelector((state)=> state.AllBrand.oneBrand)
// to view one brand
    useEffect(()=>{
        if(item.brand){
            dispatch(getOneBrand(item.brand))
        }
    },[item])

    let brand = []
    if(oneBrand.data)
        brand = oneBrand.data
        else{
            brand=[]
        }
    let prod=[]
    if(productLike)
        prod = productLike.data
    else{
        prod=[]
    }
    return [item,images,category,brand,prod]
}

export default ViewProductDetailsHook
