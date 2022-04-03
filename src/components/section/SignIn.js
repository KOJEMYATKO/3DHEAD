import React, { Component } from 'react'
import '../css/styles.css'
import { withRouter } from "react-router-dom";



export class SignIn extends Component {
    render() {
        return (
            <div class="signin-form">
  <form class="form">
    <h2>Sign In</h2>
    <div class="form-row">
      <label class="fontawesome-user" for="username"></label>
      <input id="username" type="text" placeholder="Enter Username" required/>
    </div>
    <div class="form-row">
      <label class="fontawesome-key" for="password"></label>
      <input id="password" type="password" placeholder="Enter Password" required/>
    </div>
    <div class="form-row">
     <button onclick={""}>Sign In</button>
    </div>
  </form>
</div>
        )
        
    }
}

export default SignIn



