import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { axiosPublic } from "../../../Hooks/useAxios";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_BB_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const doctor_name = form.doctor_name.value;
    const position = form.position.value;
    const specialty = form.specialty.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const address = form.address.value;
    const degree = form.degree.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const workplace = form.workplace.value;
    const fees = form.fees.value;
    const workdays = form.workdays.value;
    const photo = form.photo.files[0]; // Get the image file

    // Prepare the FormData object for the image upload
    const formData = new FormData();
    formData.append("image", photo);

    try {
      // Upload the image to ImageBB
      const imageResponse = await axiosPublic.post(
        image_hosting_api,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (imageResponse.data.success) {
        const photoUrl = imageResponse.data.data.url; // Get the URL of the uploaded image

        const doctorInfo = {
          doctor_name,
          specialty,
          description,
          rating,
          address,
          position,
          degree,
          email,
          phone,
          workplace,
          fees,
          workdays,
          photo: photoUrl, // Save the URL of the uploaded image
        };

        // Save the doctor information to your database
        const response = await axiosSecure.post("/doctors", doctorInfo);
        if (response.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Doctor Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Image Upload Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Image Upload Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <SectionTitle heading={"Add a Doctor Profile"} />
      <div>
        <h1>Total Doctor: </h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            {/* Doctor Profile */}
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Doctor Name <span className="text-red-500 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="doctor_name"
                  placeholder="Enter a Doctor Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Position<span className="text-red-500 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="position"
                  placeholder="Enter a Doctor Position"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <input
                  type="text"
                  name="specialty"
                  placeholder="Enter the doctor Specialty"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="5.0"
                  min={0.0}
                  max={5.0}
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
                  placeholder="Enter full address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Degree</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  placeholder="Enter doctor Degree"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Doctor Description</span>
                </label>
                <textarea
                  placeholder="Write a Doctor Bio"
                  name="description"
                  className="textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Workplace (Hospital Name)</span>
                </label>
                <input
                  type="text"
                  name="workplace"
                  placeholder="Enter name of Workplace"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Workdays</span>
                </label>
                <input
                  type="text"
                  name="workdays"
                  placeholder="Enter Workdays"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fees</span>
                </label>
                <input
                  type="text"
                  name="fees"
                  placeholder="Enter a Doctor Fees"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Doctor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
