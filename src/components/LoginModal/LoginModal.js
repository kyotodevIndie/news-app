import React, { useState } from 'react'

import { useNavigate  } from 'react-router-dom';

import fire from '../../services/firebase'

import { Button, Modal, Form, Input } from 'antd';

export default function Login({children}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const navigate = useNavigate();

    function showModal() {
        setIsLoginModalVisible(true);
      };

    function Login(children) {
        fire.auth().signInWithEmailAndPassword(email, password).then(user => {
          navigate('/userpage');
        }).catch((error) => {
          setError(error.message)
        });
        setIsLoginModalVisible(false);
        console.log(error)
      }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {children}
            </Button>
            <Modal title="Login"
             visible={isLoginModalVisible}
            footer={[
                <Button
                    key="link"
                    type="primary"
                    onClick={Login}
                >
                    Log in
                </Button>
                ]}
            >
            <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={password} onChange={e=> setPassword(e.target.value)}/>
                </Form.Item>
            </Modal>
    </>
    )
}
