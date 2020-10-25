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
                <div className="container">
                    <div className="row">
                        <h3>Count: {count}</h3>
                    </div>
                    <div className="row">
                        <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                    </div>
                    <div className="row">
                        <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                        <Square handleAddCount={this.handleAddCount} handleSubtractCount={this.handleSubtractCount}/>
                    </div>
                </div>
            </div>
        );
    }
}