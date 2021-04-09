import {useState} from 'react'

import { PageHeader, Button, Modal, Form, Input } from 'antd';

import LoginModal from '../LoginModal/LoginModal'

import { Link } from 'react-router-dom';


import './Navigation.css'
import Login from '../LoginModal/LoginModal';



export default function Navigation({textButton}) {
    return (
       <>
            <PageHeader
                className="site-page-header"
                ghost={false}
                title="NewsApp"
                extra={[
                        <LoginModal type="primary" onClick={showmodal()}>
                            {textButton}
                        </LoginModal>
                ]}
                />
                <Login />

          </>

        // <Navbar>
        // <Navbar.Brand>
        //     <Navbar.Item href="#">
        //         <Title>NewsAPP</Title>
        //     </Navbar.Item>
        //     <Navbar.Burger />
        // </Navbar.Brand>

        // <Navbar.Menu>
        //     <Navbar.Item dropdown hoverable>
            
        //     { textButton === 'Log in' ? (
        //         <>
        //             {/* <Navbar.Link>Categories</Navbar.Link>
        //                 <Navbar.Dropdown>

        //                  { categories.map((categories) => (

        //                     <Navbar.Item>{categories}</Navbar.Item>
                            
        //                 ))} 
                    
        //                 </Navbar.Dropdown>
        //             */}
        //             <h1>Dropdown</h1>
        //         </>
        //     ) : (
        //         <h1>Link</h1>
        //         )}
            
        //     </Navbar.Item> 

        // <Navbar.Segment align="end">
        //     <Navbar.Item>
        //         <Link to="login">
        //             <Button.Group>                    
        //                 <Button color="primary">{textButton}</Button>
        //             </Button.Group>
        //         </Link>
        //     </Navbar.Item>
        //     </Navbar.Segment>
        // </Navbar.Menu>
        // </Navbar>
    )
}
