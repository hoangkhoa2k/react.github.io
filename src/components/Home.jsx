import React, {useContext, useState} from 'react';
import { DataContext } from './DataAsm';

// export default function Home() {
//     return (
//         <div>
//             <h2 style={{textAlign:"center"}}>Đây là trang chủ</h2>
//         </div>
//     );
// }
export default function Home(props) {
    const value = useContext(DataContext)
    const [products] = value.products
    const [catalogs] = value.catalogs
    const addCart = value.addCart
    const [like, setLike] = value.like
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(12)
    const totalPost = products.length
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

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
        fetch(`http://localhost:3000/products/${id}`,{
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
        fetch(`http://localhost:3000/products/${id}`,{
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(products[id-1])
        })
    }

    return (
        <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="row"> 
                
                <div className="col-sm-12">
                    <div className="item-display">
                    <div className="row">
                        <div className="col-xs-6"><h2 className="product-tieude">Sản Phẩm Mới</h2></div>
                        <div className="col-xs-6">
                            <div className="pull-right"> 
                                <ul className="pagination">
                                    {
                                        pageNumber.map(number=>(
                                            <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                                        ))
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.slice(indexOfFirstPost, indexOfLastPost).map(product =>(
                            <div className="col-md-3" key={product.id}> 
                                <div className={`item ${product.like}`}> 
                                    <div className="item-img">
                                        <a href={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}> 
                                            <img className="img-1" src={`img/${product.images}`} alt="" />
                                        </a>
                                        <div className="overlay">
                                            <div className="position-center-center">
                                                <div className="inn">
                                                    <a href={`img/${product.images}`} data-lighter><i className="icon-magnifier" /></a> 
                                                    <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> 
                                                    <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => reductions(product.id)}><i className="icon-heart" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="item-name"> <a href={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}>{product.title}</a></div>
                                <span className="price">{product.price.toLocaleString("en-GB")} VND</span></div>
                            </div>
                        ))            
                    }
                    </div>
                    <ul className="pagination">
                        {
                            pageNumber.map(number=>(
                                <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-sm-12">
                    <div className="item-display">
                    <div className="row">
                        <div className="col-xs-6"><h2 className="product-tieude">Sản Phẩm Bán Chạy</h2></div>
                        <div className="col-xs-6">
                            <div className="pull-right"> 
                                <ul className="pagination">
                                    {
                                        pageNumber.map(number=>(
                                            <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                                        ))
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.slice(indexOfFirstPost, indexOfLastPost).map(product =>(
                            <div className="col-md-3" key={product.id}> 
                                <div className={`item ${product.like}`}> 
                                    <div className="item-img">
                                        <a href={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}> 
                                            <img className="img-1" src={`img/${product.images}`} alt="" />
                                        </a>
                                        <div className="overlay">
                                            <div className="position-center-center">
                                                <div className="inn">
                                                    <a href={`img/${product.images}`} data-lighter><i className="icon-magnifier" /></a> 
                                                    <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none"}} onClick={() => addCart(product.id)}><i className="icon-basket" /></button> 
                                                    <button style={{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", padding:"10px"}} onClick={() => reductions(product.id)}><i className="icon-heart" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="item-name"> <a href={`/product-details/${product.id}`} onClick={() => tangviews(product.id)}>{product.title}</a></div>
                                <span className="price">{product.price.toLocaleString("en-GB")} VND</span></div>
                            </div>
                        ))            
                    }
                    </div>
                    <ul className="pagination">
                        {
                            pageNumber.map(number=>(
                                <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}