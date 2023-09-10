import { type ReactNode } from 'react'
import useInput from '../../hooks/useInput'
import { type AccountLoginProps } from '../../interfaces'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

interface LoginFormProps {
  login: (props: AccountLoginProps) => void
}

export const LoginForm = (prop: LoginFormProps): ReactNode => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  const onSubmit = (): void => {
    const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat) === null) {
      toast.error('Email format invalid')
      return
    }

    if (password.length < 5) {
      toast.error('Password must at least 6 characters')
      return
    }

    prop.login({ email, password })
  }

  return (
    <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" placeholder="email"
      className="input input-bordered"
      value={email} onChange={onEmailChange}/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="text" placeholder="password"
      className="input input-bordered"
      value={password} onChange={onPasswordChange}/>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-gradient"
      onClick={onSubmit}>
        Login
      </button>
    </div>
    <label className="text-sm text-center mt-2">
        Does not have an account? &nbsp;
        <Link to={'/register'} className="link link-hover
        text-primary-focus font-bold">
          Create Account
        </Link>
    </label>
  </div>
  )
}
