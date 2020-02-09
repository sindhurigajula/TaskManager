import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tasks extends Component{

    showTasks(tasks) {
        return (
            tasks.map((task) => {
                return (
                    <Container>
                        <Row >
                            <Col>
                                {task}
                            </Col>
                            <Col>
                                <Button>Done</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            })
        );
    }
    
    render() {
        const { tasks } = this.props;
        return (
            <Jumbotron>
                {
                    tasks.length === 0 ?
                    <div>No Tasks</div> :
                    this.showTasks(tasks)
                }
            </Jumbotron>
        );
    }
}

export default Tasks;