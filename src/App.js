import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/User/Home';
import ProductList from './Pages/User/ProductList';
import ProductDetail from './Pages/User/ProductDetail';
import Cart from './Pages/User/Cart';
import AddProduct from './Pages/Admin/AddProduct';
import UpdateProduct from './Pages/Admin/UpdateProduct';
import ListProduct from './Pages/Admin/ListProduct';
import SearchProduct from './Pages/Admin/SearchProduct';
import ListSlide from './Pages/Admin/ListCategory';
import Login from './Pages/Admin/Login';
import Register from './Pages/Admin/Register';
import Protected from './Pages/Admin/ProtectedAdmin';
import ListCategory from './Pages/Admin/ListCategory';
import ProtectedAdmin from './Pages/Admin/ProtectedAdmin';
import ProtectedUser from './Pages/User/ProtectedUser';
import About from './Pages/User/About';
import Contact from './Pages/User/Contact';
import AddCategory from './Pages/Admin/AddCategory';
import UpdateCategory from './Pages/Admin/UpdateCategory';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* User */}
        <Route path='/home' element={<ProtectedUser Cmp={Home} />} />
        <Route path='/products' element={<ProtectedUser Cmp={ProductList} />} />
        <Route path='/products/:id' element={<ProtectedUser Cmp={ProductDetail} />} />
        <Route path='/cart' element={<ProtectedUser Cmp={Cart} />} />
        <Route path='/about' element={<ProtectedUser Cmp={About} />} />
        <Route path='/contact' element={<ProtectedUser Cmp={Contact} />} />

        {/* Admin */}
        <Route path='/admin/products/add' element={<ProtectedAdmin Cmp={AddProduct} />} />
        <Route path='/admin/products/update/:id' element={<ProtectedAdmin Cmp={UpdateProduct} />} />
        <Route path='/admin/products' element={<ProtectedAdmin Cmp={ListProduct} />} />
        <Route path='/admin/products/search' element={<ProtectedAdmin Cmp={SearchProduct} />} />

        <Route path='/admin/categories' element={<ProtectedAdmin Cmp={ListCategory} />} />
        <Route path='/admin/categories/add' element={<ProtectedAdmin Cmp={AddCategory} />} />
        <Route path='/admin/categories/update/:id' element={<ProtectedAdmin Cmp={UpdateCategory} />} /> 

      </Routes>
    </div>
  );
}

export default App;
