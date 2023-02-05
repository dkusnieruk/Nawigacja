import { useLocation, Link } from "react-router-dom";

function Product() {

    const location = useLocation()

    console.log(location);

    return (<>
    <h2>Product</h2>

    <Link to={location.state.from}>Go back to search results</Link>    
    </>  );
}

export default Product;