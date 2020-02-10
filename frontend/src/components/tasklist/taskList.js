import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import {completeTask} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Tasks extends Component{

    showTasks(tasks) {

        console.log(tasks);

        let taskIds = Object.keys(tasks);
        return (
            taskIds.map((key) => {
                return (
                    <Row>
                        <Col>
                            {tasks[key].desc}
                        </Col>
                        <Col>
                            <Button id={key} variant="success" onClick={() => this.props.completeTask(key)}>Complete</Button>
                        </Col>
                    </Row>
                )
            })
        );
    }

    render() {
        const { tasks } = this.props;
        return (
            <Container>
                {
                    tasks.length === 0 ?
                    <div>No Tasks</div> :
                    this.showTasks(tasks)
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        completeTask
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);