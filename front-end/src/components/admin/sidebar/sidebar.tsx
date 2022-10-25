import React from 'react'
import { Link } from 'react-router-dom';
import SubMenu from './subMenu/subMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Nav} from "react-bootstrap";

import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">   
          <h3>Precidiag</h3>
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
            <Nav.Link href='/'>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              <div className='text'>Profile</div>
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
