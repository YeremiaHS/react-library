import FormRegister from '../../components/form-register'
import LeftContainer from '../../components/left-container'
import './register.css'

const Register = () => {
    return (
        <>
            <main className="container">
                <LeftContainer />

                <FormRegister />
            </main>
        </>
    )
} 

export default Register;