import React, {Component} from 'react';

import './square.css'
export default class square extends Component {
    state = {
        color: "white"
    }

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const color = this.state.color;
        if (color == "white") {
            this.setState({color:"black"})
            this.props.handleAddCount()
        } else {
            this.setState({color:"white"})
            this.props.handleSubtractCount()
        }
        


    }
    render () {
        const color = this.state.color;
        return (
            <div className="square-box" onClick={this.handleClick} style={{'backgroundColor':color}}>
            </div>
        )
    }
}