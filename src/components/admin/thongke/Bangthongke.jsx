import React, { useContext } from 'react';
import { DataContext } from '../../DataAsm';
import {NavLink} from 'react-router-dom';

export default function Bangthongke() {
    const value = useContext(DataContext)
    const [products] = value.products

    return (
        <div id="content"> 
            <section className="shop-page padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="row"> 
                <div className="col-sm-3">
                    <div className="shop-sidebar"> 
                    <h5 className="shop-tittle margin-bottom-30">danh mục</h5>
                    <ul className="shop-cate">
                        <li><NavLink to="/admin-catalogs">Quản trị danh mục</NavLink></li>
                        <li><NavLink to="/admin-products">Quản trị sản phẩm</NavLink></li>
                        <li><NavLink to="/admin-users">Quản trị tài khoản</NavLink></li>
                        <li><NavLink to="/admin-orders">Quản trị đơn hàng</NavLink></li>
                        <li><NavLink to="/bangthongke">Thống kê</NavLink></li>
                    </ul>
                    <div className="side-bnr margin-top-50"> <img className="img-responsive" src="images/sidebar-bnr.jpg" alt="" />
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
                        <div className="col-xs-6"> <span className="product-num"> Bảng thống kê</span> </div>
                        <div className="col-xs-6">
                        <div className="pull-right"> 
                            <NavLink to="#." className="grid-style"><i className="icon-grid" /></NavLink> <NavLink to="#." className="list-style"><i className="icon-list" /></NavLink> </div>
                        </div>
                    </div>
                </div>
                    <div className="papular-block row single-img-demos"> 
                        <h5 style={{textAlign: 'center'}}>Thống kê Bàn</h5>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <table className="table table-hover" border="0.5">
                            <thead>
                            <tr>
                                <th>Mục sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá cao nhất</th>
                                <th>Giá thấp nhất</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bàn</td>  
                                    <td>{products.length}</td>
                                {
                                    products.sort((a,b)=>(b.price-a.price)).slice(0,1).map(pos=>(
                                
                                    <td key={pos.id}>{pos.price}</td>
                                
                                    ))
                                }
                                {
                                    products.sort((a,b)=>(a.price-b.price)).slice(0,1).map(pos=>(
                                
                                    <td key={pos.id}>{pos.price}</td>
                                
                                    ))
                                }
                                </tr>
                            </tbody>
                        </table>
                        <NavLink to="/bieudothongke" className="btn btn-info" style={{textAlign:"center", marginLeft:"230px"}}>Xem biểu đồ</NavLink>
                        </div>
                    </div>
                    {/* <ul className="pagination">
                        {
                            pageNumber.map(number=>(
                                <li key={number}><button onClick={()=>paginate(number)}>{number}</button></li>
                            ))
                        }
                    </ul> */}
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}
