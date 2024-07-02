import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../assets/image/register.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
const image_hosting_key = import.meta.env.VITE_IMAGE_BB_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.files[0]; // changed to access file input
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password, photo };

    if (photo) {
      const formData = new FormData();
      formData.append("image", photo);

      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (result.success) {
          const photoUrl = result.data.url;
          userInfo.photo = photoUrl;

          createUser(email, password).then((res) => {
            console.log(res.user);
            updateUserProfile(name, photoUrl)
              .then(() => {
                axiosPublic.post("users", userInfo).then((res) => {
                  if (res.data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User created Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
                console.log("User Profile is Updated ");
              })
              .catch((error) => console.log(error));
            navigate(from, { replace: true });
          });
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    } else {
      console.log("No photo selected");
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div className="text-center lg:text-left">
            <img src={registerImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  className="file-input file-input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
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
                  name="password"
                  placeholder="password"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider">or</div>
            <div className="text-center mb-5">
              <h1>
                If Already have an account. Go to{" "}
                <Link to="/login">
                  <span className="text-blue-500">Login</span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
