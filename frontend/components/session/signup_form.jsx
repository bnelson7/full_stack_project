import React from "react"
import { Link } from 'react-router-dom'
import { MdError } from 'react-icons/md'

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
    
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = Object.assign({}, this.state)
        this.props.createNewUser(newUser)
            .then(user => {
                const newChannel = { name: user.currentUser.username }
                this.props.createChannel(newChannel)
            })
    }

    render() {
        const { errors } = this.props

        return (
            <div className="signup-container">
                <div className="signup-left">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-title">
                            <img src={window.google_logo} className="google-logo" />
                            <h1>Create your Google Account</h1>
                            <h3>to continue to AdTube</h3>
                        </div>
                        <div className="signup-input">
                            <input type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} />
                            <div className="signup-session-errors-container">
                                {errors.slice(0,1).map((err, i) => (<li className="session-errors" key={`err-${i}`}>
                                    <span>
                                        <MdError />
                                    </span>{err}
                                </li>))}
                            </div>
                            <input type="text" placeholder="Your email address" value={this.state.email} onChange={this.update("email")} />
                            <div className="signup-session-errors-container">
                                {errors.slice(1,2).map((err, i) => (<li className="session-errors" key={`err-${i}`}>
                                    <span>
                                        <MdError />
                                    </span>{err}
                                </li>))}
                            </div>
                            <input type="text" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                            <div className="signup-session-errors-container">
                                {errors.slice(2).map((err, i) => (<li className="session-errors" key={`err-${i}`}>
                                    <span>
                                        <MdError />
                                    </span>{err}
                                </li>))}
                            </div>
                            <p>Use 6 or more characters with a mix of letters, numbers, & 
                            <br></br>symbols</p>
                        </div>
                        <div className="signup-links">
                            <p className="session-nav"><Link to="/login">Sign in instead</Link></p> 
                            <button className="signup-btn">Next</button>
                        </div>
                    </form>
                </div>
                <div className="signup-right">
                    <div className='signup-right-img'>
                        <img src={window.one_account}/>
                    </div>
                    <div className="signup-right-text">
                        <span>One account. All of the ads</span> 
                        <span>you could want.</span>
                    </div>
                </div>
            </div>   
        )
    }
}

export default SignupForm