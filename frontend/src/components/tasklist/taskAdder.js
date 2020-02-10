import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import {addTask} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TaskAdder extends Component{

    render() {
        return (
            <Row>
                <Col>
                    <FormControl id="newTaskInput" type="text"/>
                </Col>
                <Col>
                    <Button id="newTaskBtn" variant="primary" onClick={ () => this.props.addTask(document.getElementById("newTaskInput").value)} >Add Task</Button>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        addTask
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdder);