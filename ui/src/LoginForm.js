import React, { Component, Fragment } from 'react';
// import {Link} from 'react-router-dom';

export default class extends Component {
    state = {

    }

    render () {
        return (
            <Fragment>
                <h2>Login Here</h2>
                <form>
                    <input type="text" placeholder="User Name"/><br/>
                    <input type="text" placeholder="password"/>
                </form>
                {/*<ul>*/}
                    {/*<li><Link to="/profile">Sign In</Link></li>*/}
                    {/*<li><Link to="/newform">New User</Link></li>*/}
                    {/*<li><Link to="/forgotpassword">Forgot Password</Link></li>*/}
                {/*</ul>*/}
            </Fragment>
        )
    }
}