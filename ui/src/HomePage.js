import React, { Component, Fragment } from 'react'

import EntryForm from './EntryForm'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
// import { Route } from 'react-router-dom'
// import Routes from './Nav/Routes'

export default class extends Component {
state = {

}

    render () {
        return (
            <Fragment>
                {/*<Routes />*/}
                <h1>Welcome to your Journal</h1>
                <LoginForm />
                <ForgotPassword />
                <EntryForm />
            </Fragment>
          )
        }
     }