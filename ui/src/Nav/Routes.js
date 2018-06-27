import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = ({ match }) => (
    <div>
        <h1>Welcome to your Journal</h1>
        <h2>{match.params.login}</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Homes = ({ match }) => (
    <div>
        <h2>Your Journal</h2>
        <ul>
            <li>
                <Link to={`${match.url}/Login Here`}>
                    Login Here
                </Link>
            </li>
        </ul>
        <Route path={`${match.path}/:login`} component={Homes}/>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Routes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Your Journal</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)
export default Routes

// import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
// import HomePage from "../HomePage";
// import LoginForm from "../LoginForm";
// import EntryForm from "../EntryForm";
//
// export default class extends Component {
//   render() {
//     return (
//       <Fragment>
//           <Route exact path="/" component={HomePage}/>
//           <Route path="/login" component={LoginForm}/>
//           {/*<Route path="/forgotpassword" component={ForgotPassword}/>*/}
//           <Route path="/entry" component={EntryForm}/>
//       </Fragment>
//      )
//    }
// }
