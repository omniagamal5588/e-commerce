import React, { useEffect, useState } from 'react'
import notify from '../useNotifcation'
import { createNewUser } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RegisterHook = () => {
     const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
 // validation of form
 const validationOfRegister =()=>{
    if(name === "" ||  name.length < 3){
            notify("من فضلك ادخل اسم المستخدم الصحيح","error");
            return
    }
    //email 
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(emailPattern.test(email) === false){
        notify("من فضلك ادخل الايميل الصحيح","error")
     }
     // phonenumber
     const phonePattern = /^[0-9]{10,15}$/;
     if(phonePattern.test(phone) === false){
        notify("من فضلك ادخل رقم التليفون الصحيح","error")
        return;
     }
     //password
     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
     if(passwordPattern.test(password) === false){
        notify("هناك مشكلة في ادخال كلمة السر","warn")
        return;
     }
     // confirm password
     if(password !== confirmPassword){
        notify("كلمة السر غير مشابهة للتاكيد كلمة السر","error")
     }
 }

 
 const response = useSelector(state=> state.authReducer.createUser)
 console.log("response.data.token", response)
 
 const onSubmit = async()=>{
    validationOfRegister();
    setLoading(true)
    await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phone
   }))
   setLoading(false)
 }
 
 
   useEffect(() => {
        if (loading === false) {
            if (response) {
              
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token)
                    notify("تم تسجيل الحساب بنجاح", "success")
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }

                if (response.data.errors) {
                    if (response.data.errors[0].msg === "E-mail already in use")
                        notify("هذا الايميل مسجل من قبل", "error")
                }
                if (response.data.errors) {
                    if (response.data.errors[0].msg === "accept only egypt phone numbers")
                        notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
                }

                if (response.data.errors) {
                    if (response.data.errors[0].msg === "must be at least 6 chars")
                        notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
                }


            }
        }
    }, [loading])

 return [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, onSubmit]

}
export default RegisterHook
