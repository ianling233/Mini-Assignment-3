import React, {Component} from "react";

import Square from '../square/square'
import './app.css'


export default class App extends Component {
    state = {
        count: 0,
    }

    handleAddCount = () => {
        const count = this.state.count + 1
        this.setState({count:count})
    }

    handleSubtractCount = () => {
        const count = this.state.count - 1
        this.setState({count:count})
    }


    render() {
        const count = this.state.count;
        return (
            <div>
                <h3>Count: {count}</h3>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        </div>
                        <div className="col">
                            <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col square-box" style={{"backgroundColor":"blue"}}>
                            <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        </div>
                        <div className="col square-box" style={{"backgroundColor":"blue"}}>
                            <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}