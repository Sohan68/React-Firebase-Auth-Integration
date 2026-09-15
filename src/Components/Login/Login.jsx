import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { signInUser, signInWithGoogle } = use(AuthContext);
  const hangleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        ``;
        console.log(result);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={hangleLogin} className="card-body">
          <h1 className="text-3xl font-bold">Please Login Now!</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition"
          >
            <FcGoogle size={22} />
            <span className="font-medium text-center text-gray-700">
              Sign in with Google
            </span>
          </button>
        </form>
        <p className=" text-center">
          New to our website ? please{" "}
          <Link className="text-blue-400 hover:text-blue-700" to={`/register`}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
