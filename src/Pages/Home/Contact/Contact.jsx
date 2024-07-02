import { FaMapLocation } from "react-icons/fa6";
import { SlCallOut } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="hero  bg-[#07332F] rounded-lg my-16">
      <div className="flex flex-col items-center lg:flex-row px-10 py-9">
        <div className="text-center text-white lg:text-left w-6/12 space-y-5">
          <h1 className="text-5xl font-bold">Contact With Us</h1>
          <p className="py-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <p className="flex gap-3 items-center text-2xl">
            <SlCallOut /> +01409348777
          </p>
          <p className="flex gap-3 items-center text-2xl">
            <FaMapLocation /> Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
        <div className="card shrink-0  shadow-2xl">
          <form className="card-body">
            <div className="grid grid-cols-2 gap-x-4"> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-opacity-30 text-white"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#F7A582] border-none">Book Now!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
