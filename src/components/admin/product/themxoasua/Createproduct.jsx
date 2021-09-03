import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, loadCatalogs } from '../../../../actions/actions';

export default function Createproduct(props) {
    let dispatch = useDispatch();
    const {catalogs} = useSelector((states) => states.data2);
    useEffect(() => {
        dispatch(loadCatalogs());
    }, [dispatch]);
    const [details, setDetails] = useState({
        title: "", 
        images: "", 
        description: "",
        price: "",
        idcate: "",
        namecates: "",
        content: "",
        count: 1,
        like: "",
        like2: "thích",
        view: 1,
        view2: 1,
        hot: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!details.title || !details.images || !details.description || !details.price) {
          alert("Vui lòng nhập đầy đủ!")
        } else {
            catalogs.forEach(gg =>{
                if(details.namecates === gg.namecate){
                    const offff = ({
                        title: details.title, 
                        images: details.images.replace( "C:\\fakepath\\",""), 
                        description: details.description,
                        price: details.price,
                        idcate: gg.id,
                        namecates: details.namecates,
                        content: "",
                        count: 1,
                        like: "",
                        like2: "thích",
                        view: 1,
                        view2: 1,
                        hot: 0
                    })
                    dispatch(addProduct(offff));
                }
                
            })
        }alert("Thêm Thành Công.")
    };

    return (
        <div id="content">
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                    <h2 style={{textAlign:"center"}}>Thêm sản phẩm</h2> <br/>
                    <form className="form" onSubmit={handleSubmit} style={{marginLeft:"270px"}}>
                        <div className="container">
                        <label htmlFor="Username"><b>Tên sản phẩm:</b></label><br />
                        <input className="input" type="text" placeholder="Tên sản phẩm" name="title" id="title" onChange={e=>setDetails({...details, title: e.target.value})} value={details.title}/><br />
                        <label htmlFor="psw"><b>Hình ảnh:</b></label><br />
                        <input className="input" type="file" placeholder="Password" name="images" id="images" onChange={e=>setDetails({...details, images: e.target.value})} value={details.images} /><br />
                        <label htmlFor="Username"><b>Mô tả sản phẩm:</b></label><br />
                        <input className="input" type="text" placeholder="Mô tả sản phẩm" name="description" id="description" onChange={e=>setDetails({...details, description: e.target.value})} value={details.description}/><br />
                        <label htmlFor="Username"><b>Giá sản phẩm:</b></label><br />
                        <input className="input" type="number" placeholder="Giá sản phẩm" name="price" id="price" onChange={e=>setDetails({...details, price: e.target.value})} value={details.price} /><br />
                        <label htmlFor="Username"><b>Loại sản phẩm:</b></label><br />
                        <select name="namecates" id="namecates"  className="input" onChange={e=>setDetails({...details, namecates: e.target.value})}>
                        {
                            catalogs.map(catalog=>(
                                <option key={catalog.id} value={ catalog.namecate} >{catalog.namecate}</option>
                            ))
                        }
                        </select>
                        <br />
                        <button type="submit"  className="button">Thêm</button>
                        </div>
                    </form>
                </div>
            </section>
            
        </div>
    );
}