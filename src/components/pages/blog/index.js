import { Link} from "react-router-dom";

function Blog() {

    return ( <>
    <h1>Blog - Lista </h1>
   
    <ul>
        <li>
            <Link to='/react-homework-template/blog/post1'>Post 1</Link>
            </li>    
            <li>    
            <Link to='/react-homework-template/blog/post2'>Post 2</Link>
            </li>
            <li>
            <Link to='/react-homework-template/blog/post3'>Post 3</Link>
            </li>     
            <li>
            <Link to='/react-homework-template/blog/post4'>Post 4</Link> 
        </li>
    </ul>
    </> );
}

export default Blog;