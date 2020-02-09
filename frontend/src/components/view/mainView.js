import React,{ Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavBar from "../navbar/navbar";
import TaskList from "../tasklist/taskList";
import Jumbotron from "react-bootstrap/Jumbotron";

export class MainView extends Component {

    render() {
        return (
            <div className="MainView">
                <NavBar/>
                <Jumbotron fluid>
                    <TaskList/>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {},
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);