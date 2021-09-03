import React, {createContext, useState, useEffect} from 'react'

// khởi tạo context mới
export const DataContext = createContext();
// Tham số truyền vào là object DataContext.

export const DataAsm = (props) => {
    // Products
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/products')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setProducts(data)
            })
    },[]);

    // Catalogs
    const [catalogs, setCatalogs] = useState([])

    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/catalogs')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setCatalogs(data)
            })
    },[]);

    //user
    const [adminUser, setadminUser] = useState([])
    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/users')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setadminUser(data)
            })
    },[]);

    // comment
    const [adminComment, setadminComment] = useState([])
    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/comments')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setadminComment(data)
            })
    },[]);

    // order
    const [adminOrder, setadminOrder] = useState([])
    useEffect(()=>{
        fetch('https://json-server-hkhoa.herokuapp.com/orders')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setadminOrder(data)
            })
    },[]);

    // Cart
    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            cart.forEach((product, index) =>{
                if(product.id===id){
                    product.count++
                }
            })
            setCart([...cart])
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

    // Like
    const [like, setLike] = useState([])

    const addLike = (id) =>{
        const check = like.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setLike([...like, ...data])
        }
    }


    const value = {
        products: [products, setProducts],
        catalogs: [catalogs, setCatalogs],
        users: [adminUser, setadminUser],
        comments: [adminComment, setadminComment],
        orders: [adminOrder, setadminOrder],
        cart: [cart, setCart],
        addCart: addCart,
        like: [like, setLike],
        addLike: addLike
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}


