import FormLogin from '../../components/form-login';
import LeftContainer from '../../components/left-container'
import './login.css'

const Login = () => {
    return (
        <>
            <main className="container">

                <LeftContainer />

                <FormLogin />
            </main>
        </>
    )
}
export default Login;