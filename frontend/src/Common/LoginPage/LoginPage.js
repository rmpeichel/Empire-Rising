import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            errorMsg: ''
        }
        this.submit = this.submit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }
    
    componentDidMount() {
        //this.props.clearRequestData();
        this.submit();
    }

    async submit() {

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value, error: ''});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value, error: ''});
    }

    render() {
        return (
            <div>
                <label>Username</label>
                <div>
                    <TextField value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <label>Password</label>
                <div>
                    <TextField value={this.state.password} onChange={this.handlePassChange} />
                </div> 
                <Link to="/registration" className="btn btn-link">Register</Link>
                <Button variant="outlined" onClick={this.submit}
                onKeyPress={(event) => {
                    if(event.key === "Enter") {
                        this.submit();
                    }
                }}
                >Login</Button>
            </div>
        );
    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch({type: 'login', user: user}),
        clearRequestData: () => dispatch({type: 'setRequestData', requests: [] }),
    }
}
*/
export default LoginPage;