import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function WebappTemplate() {
    return (<>
   <header>
    <Nav/>
    </header>
    <hr/> 
    <main>
<Outlet/>
    </main>
        <hr/>
    <footer>

    </footer>
    </>  )};
export default WebappTemplate;