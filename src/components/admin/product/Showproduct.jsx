import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, loadProducts } from '../../../actions/actions';

export default function Showproduct(props) {
    let dispatch = useDispatch();
    const {products} = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(9)
    const totalPost = products.length
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const [tangdansasa, setasasasas] = useState([])
    const [sasasasasa, sasassasasasasasasas] = useState([])
    const [trosasa, trolainhucus] = useState([])

    const xoapro = (id) => {
        console.log("id", id);
        if (window.confirm("Bạn thực sự muốn xóa sản phẩm này?")) {
          dispatch(deleteProduct(id));
        }alert("Xóa Thành Công.")
    };

    const tangdans = () =>{
        const as = products.sort((a, b) => (a.price - b.price))
        setasasasas(as)

    }   

    const giamdans = () =>{
        const as = products.sort((a, b) => (b.price - a.price))
        sasassasasasasasasas(as)
    } 

    const trolainhucu = () =>{
        const as = products.sort((a, b) => (a.id - b.id))
        trolainhucus(as)
    } 
    

    return (
        <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="row"> 
                <div className="col-sm-3">
                    <div className="shop-sidebar"> 
                    <h5 className="shop-tittle margin-bottom-30">danh mục</h5>
                    <ul className="shop-cate">
                        <li><a href="/admin-catalogs">Quản trị danh mục</a></li>
                        <li><a href="/admin-products">Quản trị sản phẩm</a></li>
                        <li><a href="/admin-users">Quản trị tài khoản</a></li>
                        <li><a href="/admin-orders">Quản trị đơn hàng</a></li>
                        <li><a href="/bangthongke">Thống kê</a></li>
                    </ul>
                    <div className="side-bnr margin-top-50"> <img className="img-responsive" src="https://product.hstatic.net/1000003969/product/xanh-bac-ha_tt07002_7_d15c2835805d463f93dc7fb7345af7f4.jpg" alt="" />
                        <div className="position-center-center"> <span className="price">1,999,000 VND</span>
                        <div className="bnr-text" style={{fontSize:"28px"}}>Trông
                            nóng bỏng
                            với
                            phong cách</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-9">
                <div className="item-display">
                    <div className="row">
                        <div className="col-xs-6"> <span className="product-num">Quản trị sản phẩm</span> 
                            <button className="suaxoa" style={{color:"black"}} onClick={()=>giamdans()}>Giảm dần theo giá</button>&ensp;&ensp;
                            <button className="suaxoa" style={{color:"black"}} onClick={()=>tangdans()}>Tăng dần theo giá</button>
                        </div>
                        <div className="col-xs-6">
                        <div className="pull-right">  
                            <a href="/create-products"><button className="suaxoa">Thêm sản phẩm</button></a>&ensp;&ensp;
                            <button className="suaxoa" style={{color:"black"}} onClick={()=>trolainhucu()}>Trở lại như cũ</button>
                            <a href="#." className="grid-style"><i className="icon-grid" /></a> <a href="#." className="list-style"><i className="icon-list" /></a> </div>
                        </div>
                    </div>
                </div>
                    <div className="papular-block row single-img-demos"> 
                    {   
                        products.slice(indexOfFirstPost, indexOfLastPost).map(product =>(
                            <div className="col-md-4" key={product.id}> 
                                <div className={`item ${product.like}`}> 
                                <div className="item-img"> <img className="img-1" src={`img/${product.images}`} alt="" />
                                    <div className="overlay">
                                    <div className="position-center-center">
                                        <div className="inn"><a href={`img/${product.images}`} data-lighter><i className="icon-magnifier" /></a></div>
                                    </div>
                                    </div>
                                </div>
                                <div className="item-name"> <a href={`/product-details/${product.id}`}>{product.title}</a>
                                </div>
                                <span className="price">{product.price.toLocaleString("en-GB")} VND</span> 
                                <a href={`/edit-products/${product.id}`}><button style={{width:"125px", marginLeft:"-5px"}} className="suaxoa">Sửa</button></a><button style={{width:"125px", marginLeft:"5px"}} className="suaxoa" onClick={()=>xoapro(product.id)}>Xóa</button>
                                </div>
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