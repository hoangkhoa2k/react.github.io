import React, { useContext} from 'react'
import { DataContext } from '../../DataAsm';
import Formregister from './Formregister';

export default function Register() {
    const value = useContext(DataContext)
    const [users] = value.users
    const Register = details => {
        console.log(details);
        if(details.Fullname===""){
            alert("Vui lòng điền họ và tên!")
        }else if(details.Username===""){
            alert("Vui lòng điền tên đăng nhập!")
        }else if(details.Email===""){
            alert("Vui lòng điền email!")
        }else if(details.Password===""){
            alert("Vui lòng điền mật khẩu!")
        }else{
            users.forEach(gg =>{
                if(details.Username === gg.Username && details.Email === gg.Email){
                    alert("Đã có tài khoản này!")
                }
                if(details.Username !== gg.Username && details.Email !== gg.Email){
                    fetch(`http://localhost:3000/users`,{
                        method: 'POST',
                        headers: {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(details)
                    })
                    alert("Đăng ký thành công!")
                    window.location.href="/login"
                }
            })
        }
    }

    return (
        <div>
            <Formregister Register={Register} />
        </div>
    );
}