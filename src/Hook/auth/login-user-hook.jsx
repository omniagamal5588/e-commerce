import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import notify from '../useNotifcation'
import { loginUser } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'


const loginUserHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)

     const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    

    // validation of form
    const validationOfLogin =()=>{
    //email 
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(emailPattern.test(email) === false){
        notify("من فضلك ادخل الايميل الصحيح","error")
     }  
     //password

     //ال validation بتاع ال password مش متفق مع ال backend
    //  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d){8,}$/
    //  if(passwordPattern.test(password) === false){
    //     notify("هناك مشكلة في ادخال كلمة السر","error")
    //     return;
    //  }
 }
    
 


 const onSubmit = async()=>{
     validationOfLogin();
      setIsPress(true)
     setLoading(true)
     await dispatch(loginUser({
             email,
             password,
    }))
    setLoading(false)
    setIsPress(false)
  }
  const response = useSelector(state=> state.authReducer.loginUserList)
    

useEffect(()=>{
    if(loading === false){
        if(response){
            console.log(response.data.token)
            if(response.data.token){         
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.data))
                notify("تم تسجيل الدخول بنجاح", "success")
                    setTimeout(() => {
                        // window.location.href = "/"
                        navigate('/')
                    }, 1500);
            }else{
                localStorage.removeItem("token")
                localStorage.removeItem("user")
            }
            if (response.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token")
                      localStorage.removeItem("user")
                    notify("كلمة السر او الايميل خطا", "error")
                }
            setLoading(true)
        }
    }
},[loading])

 return [email,password,onChangeEmail,onChangePassword,onSubmit,isPress]
}

export default loginUserHook
