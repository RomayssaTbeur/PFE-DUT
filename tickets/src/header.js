import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom' 
function header()
{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> Cup-2030 </Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            <Link to="/Addtickets" >Add Tickets</Link>
            <Link to="/Updatetickets" >Update Tickets</Link>
            <Link to="/Addmatchs" >Add Matchs</Link>
            <Link to="/Updatematchs" >Update Matchs</Link>
            <Link to="/Login" >Login</Link>
            <Link to="/Signup" >Signup</Link>


          </Nav>
    </Navbar>
        </div>
    )
}
export default header