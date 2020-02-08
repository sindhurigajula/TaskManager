import React, { Component } from 'react';

class Login extends Component{

    handleSubmit(values){
        alert(values);
    }
    
    render(){
        return(
            <Form onSubmit={(values)=>this.handleSubmit(values)}>
                <div class="navbar">
                    Login
                    <p>Username:</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                    
                </div>
            </Form>

        );
    }
}
export default Login;