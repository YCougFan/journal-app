import React, { Component, Fragment } from 'react';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <h1>Journal Entry for (today's date)</h1>
        <input type="text" placeholder="heading"/><br/><br/>
        <textarea name="message" rows="40" cols="120">
        </textarea><br/><br/>
        <input type="submit" value="Submit"/>
      </Fragment>
     )
   }
}