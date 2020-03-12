import React from "react"
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: "", email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((err, i) => (
    //                 <li key={`err-${i}`}>
    //                     {err}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }

    render() {
        // console.log(this.props)
        return (
            <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="signup-title">
                        <h1 id="h1">Create an account</h1>
                        <h3 id="h3">to continue to AdTube</h3>
                    </div>
                    <div className="signup-input">
                        <p><input type="text" placeholder="username" value={this.state.username} onChange={this.update("username")} /></p>
                        <p><input type="text" placeholder="email" value={this.state.email} onChange={this.update("email")} /></p>
                        <p><input type="text" placeholder="password" value={this.state.password} onChange={this.update("password")} /></p>
                    </div>
                    {/* {this.renderErrors()} */}
                    <p>Forgot you already had an account?</p>
                    <Link to="/login">Sign In</Link> 
                        <button onClick={this.handleSubmit} className="signup-btn">SIGN UP</button>
                </form>
            </div>   
        )
    }
}

export default SignupForm