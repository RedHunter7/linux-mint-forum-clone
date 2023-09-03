import { type ReactNode } from 'react'

export const Register = (): ReactNode => {
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
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email"
              className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name"
              className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password"
              className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient">Create Account!!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
