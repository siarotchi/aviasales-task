import React, { Component } from 'react'
import './Tabs.css'

class Tabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // selected: this.props.initial,
            selected: false,
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick = (event) => {
        console.log('Clicked')
        this.setState({
            selected: true,
        })
        // this.setState({
        //     ...this.state,
        //     selected: event.target.id,
        // })
        // this.props.setSorter(event.target.id)
    }

    render() {
        return (
            <div className="tabs">
                <div
                    className="column left"
                    id="cheapest"
                    isActive={this.state.selected === 'cheapest'}
                    onClick={this.onClick}
                >
                    Самый дешевый
                </div>
                <div
                    className="column right"
                    id="fastest"
                    isActive={this.state.selected === 'fastest'}
                    onClick={this.onClick}
                >
                    Самый быстрый
                </div>
            </div>
        )
    }
}

export default Tabs
