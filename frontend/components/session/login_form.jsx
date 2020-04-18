import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    update(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors.length !== prevProps.errors.length) {
            this.setState( { email: "" })
        }

        // toggle input class to different style when errors present ie: red border no text in input and text on top left border
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.loginUser(user)
    }

    handleDemoLogin(e) {
        e.preventDefault(e);
        this.props.loginDemoUser()
        .then(() => {
            this.props.history.push('/')
        })
    }

    renderErrors() {
        return (
            <ul >
                {this.props.errors.map((err, i) => (
                    <li className="login-errors" key={`err-${i}`}>
                            <span><MdError /></span>  {err}
                    </li>))}
            </ul>
        )
    }

    render() {
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
                        <div>
                            <input type="text" className="login-input" placeholder="Enter your email" value={this.state.email} onChange={this.update("email")}/>
                        </div>
                        {this.renderErrors()}
                        <p>Don't have an account?</p>
                        <button id="p1" onClick={this.handleDemoLogin}>Login as demo user</button> 
                    </div>
                    <div className="login-links">
                        <p id="p1"><Link to="/signup">Create account</Link></p>
                        <button className="session-button">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm