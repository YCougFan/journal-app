import React, {Component, Fragment} from 'react'

// import {Link} from 'react-router-dom'

export default class extends Component {
    state = {
        emailPassword: '',
        // textPassword: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            emailPassword: '',
            // textPassword: '',
        })
    };
    //Radio buttons commented out
    //textPassword codes commented out
    // If we want to include text option,
    // I'll have to explore further how to get them working together
    render() {
        return (
            <Fragment>
                {/*<Link to="/">Reset Password</Link>*/}
                {/*Will's code goes under here*/}
                <form>
                    Enter email to reset password
                    <br/>
                    <br/>
                    {/*<input type="radio" name="forgotPassword" />*/}
                    Email:
                    <input
                        type="email"
                        name="emailPassword"
                        value={this.state.emailPassword}
                        onChange={e => this.change(e)}/>
                    <br/>
                    {/*<input type="radio" name="forgotPassword" />*/}
                    {/*Text:*/}
                    {/*<input*/}
                    {/*type="number"*/}
                    {/*name="textPassword"*/}
                    {/*placeholder="xxx-xxx-xxxx"*/}
                    {/*value={this.state.textPassword}*/}
                    {/*onChange={e => this.change(e)} />*/}
                    <br/>
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </Fragment>
        );
    }
}