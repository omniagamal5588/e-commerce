import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import loginUserHook from '../../Hook/auth/login-user-hook'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {
    const [email, password , onChangeEmail ,onChangePassword ,onSubmit,isPress] = loginUserHook();
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                                <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                                </Link>
                           
                        </label>



                    </Col>


                   <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                              الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
                 {/* {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

                    </Spinner>) : null) : null} */}

                      <label className="mx-auto my-4">

                        <Link to="/user/forget-password" style={{ textDecoration: 'none', color: 'red' }}>
                            هل نسيت كلمه السر
                        </Link>
                    </label>

                    {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

                    </Spinner>) : null) : null}

                 <ToastContainer/>
            </Container>
           
    )
}

export default LoginPage