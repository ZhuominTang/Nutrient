import React from 'react'
import { Link } from 'react-router-dom';
import SubMenu from './subMenu/subMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Nav} from "react-bootstrap";

import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">   
          <Link to={"/"}><h3>Precidiag</h3></Link>
        </div>

        <Nav className="">

          <Nav.Item >
            <Nav.Link href='/'>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              <div className='text'>Home</div>
            </Nav.Link>
          </Nav.Item>

          <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          />

          <Nav.Item>
            <Nav.Link href='/search'>
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              <div className='text'>Search</div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              <div className='text'>About</div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              <div className='text'>FAQ</div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href='/'>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              <div className='text'>Contact</div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  )
}

export default Sidebar
