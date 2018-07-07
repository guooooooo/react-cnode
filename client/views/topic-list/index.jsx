import React, { Component } from 'react';
import {
    observer,
    inject
} from 'mobx-react'
import PropTypes from 'prop-types'

@inject('store') @observer
export default class TopicList extends Component {
    constructor(props) {
        super(props)
    }
    changeName = (e) => {
        this.props.store.changeName(e.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeName}/>
                <span>{this.props.store.msg}</span>
            </div>
        )
    }
}

TopicList.propTypes = {
    appState: PropTypes.object
}