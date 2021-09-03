import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Showcatalog from './components/admin/catalog/Showcatalog';
import Createcatalog from './components/admin/catalog/themxoasua/Createcatalog';
import Inhd from './components/admin/order/Inhd';
import Showorder from './components/admin/order/Showorder';
import Showproduct from './components/admin/product/Showproduct';
import Createproduct from './components/admin/product/themxoasua/Createproduct';
import Editproduct from './components/admin/product/themxoasua/Editproduct';
import Bangthongke from './components/admin/thongke/Bangthongke';
import Bieudothongke from './components/admin/thongke/Bieudothongke';
import Showuser from './components/admin/user/Showuser';
import Edituser from './components/admin/user/themxoasua/Edituser';
import Cart from './components/cart/cart/Cart';
import Checkout from './components/cart/checkout/Checkout';
import Category from './components/category/Category';
import BaocaoASM from './components/contact/BaocaoASM';
import Contact from './components/contact/Contact';
import Home from './components/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Productdetails from './components/product/productdetails/Productdetails';
import Productlike from './components/product/productlike/Productlike';
import Products from './components/product/products/Products';
import Forgotpass from './components/user/forgotpass/Forgotpass';
import Login from './components/user/login/Login';
import Profile from './components/user/profile/Profile';
import Register from './components/user/register/Register';
import Resetpass from './components/user/resetpass/Resetpass';
// import Slider from './components/layout/slider/Slider'
import FormTimHinh from './components/user/formtimhinh/FormTimHinh';

function App() {
    const dataUser = localStorage.getItem("dataUser");
    const dataUsers = JSON.parse(dataUser);
    return (
            <div className="App">
                <Header/>
                {/* <Slider/> */}
                <section>
                {(dataUsers) ? (
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/products"><Products /></Route>
                        <Route path="/product-details/:id"><Productdetails /></Route>
                        <Route path="/productlike"><Productlike /></Route>
                        <Route path="/cart"><Cart /></Route>
                        <Route path="/checkout"><Checkout /></Route>
                        <Route path="/login"><Home /></Route>
                        <Route path="/register"><Home /></Route>
                        <Route path="/profile/:id"><Profile /></Route>
                        <Route path="/reset-password/:id"><Resetpass /></Route>
                        <Route path="/forgot-password"><Home /></Route>
                        <Route path="/contact"><Contact /></Route>
                        <Route path="/category/:id"><Category /></Route>
                        <Route path="/admin-catalogs"><Showcatalog /></Route>
                        <Route path="/create-catalogs"><Createcatalog /></Route>
                        <Route path="/admin-products"><Showproduct /></Route>
                        <Route path="/create-products"><Createproduct /></Route>
                        <Route path="/edit-products/:id"><Editproduct /></Route>
                        <Route path="/admin-users"><Showuser /></Route>
                        <Route path="/edit-users/:id"><Edituser /></Route>
                        <Route path="/admin-orders"><Showorder /></Route>
                        <Route path="/in-hoadon/:id"><Inhd /></Route>
                        <Route path="/bangthongke"><Bangthongke /></Route>
                        <Route path="/bieudothongke"><Bieudothongke /></Route>
                        <Route path="/baocao"><BaocaoASM /></Route>
                        <Route path="/timhinh"><FormTimHinh /></Route>
                        <Route path="*">Not found</Route>
                    </Switch>
                    ) : (
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/products"><Products /></Route>
                        <Route path="/product-details/:id"><Productdetails /></Route>
                        <Route path="/productlike"><Productlike /></Route>
                        <Route path="/cart"><Cart /></Route>
                        <Route path="/checkout"><Checkout /></Route>
                        <Route path="/login"><Login /></Route>
                        <Route path="/register"><Register /></Route>
                        <Route path="/profile/:id"><Login /></Route>
                        <Route path="/reset-password/:id"><Login /></Route>
                        <Route path="/forgot-password"><Forgotpass /></Route>
                        <Route path="/contact"><Contact /></Route>
                        <Route path="/category/:id"><Category /></Route>
                        <Route path="/admin-products"><Login /></Route>
                        <Route path="/create-products"><Login /></Route>
                        <Route path="/edit-products/:id"><Login /></Route>
                        <Route path="/admin-users"><Login /></Route>
                        <Route path="/edit-users/:id"><Login /></Route>
                        <Route path="/admin-orders"><Login /></Route>
                        <Route path="/in-hoadon/:id"><Login /></Route>
                        <Route path="/bangthongke"><Login /></Route>
                        <Route path="/bieudothongke"><Login /></Route>
                        <Route path="/baocao"><BaocaoASM /></Route>
                        <Route path="/timhinh"><FormTimHinh /></Route>
                        <Route path="*">Not found</Route>
                    </Switch>
                )}
                </section>
                <Footer/>
            </div>
    );
}

export default App;
