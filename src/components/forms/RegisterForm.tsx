import { type ReactNode } from 'react'
import useInput from '../../hooks/useInput'
import { type AccountRegisterProps } from '../../interfaces'

interface RegisterFormProps {
  register: (props: AccountRegisterProps) => void
}

export const RegisterForm = (prop: RegisterFormProps): ReactNode => {
  const [email, onEmailChange] = useInput('')
  const [name, onNameChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

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
              <input type="text" placeholder="password"
              className="input input-bordered"
              value={password} onChange={onPasswordChange}/>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient"
              onClick={
                () => {
                  prop.register({ name, email, password }
                  )
                }}>
                Create Account!!
              </button>
            </div>
        </div>
  )
}
