import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Profile(props) {
    const {id} = useParams()
    const [userss, setuserss] = useState([])
    useEffect(()=>{
        fetch(`https://json-server-hkhoa.herokuapp.com/users/${id}`)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setuserss(data)
            })
    },[id]);
    return (
        <div className="container">
            <div className="main-body as1">
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Trang cá nhân</li>
                </ol>
                </nav>
                <div className="row gutters-sm smss">
                <div className="col-md-4 mb-3">
                    <div className="card as2">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                        <div className="mt-3">
                            <b style={{fontSize:"22px"}}>{userss.Fullname}</b>
                            <p>Tài khoản của ECOSHOP</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mt-3">
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Họ tên:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {userss.Fullname}
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {userss.Email}
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-info " href={`/reset-password/${userss.id}`} style={{maxWidth:"280px", maxHeight:"60px" }}>Đổi mật khẩu</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row gutters-sm">
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
