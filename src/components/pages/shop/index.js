import { useSearchParams, Link } from "react-router-dom";

import { useEffect } from "react";

function StoreWall() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const category = searchParams.get('category') || ""
    
    const size = searchParams.get('size') || ""
   
    const color = searchParams.get('color') || ""
    
    console.log('Filters:' ,{
        category,
        size,
        color
    });

    const setFilter = ( ) =>{
        setSearchParams({
            category: 'jacket',
            size : 'xl',
            color: 'dark-blue',
            
        })
    }

    useEffect(()=>{
        console.log('call api to request:');
    },[searchParams])

    return (<>
    <h2>Welcome to our store</h2>
    {category && (<h3>Category : {category}</h3>)}
    {size && (<h3>Size : {size}</h3>)}
    {color && (<h3>Color : {color}</h3>)}
    <button onClick={setFilter}>Set</button>
    <hr/>
    <Link to='/react-homework-template/shop/product'
    state={{
        from:`/react-homework-template/shop?category=${category}&size=${size}&color=${color}`
    }}
    >Product</Link>
    </>  );
}

export default StoreWall;