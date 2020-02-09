import React,{ Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavBar from "../navbar/navbar";
import Tasks from "../tasklist/taskList";
import {initView} from "../../state/actions/actions"

export class MainView extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.initView();
    }

    render() {
        console.log(this.props);
        return (
            <div className="MainView">
                <NavBar />
                <Tasks tasks={this.props.tasks}/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        initView
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);