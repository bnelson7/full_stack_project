import React from "react"
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            username: "", 
            email: "", 
            password: "" 
        }

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
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-title">
                        <img src="https://www.finsmes.com/wp-content/uploads/2016/09/google.jpg" className="google-logo" />
                        <h1>Create your Google Account</h1>
                        <h3>to continue to AdTube</h3>
                    </div>
                    <div className="signup-input">
                        <div><input type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} /></div>
                        <div><input type="text" placeholder="Your email address" value={this.state.email} onChange={this.update("email")} /></div>
                        <div><input type="text" placeholder="Password" value={this.state.password} onChange={this.update("password")} /></div>
                        <p>Use 6 or more characters with a mix of letters, numbers, & 
                        <br></br>symbols</p>
                    </div>
                    {/* {this.renderErrors()} */}
                    <p id="p1">Forgot you already had an account?</p>
                    <div className="signup-links">
                        <p className="session-nav"><Link to="/login">Sign in instead</Link></p> 
                        <button className="session-btn">Next</button>
                    </div>
                    {/* <div className="one-account-logo">
                        <img src="https://www.pikpng.com/pngl/b/136-1367487_google-account-products-icons-use-my-google-account.png" />
                    </div> */}
                </form>
            </div>   
        )
    }
}

export default SignupForm