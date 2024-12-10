import avatar from '../../images/avatar.png'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getOnecategory } from '../../redux/actions/subcategoryAction';
import { creatProduct } from '../../redux/actions/productAction';
import notify from './../../Hook/useNotifcation'

const addProductHook = () => {
   //image state
    const [images,setImages]=useState([])
    //form data states
    const [prodName , setProdName] = useState('')
    const [prodDesc , setProdDesc] = useState('')
    const [priceBefore , setPriceBefore] = useState("")
    const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم")
    const [ qty , setQty] = useState("الكمية بعد الخصم")
    const [catID , setCatID]= useState('')
    const [brandId , setBrandId] = useState('')
    const [subCatId , setSubCatId] = useState([])
    const [selectedSubId,setSelectedSubId] = useState([])
    const [showColor,setShowColor] = useState(false)
    const [colors, setColors]=useState([])
    const[options , setOptions]= useState([])
    const [loading,setLoading] = useState(true)

    // on change values of inputs
     //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesc = (event) => {
        event.persist();
        setProdDesc(event.target.value)
    }
    //to change name state
    const onChangePriceBefore = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    // dispatch get all category and get all brand
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand())
    }, [])

    const category = useSelector(state=> state.AllCategory.category)
    const brand = useSelector(state=>state.AllBrand.brand)
    const product = useSelector(state=>state.allproducts.product)
    const subCat = useSelector(state => state.SubCategory.subcategory)


    // for select subcategory
    const onSelectCategory= async(e)=>{
        if(e.target.value !== 0){
          await  dispatch(getOnecategory(e.target.value))
        }
        setCatID(e.target.value)
    }

//on select brand
    const onSelectBrand =(e)=>{
        setBrandId(e.target.value)
        console.log(e.target.value)
    }
    // on select colors
    const handleChangeComplete =(color)=>{
        setColors([...colors , color.hex])
        setShowColor(!showColor)
    }

    const removeColor=(color) => {
        const newColorsList = colors.filter((e)=> e !== color)
        setColors(newColorsList)
        console.log('color is removed', color)

    }
    // for hold subcategory
    useEffect(()=>{
        if(subCat.data ){
            setOptions(subCat.data)
        }
    },[catID])
/////////////////////////////////////////
    const onSelect = (selectedList) => {
       setSelectedSubId(selectedList)
       console.log(selectedList)
    }
      const onRemove = (selectedList) => {
        setSeletedSubId(selectedList)
    }


      //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    // handle submit and post data from form
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(catID === 0 && prodName === '' && prodDesc === '' && images.length <= 0 && priceAfter <= 0){
            notify("من فضللك اكمل البيانات","warn")
            return
        }
        //convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        // convert array of images with  base 64 to file
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item,index)=>{
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData()
        formData.append("title",prodName)
        formData.append("description",prodDesc)
        formData.append("quantity",qty)
        formData.append("price",priceBefore)
        formData.append("imageCover",imgCover)
        formData.append("category",catID)
        formData.append("brand",brandId)

        itemImages.map((img)=> formData.append("images",img))
        colors.map((color)=>formData.append("availableColors",color))
        selectedSubId.map((item)=> formData.append("subcategory",item._id))
        setLoading(true)
        await dispatch(creatProduct(formData))
        setLoading(false)
        console.log(formData)
        console.log(imgCover)

    }
        useEffect(() => {
        if (loading === false) {
           // setCatID(0)
            setColors([])
            setImages([])
            setProdName('')
            setProdDesc('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAfter('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            setBrandId(0)
            setSelectedSubId([])
            setCatID('')
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 201) {
                    notify("تم الاضافة بنجاح", "success")
                } else {
                    notify("هناك مشكله", "error")
                }
            }
        }
    }, [loading])
//crop image
        const crop = {
            unit: '%',
            aspect: 4 / 3,
            width: '100'
        };
        return [onChangeDesc, onChangeQty, onChangeColor, onChangePriceBefore, onChangePriceAfter, onChangeProdName,
     showColor, category, brand ,priceAfter, images, setImages, onSelect, onRemove,
      options, handleChangeComplete, removeColor, onSelectCategory,handleSubmit, onSelectBrand, colors, 
      priceBefore, qty, prodDesc, prodName, crop]
}

export default addProductHook
