import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <Link to="/">首页</Link>
                    <br />
                    <Link to="/detail">详情页</Link>
                </div>
                <Routes />   
            </div>
        )
    }
}
