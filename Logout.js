import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render()
{
    return (
        <div>
        <Link to="/sign-in"> Logout </Link>
        </div>
    )
}
}