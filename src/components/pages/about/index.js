import {Link, Outlet} from "react-router-dom";
function About() {
    return (
        <>
        <h2>About page</h2>
        <p>
          Lorem Ipsum
        </p>
        <ul className='sub-nav'>
          <li>
            <Link to ='mission'>Mission</Link>

          </li>
          <li>
            <Link to='team'>Team</Link>
            
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
            
          </li>
        </ul>
        <section>
          <Outlet/>
        </section>
        </>
      );
}

export default About;