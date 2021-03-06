import React,{useContext, useEffect, useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import { DataContext } from '../../DataAsm';


export default function Productdetails() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [comments] = value.comments
    const [productss, setProductss] = useState([])
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [details, setDetails] = useState({
        Fullname: "",
        Email: "",
        Comment: ""
    })

    var today = new Date();
    const h = `0${today.getHours()}`.slice(-2);
    const m = `0${today.getMinutes()}`.slice(-2);
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = h + ":" + m;
    var dateTime = time+' ngày '+date;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataUsers){
            if (!details.Comment) {
                alert("Vui lòng nhập đầy đủ!")
            } else {
                const offff = ({
                    Fullname: dataUsers.Fullname,
                    Email: dataUsers.Email,
                    Comment: details.Comment,
                    idsp:id,
                    Date: dateTime
                })
                fetch(`https://json-server-hkhoa.herokuapp.com/comments`,{
                        method: 'POST',
                        headers: {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(offff)
                    })
                    .then(res=>{
                        return res.json();
                    })
                    .then((resp) => {
                        window.location.reload()
                    })
                    .catch((error) => console.log(error));
            }
        }else{
            if (!details.Fullname || !details.Email || !details.Comment) {
                alert("Vui lòng nhập đầy đủ!")
            } else {
                const offff = ({
                    Fullname: details.Fullname,
                    Email: details.Email,
                    Comment: details.Comment,
                    idsp:id,
                    Date: dateTime
                })
                fetch(`https://json-server-hkhoa.herokuapp.com/comments`,{
                        method: 'POST',
                        headers: {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(offff)
                    })
                    .then(res=>{
                        return res.json();
                    })
                    .then((resp) => {
                        window.location.reload()
                    })
                    .catch((error) => console.log(error));
            }
        }
    };

    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/products?id='+id)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setProductss(data)
            })
    },[id]);

    const addCart = value.addCart

    return (
        <div id="content"> 
            <section className="padding-top-100 padding-bottom-100">
            <div className="container"> 
                <div className="shop-detail">
                {
                productss.map(product =>(
                    <div className="row" key={product.id}> 
                        <div className="col-md-7"> 
                        <div className="images-slider">
                            <ul className="slides">
                            <li data-thumb={`../img/${product.images}`}> <img className="img-responsive" src={`../img/${product.images}`} alt="" /> </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-5">
                        <h4>{product.title}</h4>
                        <span className="price">Giá: {product.price.toLocaleString("en-GB")} VND</span> 
                        <ul className="item-owner">
                            <li>Designer :<span> Hoàng Khoa</span></li>
                            <li>Danh mục:<span> {product.namecates}</span></li>
                        </ul>
                        <p>{product.description}</p>
                        <div className="some-info">
                            <ul className="row margin-top-30">
                            <li className="col-xs-4">
                                <div className="quinty"> 
                                <select className="selectpicker">
                                    <option>1</option>
                                </select>
                                </div>
                            </li>

                            <li className="col-xs-6"> <NavLink to="/cart" onClick={() => addCart(product.id)} className="btn">Thêm giỏ hàng</NavLink> </li>
                            </ul>
                            <div className="inner-info">
                            <h6>SHARE THIS PRODUCT</h6>
                            <ul className="social_icons">
                                <li><NavLink to="/"><i className="icon-social-facebook" /></NavLink></li>
                                <li><NavLink to="/"><i className="icon-social-twitter" /></NavLink></li>
                                <li><NavLink to="/"><i className="icon-social-tumblr" /></NavLink></li>
                                <li><NavLink to="/"><i className="icon-social-youtube" /></NavLink></li>
                                <li><NavLink to="/"><i className="icon-social-dribbble" /></NavLink></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))
                }
                </div>
                <div className="item-decribe"> 
                <ul className="nav nav-tabs animate fadeInUp" data-wow-delay="0.4s" role="tablist">
                    <li role="presentation" className="active"><NavLink to="#descr" role="tab" data-toggle="tab">Bình Luận</NavLink></li>
                    <li role="presentation"><NavLink to="#review" role="tab" data-toggle="tab">Danh sách ý kiến</NavLink></li>
                </ul>
                <div className="tab-content animate fadeInUp" data-wow-delay="0.4s"> 
                    <div role="tabpanel" className="tab-pane fade in active" id="descr">
                    <h6 className="margin-t-40">THÊM BÌNH LUẬN</h6>
                    {
                        (dataUsers) ? (
                            <form onSubmit={handleSubmit}>
                                <ul className="row">
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Họ và tên: {dataUsers.Fullname}
                                    <input type="hidden" onChange={e=>setDetails({...details, Fullname: dataUsers.Fullname})} value={dataUsers.Fullname}/>
                                    </label>
                                </li>
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}>
                                    <input type="hidden" onChange={e=>setDetails({...details, Email: dataUsers.Email})} value={dataUsers.Email}/>
                                    </label>
                                </li>
                                <li className="col-sm-12">
                                    <label style={{fontSize:"18px"}}> *Bình luận
                                    <textarea onChange={e=>setDetails({...details, Comment: e.target.value})} value={details.Comment} />
                                    </label>
                                </li>
                                <li className="col-sm-6"> 
                                    <div className="stars"> <span></span> </div>
                                </li>
                                <li className="col-sm-6">
                                    <button type="submit" className="btn btn-dark btn-small pull-right no-margin">Đăng bình luận</button>
                                </li>
                                </ul>
                            </form>
                        ):(
                            <form onSubmit={handleSubmit}>
                                <ul className="row">
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Họ và tên
                                    <input type="text"  placeholder="Họ và tên" onChange={e=>setDetails({...details, Fullname: e.target.value})} value={details.Fullname} />
                                    </label>
                                </li>
                                <li className="col-sm-6">
                                    <label style={{fontSize:"18px"}}> *Email
                                    <input type="email" placeholder="Email" onChange={e=>setDetails({...details, Email: e.target.value})} value={details.Email} />
                                    </label>
                                </li>
                                <li className="col-sm-12">
                                    <label style={{fontSize:"18px"}}> *Bình luận
                                    <textarea onChange={e=>setDetails({...details, Comment: e.target.value})} value={details.Comment} />
                                    </label>
                                </li>
                                <li className="col-sm-6"> 
                                    <div className="stars"> <span></span> </div>
                                </li>
                                <li className="col-sm-6">
                                    <button type="submit" className="btn btn-dark btn-small pull-right no-margin">Đăng bình luận</button>
                                </li>
                                </ul>
                            </form>
                        )
                    }
                    
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="review">
                    {
                        comments.map(comment=>(
                            comment.idsp === id ? (
                                <div className="media">
                                    <div className="media-left"> 
                                    <div className="avatar"> <NavLink to="/"> <img className="media-object" src="./images/avatar-4.jpg" style={{width:"50px", height:"50px"}} alt="" /> </NavLink> </div>
                                    </div>
                                    <div className="media-body">
                                    <h6>{comment.Fullname} <span className="pull-right"> {comment.Date}</span> </h6>
                                    <p className="font-playfair">“{comment.Comment}”</p>
                                    </div>
                                </div>
                            ):(
                                <div className="media">
                                    <div className="media-left"> 
                                    <h4>không có ý kiến nào</h4>
                                    </div>
                                </div>
                            )   
                        ))
                    }
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}