import React, {useContext} from 'react';
import { DataContext } from '../../DataAsm';
import {NavLink} from 'react-router-dom';

function Productlike() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const [like, setLike] = value.like

    const reductions = id => {
        products.forEach(gg =>{
            if(gg.id === id){
                if(gg.like===""){
                    gg.like = "thich";
                    gg.like2="không thích"
                }else{
                    gg.like = "";
                    gg.like2="thích"
                }
            }
        })
        setLike([...like])
        fetch(`https://json-server-hkhoa.herokuapp.com/products/${id}`,{
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(products[id-1])
        })
    }

    const tangviews = id => {
        products.forEach(gg =>{
            if(gg.id === id){
                gg.view+=1
            }
        })
        fetch(`https://json-server-hkhoa.herokuapp.com/products/${id}`,{
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(products[id-1])
        })
    }

    return (
        <div>
            <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                <div className="item-display">
                    <div className="row">
                        <div className="col-xs-12"><h2 className="product-tieude">Sản Phẩm Yêu Thích</h2></div>
                    {/* <div className="col-xs-6">
                        <div className="pull-right"> 
                        <NavLink to="/" className="grid-style"><i className="icon-grid" /></NavLink> <NavLink to="/" className="list-style"><i className="icon-list" /></NavLink> </div>
                    </div> */}
                    </div>
                </div>
                <div className="papular-block row single-img-demos"> 
                {   
                    products.map(product =>(
                        product.like==="thich" ? (
                        <div className="col-md-3" key={product.id}>
                            <div className="item"> 
                                <div className="item-img"> <img className="img-1" src={`img/${product.images}`} alt="" /> 
                                <div className="overlay">
                                    <div className="position-center-center">
                                        <div className="inn"><NavLink to={`img/${product.images}`} data-lighter><i className="icon-magnifier" /></NavLink> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => reductions(product.id)}><i className="icon-heart" /></button></div>
                                    </div>
                                </div>
                                </div> 
                                <div className="item-name"> <NavLink to={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}>{product.title}</NavLink>
                                </div>
                                <span className="price">{product.price.toLocaleString("en-GB")} VND</span>
                            </div>
                        </div>
                        ) : ("")
                    ))            
                }
                </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Productlike;