import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import { creatCategory } from '../../redux/actions/categoryAction'
import { useDispatch,useSelector} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { ToastContainer, toast } from 'react-toastify';
  


const AdminAddCategory = () => {
    const dispatch = useDispatch();
    const [img,setImg]=useState(avatar)
    const [name,setName]=useState("")
    const [selectImg, setSelectedImg]= useState(null)
    const [loading,setLoading]=useState(true)
    const [isPress,setIsPress]= useState(false)


  
    //when image change save it
    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedImg(event.target.files[0])
        }

    }
    const onChangeName=(event)=>{
       setName( event.target.value)
    }
    const handelSubmit=(event)=>{
        event.preventDefault();

        // validate if date is enterend or not
        if(name=== "" && selectImg=== null){
            notify("من فضلك اكمل البيانات","warn")
        }


       const formData =new FormData()
       formData.append("name",name)
       formData.append("image",selectImg)
       setLoading(true);
       console.log("جاري التحميل")
       dispatch(creatCategory(formData))
       setLoading(false)
    }


    //
     const response = useSelector(state=>state.AllCategory.category)
    console.log(response)
     console.log(response.status)
    useEffect(()=>{
        if(loading=== false){
            setImg(avatar);
            setName("");
            setSelectedImg(null)
            setLoading(true)
            console.log("تم الانتهاء")
            setTimeout(()=>setIsPress(false),3000)
            
            if(response.status === 201){
               notify("تمت الاضافة بنجاح","success")
            }else{
                console.log("هناك مشكلة","error")
            }       
            
        }
    },[loading])


     const notify = (msg,type) =>{
        if(type==="warn"){
            toast.warn(msg)
        }else if(type==="success"){
            toast.success(msg)
        }else if(type === "error")
            toast.error(msg)
     }
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <label  for="upload-photo">
                    <img  src={img} alt="" height="100px" width="120px"   style={{ cursor: "pointer" }} />
                    </label>
                    <input type="file" name='photo'  onChange={onImageChange} id="upload-photo"  />
                    
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        onChange={onChangeName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit}  className="btn-save d-inline mt-2 " >حفظ التعديلات</button>
                </Col>
            </Row>
            {/* {
                isPress? loading? (<Spinner animation="border" variant="secondary" />):<h2>تم الانتهاء</h2>:null
            } */}
             {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
             <ToastContainer />

        </div>
    )
}

export default AdminAddCategory