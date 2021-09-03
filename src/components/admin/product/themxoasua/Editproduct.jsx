import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct, loadCatalogs, updateProduct } from "../../../../actions/actions";

export default function Editproduct(props) {
    let { id } = useParams();
    let dispatch = useDispatch();
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
    const {catalogs} = useSelector((states) => states.data2);
    useEffect(() => {
        dispatch(loadCatalogs());
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch]);

    const {product} = useSelector((state) => state.data);
      useEffect(() => {
        if (product) {
          setDetails({ ...product});
        }
      }, [product]);

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
                    dispatch(updateProduct(offff, id));
                }
                
            })
        }alert("Sửa Thành Công.")
    };
    const { title, description, price, namecates }= details

    return (
        <div id="content">
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                    <h2 style={{textAlign:"center"}}>Sửa sản phẩm</h2> <br/>
                    <form className="form" onSubmit={handleSubmit} style={{marginLeft:"270px"}}>
                        <div className="container">
                        <label htmlFor="Username"><b>Tên sản phẩm:</b></label><br />
                        <input className="input" type="text" placeholder="Tên sản phẩm" name="title" id="title" onChange={e=>setDetails({...details, title: e.target.value})} value={title || ""}/><br />
                        <label htmlFor="psw"><b>Hình ảnh:</b></label><br />
                        <input className="input" type="file" placeholder="Password" name="images" id="images" onChange={e=>setDetails({...details, images: e.target.value})} /><br />

                                <img src={`../images/${product.images}`} alt="" style={{width:"200px"}}/> 

                        <br />
                        <label htmlFor="Username"><b>Mô tả sản phẩm:</b></label><br />
                        <input className="input" type="text" placeholder="Mô tả sản phẩm" name="description" id="description" onChange={e=>setDetails({...details, description: e.target.value})} value={description || ""}/><br />
                        <label htmlFor="Username"><b>Giá sản phẩm:</b></label><br />
                        <input className="input" type="number" placeholder="Giá sản phẩm" name="price" id="price" onChange={e=>setDetails({...details, price: e.target.value})} value={price || ""}  /><br />
                        <label htmlFor="Username"><b>Loại sản phẩm:</b></label><br />
                        <select name="namecates" id="namecates"  className="input" onChange={e=>setDetails({...details, namecates: e.target.value})} value={namecates || ""}>
                            {/* <option value={details.namecates}>{details.namecates}</option> */}
                        {
                            catalogs.map(catalog=>(
                                <option key={catalog.id} value={ catalog.namecate} >{catalog.namecate}</option>
                            ))
                        }
                        </select>
                        <br />
                        <button type="submit"  className="button">Sửa</button>
                        </div>
                    </form>
                </div>
            </section>
            
        </div>
    );
}
