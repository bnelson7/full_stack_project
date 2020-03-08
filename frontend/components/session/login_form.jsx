import React from 'react'
import { Link } from 'react-router-dom'

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

    render() {
        // const { errors } = this.props
        return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-box">
                    <div className="login-form">
                        {/* <i className="fas fa-ad"></i> */}
                        <h1>Sign In</h1>
                        <h3>to continue to AdTube</h3>
                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} className="login-input"/>
                        <p>Don't have an account?</p>
                        <p><Link to="/">login as demo user</Link></p> 
                        {this.props.signUpLink}
                    </div>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm