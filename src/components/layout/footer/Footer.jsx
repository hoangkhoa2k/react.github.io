import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <footer style={{maxHeight: "400px"}}>
            <div className="container"> 
                <div className="col-md-6">
                <div className="about-footer"> <img className="margin-bottom-30" src="./images/logo-foot.png" alt="" />
                    <p><i className="icon-pointer" /> Phường 12, Gò Vấp, TP.HCM.</p>
                    <p><i className="icon-call-end" />085 749 1449</p>
                    <p><i className="icon-envelope" />khoa@gmail.com</p>
                </div>
                </div>
                <div className="col-md-3">
                <h6>LIÊN KẾT HỮU ÍCH</h6>
                <ul className="link">
                    <li><NavLink to="/products"> Sản phẩm</NavLink></li>
                    <li><NavLink to="/"> Tìm 1 cửa hàng</NavLink></li>
                    <li><NavLink to="/"> Chính sách bảo mật</NavLink></li>
                    <li><NavLink to="/"> Blog</NavLink></li>
                    <li><NavLink to="/">Danh sách Blog</NavLink></li>
                </ul>
                </div>
                <div className="col-md-3">
                <h6>Cửa hàng</h6>
                <ul className="link">
                    <li><NavLink to="/"> Thông tin</NavLink></li>
                    <li><NavLink to="/productlike"> Sản phẩm yêu thích</NavLink></li>
                    <li><NavLink to="/products"> Sản Phẩm</NavLink></li>
                    <li><NavLink to="/contact"> Liên hệ</NavLink></li>
                    <li><NavLink to="/"> Ủng hộ</NavLink></li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;