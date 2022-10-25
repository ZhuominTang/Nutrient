
import { useState } from 'react';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./subMenu.scss"


interface Props {
    title: string,
    icon: IconDefinition
    items: string[]
}

const SubMenu= (props: Props) => {
    const { icon, title, items } = props;
    const [collapsed, isCollapsed] = useState(false);
    const toggleNavbar = () => {

        isCollapsed(!collapsed)

    }
    return (
        <Nav.Item >
            <Accordion bsPrefix="acc">
                <Accordion.Item eventKey="0" >
                <Accordion.Header
                    as={Nav.Link}
                    onClick={toggleNavbar}
                >
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    <div className='text'>{title}</div>
                    <FontAwesomeIcon
                        icon={collapsed ? faCaretDown : faCaretUp}
                        className="float-right"
                    />
                </Accordion.Header>

                <Accordion.Body>
                    <nav className="nav flex-column">
                        {items.map((item: string) => (
                            <a
                                className={`nav-link pl-5 ${item === "Active" ? "active" : ""
                                    } `}
                                href="/"
                                key={item}
                            >
                               <span className='text'>{item}</span> 
                            </a>
                        ))}
                    </nav>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Nav.Item>
    )
}

export default SubMenu
