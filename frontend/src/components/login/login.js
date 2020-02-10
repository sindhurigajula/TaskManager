import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {validateLogin} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Login extends Component{

    handleInputChange(event){
        if(!event.target.value){
            err = "Username cannot be empty";
        }
    }
    handleInputChange2(event){
        if(!event.target.value){
            err = "Password cannot be empty";
        }
    }
    render(){
        return(
            <Form inline>
                <FormControl type="text" placeholder="Username" className="mr-sm-2" onChange={(e) => this.handleInputChange(e)} />
                <FormControl type="password" placeholder="Password" className="mr-sm-2" onChange={(e) => this.handleInputChange2(e)} />
                <Button id="signInBtn" variant="primary"> Sign In </Button>
            </Form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        validateLogin
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);