import { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../providers/AuthProvider";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(authContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        
    })
  };

  return (
    <>
      <title>Bristo Boss | Sing Up</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    className="input"
                    placeholder="type your name"
                  />
                  {errors.name && (
                    <span className="text-red-600">name is required</span>
                  )}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="input"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-600">email is required</span>
                  )}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    className="input"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">email is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">password max 20 character</p>
                  )}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <input
                    className="btn btn-neutral mt-4"
                    type="submit"
                    value="Sing Up"
                  />
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingUp;
