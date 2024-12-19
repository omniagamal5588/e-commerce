import React, { useEffect } from 'react'
import { getAllProducts, getAllProductSearch } from '../../redux/actions/productAction'
import { useDispatch , useSelector } from 'react-redux'
import { getAllProductsPage } from '../../redux/actions/productAction'

const ViewSearchProductHook = () => {
    let limit = 8;
    ////////////////////////
        let word ='' ,queryCat ="" , queryBrand ="" ,priceFrom="" , priceTo=""
        let priceFromString="" , priceToString=""
    //////////////////
    const dispatch = useDispatch();
    const getProduct = async()=>{
       getStorage()
        sortData();
      await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}
        ${priceFromString}${priceToString}`))
    }

    useEffect(()=>{
       getProduct()
    },[])
    // get all products 
    const allProducts = useSelector((state)=> state.allproducts.allProducts)
    let searchProducts =[]
    try{
    if(allProducts.data){
        searchProducts = allProducts.data // array of object
    }else{
        searchProducts =[]
    }
    } catch(e){}

//pagination
    const onPress = async (page) => {
        getStorage()
        sortData()
        await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}
            ${priceFromString}${priceToString}`))
        }

        const getStorage =()=>{
            if(localStorage.getItem("searchWord") != null)
                word = localStorage.getItem("searchWord")
            if(localStorage.getItem("catChecked") != null)
                queryCat= localStorage.getItem("catChecked")
            if(localStorage.getItem("brandChecked") != null)
                queryBrand= localStorage.getItem("brandChecked")
             if(localStorage.getItem("priceFrom") != null)
                priceFrom= localStorage.getItem("priceFrom")
            if(localStorage.getItem("priceTo") != null)
                priceTo= localStorage.getItem("priceTo")

             
                if(priceFrom === "" ||priceFrom <=0 ){
                    priceFromString=""
                }else{
                    priceFromString=`&price[gte]=${priceFrom}`
                }
                if(priceTo === "" ||priceTo <=0 ){
                    priceToString=""
                }else{
                    priceToString=`&price[lte]=${priceTo}`
                }
        }






        let pagination = [];
       
        try {
            if (allProducts.paginationResult)
                pagination = allProducts.paginationResult.numberOfPages;
            else
                pagination = []
        } catch (e) { }

        let results = 0;
        try{
            if(allProducts.results)
                results = allProducts.results
            else
                results = 0;
        }catch(e){}

        //when user choose sort type
        let sortType = "", sort;
        const sortData =()=>{
            if(localStorage.getItem("sortType") !== null){
                sortType = localStorage.getItem("sortType")
            }
            else{
            sortType =""
            }
            if (sortType === "السعر من الاقل للاعلي")
                sort = "+price"
            else if (sortType === "السعر من الاعلي للاقل")
                sort = "-price"
            else if (sortType === "")
                sort = ""
            else if (sortType === "الاكثر مبيعا")
                sort = "-sold"
            else if (sortType === "الاعلي تقييما")
            sort = "-quantity"
        }
    return [searchProducts,pagination,onPress, getProduct, results]
}

export default ViewSearchProductHook
