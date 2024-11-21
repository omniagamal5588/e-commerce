import HomePage from './Pages/Home/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Components/utilities/Footer'
import NavBarLogin from './Components/utilities/NavBarLogin'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductPage from './Pages/Products/ShopProductPage'

function App() {
  return (
  //   <>
  //    <HomePage/>
  //  </>
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
      </Routes>
      </BrowserRouter>
       <Footer/>
   </div>
  )
}

export default App
