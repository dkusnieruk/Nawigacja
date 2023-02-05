import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <p>This is my about page: 
            <Link to={'/react-homework-template/about'}>About page</Link>
        </p>
        </>
      );
}

export default Home;