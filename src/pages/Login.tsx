import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Login = (): ReactNode => {
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
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password"
              className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient">Login</button>
            </div>
            <label className="text-sm text-center mt-2">
                Does not have an account? &nbsp;
                <Link to={'/register'} className="link link-hover
                text-primary-focus font-bold">
                  Create Account
                </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
