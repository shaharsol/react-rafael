import { useForm } from 'react-hook-form'
import './Login.css'
import type LoginModel from '../../../models/Login'
import authService from '../../../services/auth'

export default function Login() {

    const {handleSubmit, register} = useForm<LoginModel>()

    async function login(login:LoginModel) {
        try {
            const { jwt } = await authService.login(login)
            alert(jwt)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(login)}>
                <input placeholder='username' {...register('username')}/>
                <input type="password" placeholder='password' {...register('password')}/>
                <button>Log In</button>
            </form>
        </div>
    )
}