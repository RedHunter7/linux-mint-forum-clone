import { type ReactNode } from 'react'
import useInput from '../../hooks/useInput'
import { type AccountRegisterProps } from '../../interfaces'
import { toast } from 'react-hot-toast'

interface RegisterFormProps {
  register: (props: AccountRegisterProps) => void
}

export const RegisterForm = (prop: RegisterFormProps): ReactNode => {
  const [email, onEmailChange] = useInput('')
  const [name, onNameChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [passwordConfirmation, onPasswordConfirmationChange] = useInput('')

  const onSubmit = (): void => {
    const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat) === null) {
      toast.error('Email format invalid')
      return
    }

    if (name.length <= 3) {
      toast.error('Name must at least 3 characters')
      return
    }

    if (password.length < 5) {
      toast.error('Password must at least 6 characters')
      return
    }

    if (password !== passwordConfirmation) {
      toast.error('Password must be confirmed')
      return
    }

    prop.register({ name, email, password })
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
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name"
              className="input input-bordered"
              value={name} onChange={onNameChange}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password"
              className="input input-bordered"
              value={password} onChange={onPasswordChange}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input type="password" placeholder="Retype password"
              className="input input-bordered"
              value={passwordConfirmation} onChange={onPasswordConfirmationChange}/>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient"
              onClick={onSubmit}>
                Create Account!!
              </button>
            </div>
        </div>
  )
}
