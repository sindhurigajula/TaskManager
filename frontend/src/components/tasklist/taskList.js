import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'

class Tasks extends Component{

    showTasks(tasks) {
        return (
            tasks.map((task) => {
                return (<div>{task}</div>)
            })
        );
    }
    
    render(){
        this.props = {tasks: [1,2,3]};
        const { tasks } = this.props;

        return(
            <Jumbotron>
                <Container>
                    {
                        tasks.length == 0 ?
                        <div>No Tasks</div> :
                        this.showTasks(tasks)
                    }
                </Container>
            </Jumbotron>
        );
    }
}
export default Tasks;