import React from 'react';

export default function BaocaoASM(props) {

    return (
        <div>
            <div id="wrapper" style={{margin: '0 auto', width: '800px'}}>
                <table width="100%" id="inhddd">
                <tbody><tr>
                    <td height={25} valign="top" align="center"><div align="left">

                        </div></td>
                    </tr>
                    <tr>
                    <td width={562} height={25} valign="top" align="center">  <hr />
                        <strong><font color="#FF0000" size={+5}>BÁO CÁO ASSIGNMENT FINAL</font></strong></td>
                    </tr>
                    <tr>
                    <td height={54}>      
                    <br />              
                        <div align="left">
                        <h3 style={{fontSize:"22px"}}>Các chức năng Assignment Final:</h3>                  
                        </div><h6>&emsp;&emsp;&emsp;Khách hàng:</h6>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Hiện sản phẩm mới nhất / xem nhiều / nổi bật / bán chạy.</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Hiện tất cả sản phẩm (có phân trang), danh mục và sản phẩm theo danh mục.</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Hiện chi tiết sản phẩm, bình luận (tài khoản hoặc không), danh sách ý kiến.</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Thích sản phẩm sẽ đổi màu nền sản phẩm và thêm vào sản phẩm yêu thích.</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Giỏ hàng (cập nhật, xóa và tổng tiền) và thanh toán (điền thông tin và lưu hóa đơn).</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Đăng nhập, đăng ký, trang cá nhân và phân quyền (quản trị và khách hàng).</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Lấy các thông tin từ API miễn phí: hình ảnh đẹp, thời tiết.</p>
                            <h6>&emsp;&emsp;&emsp;Quản trị: </h6>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Quản trị sản phẩm (thêm, xóa, sửa).</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Quản trị tài khoản (sửa, xóa(chỉ xóa tài khoản khách hàng)).</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Quản trị đơn hàng (in đơn hàng, xóa đơn hàng).</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Thổng kê và biểu đồ thống kê.</p>
                            
                        <br />
                        <span className="style3"><b>Thông tin về bài Assignment Final : </b></span>
                        <br />
                            <b>&emsp;&emsp;&emsp;- Máy chủ API: json server gồm các cơ sở dữ liệu: products, catalogs, users, comments, orders.</b><br />
                            <b>&emsp;&emsp;&emsp;- Giao diện (header, slider, main, footer):</b>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Trang chủ, sản phẩm, sản phẩm yêu thích, sản phẩm theo loại, chi tiết sản phẩm.</p> 
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Giỏ hàng, thanh toán, liên hệ, đăng nhập, đăng ký, trang cá nhân.</p>
                            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+ Quản trị sản phẩm / tài khoản / đơn hàng / thống kê và biểu đồ.</p>                       
                        <table width={452} border={0} align="right">
                        <tbody><tr>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td><div align="center"><strong>Người làm ASM</strong></div></td>
                                <td><div align="center"><strong></strong></div></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td height={23}><div align="center">(Ký tên)</div></td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                            <td height={43}>&nbsp;</td>
                            <td style={{textAlign:"center"}}> <img src="images/chuky1.jpg" alt="" width={110} /> </td>
                            <td>&nbsp;</td>
                            </tr>
                        </tbody></table>
                        
                        <p>&nbsp;</p>
                        <p><br />
                        </p>
                    </td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    );
}
