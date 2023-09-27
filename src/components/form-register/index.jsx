import './form-register.css'

function FormRegister() {
    return (
        <section className="right">
            <form className="form-container">
                <h2>Sign Up</h2>
                <h5>Welcome! Please sign up first</h5>
                <div className="input-group">
                    <div className="username">
                        <label for="username" style={{color: '#D0CCCC', marginLeft: '6px'}}>Username: </label> <br />
                        <input type="text" className="input-credentials" id="input-username" />
                    </div>
                    <div className="fullname">
                        <label for="fullname" style={{color: '#D0CCCC', marginLeft: '6px'}}>Full name: </label> <br />
                        <input type="text" className="input-credentials" id="input-fullname" />
                    </div>
                    <div className="email">
                        <label for="email" style={{color: '#D0CCCC', marginLeft: '6px'}}>Email Address: </label> <br />
                        <input type="email" className="input-credentials" id="input-email" />
                    </div>
                    <div className="password">
                        <label for="password" style={{color: '#D0CCCC', marginLeft: '6px'}}>Password: </label> <br />
                        <input type="password" className="input-credentials" id="input-password" />
                    </div>
                </div>
                <div className="submit-button">
                    <button className="submitbtn" id="btn-register">Sign up</button>
                    <a href="./login.html">
                        <button className="registerbtn">Login</button>
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
export default FormRegister;