import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addcatalogs, loadCatalogs } from '../../../../actions/actions';

export default function Createcatalog(props) {
    let dispatch = useDispatch();
    const {catalogs} = useSelector((states) => states.data2);
    useEffect(() => {
        dispatch(loadCatalogs());
    }, [dispatch]);
    const [details, setDetails] = useState({
        namecates: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!details.namecates) {
          alert("Vui lòng nhập đầy đủ!")
        } else {
            catalogs.forEach(gg =>{
                console.log(gg);
                if(details.namecates === gg.namecate){
                    alert("Tên danh mục nà đã tồn tại!")
                    window.location.reload();
                }
            })
            const offff = ({
                namecate: details.namecates
            })
            fetch(`https://json-server-hkhoa.herokuapp.com/catalogs`,{
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
            .catch((error) => console.log(error));
            alert("Thêm thành công.")
            window.location.href="/admin-catalogs"
        }
    };

    return (
        <div id="content">
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                    <h2 style={{textAlign:"center"}}>Thêm danh mục</h2> <br/>
                    <form className="form" onSubmit={handleSubmit} style={{marginLeft:"270px"}}>
                        <div className="container">
                        <label htmlFor="Username"><b>Tên danh mục:</b></label><br />
                        <input className="input" type="text" placeholder="Tên danh mục" name="title" id="title" onChange={e=>setDetails({...details, namecates: e.target.value})} value={details.namecates}/>
                        <br />
                        <button type="submit"  className="button">Thêm</button>
                        </div>
                    </form>
                </div>
            </section>
            
        </div>
    );
}
