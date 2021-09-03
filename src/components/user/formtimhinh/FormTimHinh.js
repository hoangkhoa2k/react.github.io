import React from 'react';
import ReactDOM from 'react-dom';
export default class FormTimHinh extends React. Component{
constructor (){
    super();
    this.state = {images: []};
    this.tukhoa = React. createRef();
}
timHinh = (e) =>{
    let tk= this.tukhoa.current.value;
    let page=1;
    let per_page=20;
    let yourKey = "tZhIPTGcTTSTwYt-7onj9wU9jGuNzxM5upY4Gdvmssg";
    let url1 ="https://api.unsplash.com/search/photos";
    let fullUrl= `${url1}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;

    fetch(fullUrl)
    .then(function(res) {
        if (!res.ok) throw Error(res.statusText);  
        return res.json();  //dùng text() nếu dạng text
    })
    .then(function(data) { //  data để hứng dữ luệu từ phía trên
        let pictures = data.results;
        console.log(pictures);
        let listPic=[];
        pictures.forEach(function( p , index){
            console.log(p.urls.regular);
            listPic.push(<img src={p.urls.regular} height="150" />)
        })
        ReactDOM.render(listPic, document.getElementById("kqSeachPic"));
    })
    .catch(function(error) {console.log('Có lỗi nè : \n', error);});
}
ThoiTiet = (e) =>{
    var apiKey = "556a16d4951a34463b1f5f309409c657";
    var lat = 35 ;  //10.792858;
    var long = 139; // 106.618599;
    var url= "http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=" +lat +"&lon="+long+"&appid="+ apiKey;
    
    fetch(url)
    .then(function(res) {
        if (!res.ok) throw Error(res.statusText);  
        return res.json();  //dùng text() nếu dạng text
    })
    .then(function(data) { //  data để hứng dữ luệu từ phía trên
        let pictures = data.weather;
        console.log(pictures);
        let listPic=[];
        pictures.forEach(function( p , index){
            console.log(p.description);
            listPic.push(<h3><strong>Thời tiết hôm nay:</strong></h3>)
            listPic.push(<h3>{p.description}</h3>)
            listPic.push(<h3>{p.main}</h3>)
            listPic.push(<h3>{p.icon}</h3>)
        })
        ReactDOM.render(listPic, document.getElementById("kqThoiTiet"));
    })
    .catch(function(error) {console.log('Có lỗi nè : \n', error);});
}
render () {
    const kq=
        <div id="content">
            <section className="shop-page padding-top-100 padding-bottom-100">
                <div className="container">
                    <div className="row"> 
                        <form className="row col-10 m-auto">
                            <h1>Tìm hình</h1>
                            <input type="text" ref={this. tukhoa} className="form-control col-12" placeholder="Nhập Thông tin hình cần tìm"/>
                            <button type="button" onClick={this.timHinh} className="btn btn-dark col-3 mt-2">Tìm hình</button>
                            <button type="button" onClick={this.ThoiTiet} className="btn btn-dark col-3 mt-2 ml-2">Thời Tiết</button>
                        </form>
                    <div id="kqThoiTiet" className="row col-12 mt-2"/>
                    <div id="kqSeachPic"/>
                    </div>
                </div>
            </section>
        </div>
                
        return (kq)
    }
}