import HomePage from './Pages/Home/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Components/utilities/Footer'
import NavBarLogin from './Components/utilities/NavBarLogin'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductPage from './Pages/Products/ShopProductPage'
import ProductDetailsPage from './Pages/Products/ProductDetailsPage'
import CartPage from './Pages/Cart/CartPage'
import ChoosePayMethodPage from './Pages/Checkout/ChoosePayMethodPage'
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage'
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage'
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetailsPage'
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage'
import UsersAllOrdersPage from './Pages/User/UsersAllOrdersPage'
import UserFavoriteProductsPage from './Pages/User/UserFavoriteProductsPage'
import UserAllAddresPage from './Pages/User/UserAllAddresPage'
import UserEditAddressPage from './Pages/User/UserEditAddressPage'
import UserProfilePage from './Pages/User/UserProfilePage'
import UserAddAddressPage from './Pages/User/UserAddAddressPage'
import AdminEditProductPage from './Pages/Admin/AdminEditProductPage'
import ForgetPasswordPage from './Pages/Auth/ForgetPasswordPage'
import VerifyPasswordPage from './Pages/Auth/VerifyPasswordPage'
import ResetPasswordPage from './Pages/Auth/ResetPasswordPage'

function App() {
  return (
   <div  className='font'>
     <NavBarLogin/>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/allCategory' element={<AllCategoryPage/>}/>
        <Route path='/allBrand' element={<AllBrandPage/>}/>
        <Route path='/allproducts' element={<ShopProductPage/>}/>
        <Route path='/product/:id' element={<ProductDetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/choosepay' element={<ChoosePayMethodPage/>}/>
        <Route path='/admin/allproducts' element={<AdminAllProductsPage/>}/>
        <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
        <Route path='/admin/orders/:id' element={<AdminOrderDetalisPage/>}/>
        <Route path='/admin/addbrand' element={<AdminAddBrandPage/>} />
        <Route path='/admin/addcategory' element={<AdminAddCategoryPage/>}/>
        <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage/>}/>
        <Route path='/admin/addproduct' element={<AdminAddProductsPage/>}/>
        <Route path='/user/allorders' element={<UsersAllOrdersPage/>}/>
        <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
        <Route path='/user/addresses' element={<UserAllAddresPage/>}/>
        <Route path="/user/add-address" element={<UserAddAddressPage />} />
        <Route path="/user/edit-address" element={<UserEditAddressPage />} /> 
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/admin/editproduct/:id" element={<AdminEditProductPage />} />
        <Route path="/user/forget-password" element={<ForgetPasswordPage/>}/>
        <Route path="/user/verify-code" element={<VerifyPasswordPage/>}/>
        <Route path="/user/reset-password" element={<ResetPasswordPage/>}/>
      </Routes>
      </BrowserRouter>
       <Footer/>
   </div>
  )
}

export default App
