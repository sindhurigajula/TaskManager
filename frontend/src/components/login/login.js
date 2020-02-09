import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Login extends Component{

    render(){
        return(
            <Form inline>
                <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                <Button id="signInBtn" variant="primary"> Sign In </Button>
            </Form>
        );
    }
}
export default Login;