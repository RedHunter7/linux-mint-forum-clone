import { type ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../redux/auth-user/action'
import { type AccountLoginProps } from '../interfaces'
import { type AppDispatch } from '../redux'
import { LoginForm } from '../components/forms'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const LoginPage = (): ReactNode => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const onLogin = (props: AccountLoginProps): void => {
    void dispatch(asyncSetAuthUser(props, () => {
      toast.success('Login Success!!')
      navigate('/')
    }))
  }

  return (
    <div className="hero min-h-[80vh] max-w-5xl mx-auto">
      <div className="hero-content flex-col
      md:w-4/5 lg:w-full lg:flex-row-reverse lg:gap-x-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Login now!
          </h1>
          <p className="py-2 md:py-6 leading-8 text-sm md:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm
        shadow-2xl bg-base-100">
         <LoginForm login={onLogin}/>
        </div>
      </div>
    </div>
  )
}
