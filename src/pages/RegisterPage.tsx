import { type ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../redux/users/action'
import { type AccountRegisterProps } from '../interfaces'
import { type AppDispatch } from '../redux'
import { RegisterForm } from '../components/forms'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = (): ReactNode => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const onRegister = (props: AccountRegisterProps): void => {
    void dispatch(asyncRegisterUser(props, () => {
      toast.success('Register Account Success!!')
      navigate('/login')
    }))
  }

  return (
    <div className="hero min-h-[80vh] max-w-5xl mx-auto">
      <div className="hero-content flex-col
      md:w-4/5 lg:w-full lg:flex-row lg:gap-x-16">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl
          font-bold py">
            Create Account
          </h1>
          <p className="py-2 md:py-6 leading-8 text-sm md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm
        shadow-2xl bg-base-100">
          <RegisterForm register={onRegister}/>
        </div>
      </div>
    </div>
  )
}
