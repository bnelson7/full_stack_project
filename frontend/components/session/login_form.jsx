import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

class LoginForm extends React.Component {
    constructor(props) {
        
        super(props)

        this.state = { 
            email: "",
            password: "password" 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    update(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
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
        e.preventDefault();
        this.props.loginDemoUser()
        .then(() => {
            this.props.history.push('/')
        })
    }

    renderErrors() {
        const { errors } = this.props
        
        return (
            <ul >
                {errors.map((err, i) => (
                    <li className="session-errors" key={`err-${i}`}>
                            <span><MdError /></span>  {err}
                    </li>))}
            </ul>
        )
    }

    render() {
        
        return (
            <div className="login-container">
            
                <div className="login-header">
                    <div className="login-header-google">
                        <img src={window.google_logo} className="google-logo-login" />
                    </div>
                    <div className="login-icon">
                        <FaUserCircle />
                    </div>
                    <h1>Sign in with your Google account</h1>
                </div>
                
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <input type="text" className="login-input" placeholder="Enter your email" value={this.state.email} onChange={this.update("email")}/>
                        {this.props.errors && this.renderErrors()}
                        <div className="login-demo-container">
                            <div className="login-demo">
                                <span>Don't have an account?</span>
                                <button className="session-nav" onClick={this.handleDemoLogin}>Login as demo user</button>
                            </div>
                            <p>Not your computer? Use guest mode to sign in privately.
                            <br></br><span className="session-nav">Learn more</span></p>
                        </div>
                    </div>
                    <div className="login-links">
                        <p className="session-nav"><Link to="/signup">Create account</Link></p>
                        <button className="session-btn">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm