import * as types from "../const/actionType";

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const productDeleted = () => ({
  type: types.DELETE_PRODUCT,
});

const productAdded = () => ({
  type: types.ADD_PRODUCT,
});

const productUpdated = () => ({
  type: types.UPDATE_PRODUCT,
});

const getProduct = (product) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: product,
});

const getCatalogs = (catalogs) => ({
  type: types.GET_CATALOGS,
  payload: catalogs,
});

export const loadProducts = () => {
  return function (dispatch) {
      fetch('https://json-server-hkhoa.herokuapp.com/products')
      .then(res=>{
          return res.json();
      })
      .then((resp) => {
        dispatch(getProducts(resp));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteProduct = (id) => {
  return function (dispatch) {
    fetch(`https://json-server-hkhoa.herokuapp.com/products/${id}`,{
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
        dispatch(productDeleted());
        dispatch(loadProducts());
        window.location.href="/admin-products"
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (product) => {
  return function (dispatch) {
      fetch(`https://json-server-hkhoa.herokuapp.com/products`,{
          method: 'POST',
          headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(product)
      })
      .then(res=>{
        return res.json();
      })
      .then((resp) => {
        dispatch(productAdded());
        dispatch(loadProducts());
        window.location.href="/admin-products"
      })
      .catch((error) => console.log(error));
  };
};

export const addcatalogs = (catalog) => {
  return function (dispatch) {
      fetch(`https://json-server-hkhoa.herokuapp.com/catalogs`,{
          method: 'POST',
          headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(catalog)
      })
      .then(res=>{
        return res.json();
      })
      .then((resp) => {
        window.location.href="/admin-catalogs"
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleProduct = (id) => {
  return function (dispatch) {
    fetch(`https://json-server-hkhoa.herokuapp.com/products/${id}`)
      .then(res=>{
      return res.json();
      })
      .then((resp) => {
        console.log("product id", resp);
        dispatch(getProduct(resp));
      })
      .catch((error) => console.log(error));
  };
};

export const getProductbyidcatalog = (id) => {
  return function (dispatch) {
    fetch(`https://json-server-hkhoa.herokuapp.com/products?idcate=${id}`)
      .then(res=>{
      return res.json();
      })
      .then((resp) => {
        dispatch(getProducts(resp));
      })
      .catch((error) => console.log(error));
  };
};

export const updateProduct = (product, id) => {
  return function (dispatch) {
      fetch(`https://json-server-hkhoa.herokuapp.com/products/${id}`,{
          method: 'PUT',
          headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(product)
      })
      .then(res=>{
        return res.json();
      })
      .then((resp) => {
        dispatch(productUpdated());
        window.location.href="/admin-products"
      })
      .catch((error) => console.log(error));
  };
};

// catalog
export const loadCatalogs = () => {
  return function (dispatch2) {
      fetch('https://json-server-hkhoa.herokuapp.com/catalogs')
      .then(res=>{
          return res.json();
      })
      .then((resp) => {
        console.log("catalogs", resp);
        dispatch2(getCatalogs(resp));
        console.log(dispatch2(getCatalogs(resp)));
      })
      .catch((error) => console.log(error));
  };
};


// user

