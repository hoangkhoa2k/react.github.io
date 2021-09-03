import React, {useContext, useState} from 'react';
import { DataContext } from '../../DataAsm';

export default function Showcatalog(props) {
    const value = useContext(DataContext)
    const [catalogs] = value.catalogs

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)
    const totalPost = catalogs.length
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const xoacatalog = (id) => {
        if (window.confirm("Bạn thực sự muốn xóa danh mục này?")) {
            fetch(`https://json-server-hkhoa.herokuapp.com/catalogs/${id}`,{
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify()
            })
            .then(res=>{
                return res.json();
            })
            .then((resp) => {
                window.location.href="/admin-catalogs"
            })
            .catch((error) => console.log(error));
        }
    };

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
                        <div className="col-xs-6"> <span className="product-num"> Quản trị danh mục</span> </div>
                        <div className="col-xs-6">
                        <div className="pull-right"> 
                            <a href="/create-catalogs"><button className="suaxoa">Thêm danh mục</button></a>
                            <a href="#." className="grid-style"><i className="icon-grid" /></a> <a href="#." className="list-style"><i className="icon-list" /></a> </div>
                        </div>
                    </div>
                </div>
                    <div className="papular-block row single-img-demos"> 
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên danh mục</th>
                                <th scope="col">Tùy chỉnh</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    catalogs.slice(indexOfFirstPost, indexOfLastPost).map(catalog=>(
                                        <tr key={catalog.id}>
                                            <th scope="row">{catalog.id}</th>
                                            <td>{catalog.namecate}</td>
                                            <td><a href={`/edit-users/${catalog.id}`}><button className="suaxoa" style={{borderRadius:"5px"}}>Sửa</button></a> <button className="suaxoa" onClick={()=>xoacatalog(catalog.id)} style={{borderRadius:"5px"}}>Xóa</button></td>                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
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