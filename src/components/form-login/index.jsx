import './form-login.css'

function FormLogin() {
    return (
        <section className="right">
                    <form className="form-container">
                        <h2>Login</h2>
                        <h5>Welcome back! You need to login first</h5>
                        <div className="input-group">
                            <div className="email">
                                <label for="email">Email Address: </label> <br />
                                <input type="email" className="input-credentials" id="input-email" />
                            </div>
                            <div className="password">
                                <label for="password">Password: </label> <br />
                                <input type="password" className="input-credentials" id="input-password" />
                            </div>
                        </div>
                        <div className="input-group-2">
                            <div>
                                <input type="checkbox" name="rememberme" id="rememberme" />
                                <label for="rememberme" style={{color: '#D0CCCC'}}>Remeber Me</label>
                            </div>
                            <a href="">Forgot Password?</a>
                        </div>
                        <div className="submit-button">
                            <button className="submitbtn" id="btn-login">Login</button>
                            <a href="./register.html">
                                <button className="registerbtn">Sign Up</button>
                            </a>
                        </div>
                    </form>
                    <div className="terms">
                        <h6>By signing up, you aggree to Library's</h6>
                        <a href="">Terms and Conditions & Privacy Policy</a>
                    </div>
        </section>
    )
}

export default FormLogin;