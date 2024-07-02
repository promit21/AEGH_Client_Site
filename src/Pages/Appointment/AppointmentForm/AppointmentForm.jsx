import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const AppointmentForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const gender = form.gender.value;
    const age = form.age.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const appointment_date = form.appointment_date.value;
    const services_name = form.services_name.value;
    const referenceEmail = form.referenceEmail.value;
    const appointmentInfo = {
      name,
      gender,
      age,
      address,
      phone,
      appointment_date,
      services_name,
      referenceEmail,
    };
    console.log(appointmentInfo);
    axiosSecure.post("/appointments", appointmentInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Appointment Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <h1 className="text-4xl font-semibold text-center my-8">
          Doctor Appointment Form
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="grid lg:grid-cols-2 gap-4">
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
                <span className="label-text">Gender</span>
              </label>
              <select className="select select-bordered w-full" name="gender">
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                name="age"
                placeholder="Enter Your Age"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Appointment Date</span>
              </label>
              <input
                type="date"
                name="appointment_date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Services</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="services_name"
            >
              <option value={"Gynecology Specialist and Surgeon"}>
                Gynecology Specialist and Surgeon
              </option>
              <option value={"Medicine, Hormone, and Diabetes Specialist"}>
                Medicine, Hormone, and Diabetes Specialist
              </option>
              <option value={"Orthopedic Specialist and Trauma Surgeon"}>
                Orthopedic Specialist and Trauma Surgeon
              </option>
              <option value={"Ear, Nose, and Throat Specialist"}>
                Ear, Nose, and Throat Specialist
              </option>
              <option value={"Dermatology, Venereology, and Sex Specialist"}>
                Dermatology, Venereology, and Sex Specialist
              </option>
              <option value={"Pediatrician"}>Pediatrician</option>
              <option value={"Neurologist"}>Neurologist</option>
              <option value={"Gastro-Liver Specialist"}>
                Gastro-Liver Specialist
              </option>
              <option value={"Ophthalmology Specialist and Surgeon"}>
                Ophthalmology Specialist and Surgeon
              </option>
              <option value={"Dental Department"}>Dental Department</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reference Email</span>
            </label>
            <input
              type="email"
              name="referenceEmail"
              defaultValue={user?.email}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
