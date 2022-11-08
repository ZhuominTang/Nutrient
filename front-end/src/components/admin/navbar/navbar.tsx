import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../../api/authSlice';

import "./navbar.scss"


const TopNavbar = () => {
    const navDropDownIcon = (<FontAwesomeIcon icon={faUser} />);
    const navigate = useNavigate();
    const authDispatch = useDispatch();
  
    const signOut = () => {   
      authDispatch(logout({}))
      navigate("/login", { replace: true })
    }
    return (
        <Navbar expand="lg" bg="light" variant="dark">
            <Container>

                <Navbar.Collapse id="basic-navbar-nav">
                    
           
                    <NavDropdown title={navDropDownIcon} id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={signOut}>
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default TopNavbar