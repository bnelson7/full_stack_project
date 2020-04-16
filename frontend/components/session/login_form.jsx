import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((err, i) => (
                    <li key={`err-${i}`}>
                        {err}
                    </li>
                    ))}
            </ul>
        )
    }

    render() {
        // const { errors } = this.props
        return (
            <div className="login-container">
            
                <div className="login-header">
                    <img src="https://www.finsmes.com/wp-content/uploads/2016/09/google.jpg" className="google-logo" />
                    <div className="login-icon"><FaUserCircle /></div>
                    <h1>Sign in with your Google account</h1>
                </div>
                
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <div className="input">
                            <input type="text" placeholder="Enter your email" value={this.state.email} onChange={this.update("email")}/>
                        </div>
                                {this.renderErrors()}
                                <br/>
                                <p>Don't have an account?</p>
                                <p id="p1"><Link to="/">Login as demo user</Link></p> 
                    </div>
                    <div className="login-links">
                        <p id="p1">{this.props.signUpLink}</p>
                        <button className="session-button">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm